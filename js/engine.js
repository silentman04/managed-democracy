/**
 * Helldivers 2 Kill Math Engine
 * Calculates damage per shot/spray, armor penetration, durable damage blending,
 * explosive damage resistance, limb transfer caps, and shots/time to kill.
 */

const KillMathEngine = (function () {
  const AP_NAMES = {
    0: "Unarmoured",
    1: "Very light",
    2: "Light",
    3: "Medium",
    4: "Heavy",
    5: "Anti-tank I",
    6: "Anti-tank II",
    7: "Anti-tank III",
    8: "Anti-tank IV",
    9: "Anti-tank V",
    10: "Anti-tank VI"
  };

  /**
   * Determine AP vs AV result
   */
  function checkAP(ap, av) {
    if (ap > av) return { factor: 1.0, type: "full", label: "Full (red)" };
    if (ap === av) return { factor: 0.65, type: "white", label: "65% (white)" };
    return { factor: 0.0, type: "bounce", label: "Bounce (0)" };
  }

  /**
   * Calculate a single row for a weapon against a specific enemy body part
   */
  function computePart(enemyName, weaponName, partData, enemyData, weaponData) {
    const [partName, partHp, partAv, durFrac, toMainFrac, exdrFrac, isFatal] = partData;
    const durPct = Math.round(durFrac * 100);
    const toMainPct = Math.round(toMainFrac * 100);
    const exdrPct = Math.round(exdrFrac * 100);

    const isFlame = weaponData.kind === "flame";
    const mainPool = enemyData.main;
    const mainAv = enemyData.main_av;
    const sizeMult = enemyData.fire || 1.0;

    let mathParts = [];
    let partDmg = 0;
    let mainDmg = 0;
    let primaryApType = "full";

    // ----------------------------------------------------
    // 1. FLAME WEAPONS
    // ----------------------------------------------------
    if (isFlame) {
      const ecMult = weaponData.ec ? 1.25 : 1.0;
      const baseDps = weaponData.dps;
      const apPartCheck = checkAP(4, partAv);
      primaryApType = apPartCheck.type;

      // Direct spray damage per second on part
      const sprayDps = +(baseDps * sizeMult * ecMult * apPartCheck.factor).toFixed(1);

      // Burn DoT on Main pool
      const apMainCheck = checkAP(4, mainAv);
      const burnDps = +(100 * sizeMult * ecMult * apMainCheck.factor).toFixed(1);

      const mathDesc = `spray ${baseDps}/s x size ${sizeMult}${weaponData.ec ? " x EC 1.25" : ""} x AP ${apPartCheck.label} = ${sprayDps}/s on part; burn DoT 100/s x size ${sizeMult}${weaponData.ec ? " x EC 1.25" : ""} x AP vs Main AV${mainAv} ${apMainCheck.label} = ${burnDps}/s on Main`;

      let toBreak = "";
      let toKill = "—";
      let timeSec = "";
      let route = "No damage";

      if (sprayDps > 0 && partHp !== null && typeof partHp === "number") {
        toBreak = +(partHp / sprayDps).toFixed(1);
      }

      if (isFatal) {
        if (sprayDps > 0 && partHp !== null && typeof partHp === "number") {
          const t = +(partHp / sprayDps).toFixed(1);
          toKill = t;
          timeSec = t;
          route = "Burn through fatal part";
        } else if (burnDps > 0 || (sprayDps > 0 && partHp === null)) {
          // Fatal part direct to main
          const effDps = sprayDps * toMainFrac + burnDps;
          if (effDps > 0) {
            const t = +(mainPool / effDps).toFixed(1);
            toKill = t;
            timeSec = t;
            route = "Drain Main (spray + burn DoT)";
          }
        }
      } else {
        // Non-fatal part
        if (burnDps > 0) {
          if (sprayDps > 0 && partHp !== null && typeof partHp === "number") {
            const tBreak = partHp / sprayDps;
            const mainDrainedDuringBreak = (partHp * toMainFrac) + (burnDps * tBreak);
            if (mainDrainedDuringBreak >= mainPool) {
              const effDps = (sprayDps * toMainFrac) + burnDps;
              const t = +(mainPool / effDps).toFixed(1);
              toKill = t;
              timeSec = t;
              route = "Drain Main through part";
            } else {
              const remainingMain = mainPool - mainDrainedDuringBreak;
              const tRemain = remainingMain / burnDps;
              const tTotal = +(tBreak + tRemain).toFixed(1);
              toKill = tTotal;
              timeSec = tTotal;
              route = "Break part, then burn DoT finishes Main";
            }
          } else if (partHp === null) {
            const effDps = sprayDps * toMainFrac + burnDps;
            if (effDps > 0) {
              const t = +(mainPool / effDps).toFixed(1);
              toKill = t;
              timeSec = t;
              route = "Drain Main (spray + burn DoT)";
            }
          }
        }
      }

      let canisterNote = "";
      if (typeof toKill === "number" && weaponData.fuel_s) {
        canisterNote = `${(toKill / weaponData.fuel_s).toFixed(2)} canisters/tanks of fuel`;
      }

      return {
        enemy: enemyName,
        weapon: weaponName,
        part: partName,
        hp: partHp,
        av: partAv,
        dur: durPct,
        tomain: toMainPct,
        exdr: exdrPct,
        fatal: isFatal ? "Yes" : "No",
        apc: primaryApType,
        dmg: sprayDps,
        brk: toBreak,
        kill: toKill,
        time: timeSec,
        route: route,
        math: mathDesc,
        note: canisterNote || weaponData.note || ""
      };
    }

    // ----------------------------------------------------
    // 2. HIT / PROJECTILE / EXPLOSIVE WEAPONS
    // ----------------------------------------------------
    let mainPreBurn = 0;
    let burnNoteMath = "";
    if (weaponData.burn && weaponData.burn > 0) {
      const apMainCheck = checkAP(4, mainAv);
      mainPreBurn = Math.floor(100 * sizeMult * apMainCheck.factor * weaponData.burn);
      burnNoteMath = `; + burn 100/s x size ${sizeMult} x AP vs Main AV${mainAv} ${apMainCheck.label} x ${weaponData.burn} s = ${mainPreBurn} to Main (Main ${mainPool} -> ${Math.max(0, mainPool - mainPreBurn)} left for bullets)`;
    }

    weaponData.comps.forEach(([compName, rawDmg, durDmg, compAp, isExplosion], idx) => {
      const apResult = checkAP(compAp, partAv);
      if (idx === 0) primaryApType = apResult.type;

      if (isExplosion) {
        // Explosions bypass durability, affected by ExDR and AP vs AV
        const rawAfterExdr = rawDmg * (1 - exdrFrac);
        const compDmg = Math.floor(rawDmg * apResult.factor * (1 - exdrFrac));
        partDmg += compDmg;
        mainDmg += compDmg * toMainFrac;

        mathParts.push(`${compName}: ${rawDmg} x AP ${apResult.label} x (1-ExDR ${exdrPct}%) = ${compDmg}`);
      } else {
        // Projectiles blend raw and durable damage
        const blended = Math.floor(rawDmg * (1 - durFrac) + durDmg * durFrac);
        const compDmg = Math.floor(blended * apResult.factor);
        partDmg += compDmg;
        mainDmg += compDmg * toMainFrac;

        const durCalcStr = `${rawDmg}x${(1 - durFrac).toFixed(2)} + ${durDmg}x${durFrac.toFixed(2)} = ${blended}`;
        mathParts.push(`${compName}: ${durCalcStr} x AP ${apResult.label} = ${compDmg}`);
      }
    });

    const fullMathStr = mathParts.join("; ") + burnNoteMath;

    let toBreak = "";
    let toKill = "—";
    let timeSec = "";
    let route = "No damage";

    // Break calculation
    if (partHp !== null && typeof partHp === "number") {
      if (partDmg > 0) {
        toBreak = Math.ceil(partHp / partDmg);
      }
    }

    // Kill calculation
    const effectiveMainPool = Math.max(0, mainPool - mainPreBurn);

    if (isFatal) {
      if (partHp !== null && typeof partHp === "number") {
        if (partDmg > 0) {
          toKill = Math.ceil(partHp / partDmg);
          route = "Destroy fatal part";
        }
      } else if (partHp === null || partHp === "Main") {
        // Part feeds purely into Main
        if (partDmg > 0) {
          const hits = Math.ceil(effectiveMainPool / partDmg);
          toKill = hits;
          route = `Main pool (${toMainPct}% transfer)`;
        }
      }
    } else {
      // Non-fatal part
      if (partHp !== null && typeof partHp === "number") {
        // Transfer cap check
        const maxTransferFromPart = partHp * toMainFrac;
        if (maxTransferFromPart < effectiveMainPool) {
          // Cannot kill by shooting this part alone
          toKill = "—";
          route = "Breaks part only (armor strip) – then shoot what's underneath";
        } else {
          // Can deplete Main before or upon breaking
          if (mainDmg > 0) {
            const hitsToKillMain = Math.ceil(effectiveMainPool / mainDmg);
            toKill = hitsToKillMain;
            route = `Main pool (${toMainPct}% transfer)`;
          }
        }
      } else {
        if (mainDmg > 0) {
          toKill = Math.ceil(effectiveMainPool / mainDmg);
          route = `Main pool (${toMainPct}% transfer)`;
        }
      }
    }

    // Time calculation (for automatic/semi weapons with RPM)
    if (typeof toKill === "number" && weaponData.rate) {
      if (toKill <= 1) {
        timeSec = 0.0;
      } else {
        timeSec = +((toKill - 1) * (60 / weaponData.rate)).toFixed(2);
      }
    }

    return {
      enemy: enemyName,
      weapon: weaponName,
      part: partName,
      hp: partHp,
      av: partAv,
      dur: durPct,
      tomain: toMainPct,
      exdr: exdrPct,
      fatal: isFatal ? "Yes" : "No",
      apc: primaryApType,
      dmg: partDmg,
      brk: toBreak,
      kill: toKill,
      time: timeSec,
      route: route,
      math: fullMathStr,
      note: weaponData.note || ""
    };
  }

  /**
   * Compute all rows for an entire faction
   */
  function computeFactionRows(factionName, enemiesCatalog, weaponsCatalog) {
    const rows = [];
    for (const [enemyName, enemyData] of Object.entries(enemiesCatalog)) {
      if (enemyData.faction !== factionName) continue;
      for (const [weaponName, weaponData] of Object.entries(weaponsCatalog)) {
        for (const part of enemyData.parts) {
          rows.push(computePart(enemyName, weaponName, part, enemyData, weaponData));
        }
      }
    }
    return rows;
  }

  /**
   * Find the optimal (fastest / minimum hits) kill route for each enemy and weapon
   */
  function computeBestRoutes(enemiesCatalog, weaponsCatalog) {
    const best = {};
    for (const [enemyName, enemyData] of Object.entries(enemiesCatalog)) {
      for (const [weaponName, weaponData] of Object.entries(weaponsCatalog)) {
        let bestRow = null;
        for (const part of enemyData.parts) {
          const row = computePart(enemyName, weaponName, part, enemyData, weaponData);
          if (typeof row.kill === "number") {
            if (!bestRow) {
              bestRow = row;
            } else {
              // Compare: prefer fewer hits or fewer seconds
              if (row.kill < bestRow.kill) {
                bestRow = row;
              }
            }
          }
        }
        if (bestRow) {
          const isFlame = weaponData.kind === "flame";
          best[`${enemyName}|${weaponName}`] = {
            k: bestRow.kill,
            p: bestRow.part,
            u: isFlame ? "s" : "hits",
            route: bestRow.route
          };
        }
      }
    }
    return best;
  }

  return {
    checkAP,
    computePart,
    computeFactionRows,
    computeBestRoutes,
    AP_NAMES
  };
})();
