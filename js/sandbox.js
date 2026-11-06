/**
 * Helldivers 2 "What-If" Damage Sandbox
 * Interactive tuning laboratory for AR-2 Coyote, PLAS-1 Scorcher, and PLAS-101 Purifier / Pacifier.
 */

const WhatIfSandbox = (function () {
  // Default baseline presets for the 3 weapons
  const BASELINES = {
    "AR-2 Coyote": {
      raw: 75,
      durable: 10,
      ap: 3,
      rate: 600,
      burn: 3
    },
    "PLAS-1 Scorcher": {
      bolt_raw: 100,
      bolt_dur: 50,
      bolt_ap: 2,
      blast_raw: 100,
      blast_ap: 3,
      rate: 350
    },
    "PLAS-101 Purifier / Pacifier": {
      bolt_raw: 200,
      bolt_dur: 100,
      bolt_ap: 3,
      blast_raw: 300,
      blast_ap: 3,
      charge_s: 1.0
    }
  };

  // Current mutable state of sliders
  let state = {
    activeWeapon: "AR-2 Coyote",
    targetEnemy: "Charger",
    targetPartIdx: 0,
    values: JSON.parse(JSON.stringify(BASELINES))
  };

  function init() {
    renderSandboxUI();
    attachListeners();
    recalculate();
  }

  function renderSandboxUI() {
    const container = document.getElementById("sandbox-container");
    if (!container) return;

    // Build enemy and parts select options
    const enemyOptions = Object.keys(ENEMIES_DATA)
      .map(e => `<option value="${e}" ${e === state.targetEnemy ? "selected" : ""}>${e} (${ENEMIES_DATA[e].faction})</option>`)
      .join("");

    container.innerHTML = `
      <div class="sandbox-card">
        <div class="sandbox-header">
          <div>
            <h3 style="margin:0;">Select Weapon to Customize</h3>
            <p class="lede" style="margin:4px 0 0;">Adjust damage curves, durable scaling, and AP penetration values to see how buff/nerf ideas perform.</p>
          </div>
          <div style="display:flex; gap:8px; align-items:center;">
            <select id="sb-weapon-select" style="font-weight:600;">
              <option value="AR-2 Coyote" ${state.activeWeapon === "AR-2 Coyote" ? "selected" : ""}>AR-2 Coyote</option>
              <option value="PLAS-1 Scorcher" ${state.activeWeapon === "PLAS-1 Scorcher" ? "selected" : ""}>PLAS-1 Scorcher</option>
              <option value="PLAS-101 Purifier / Pacifier" ${state.activeWeapon === "PLAS-101 Purifier / Pacifier" ? "selected" : ""}>PLAS-101 Purifier / Pacifier</option>
            </select>
            <button class="btn" id="sb-reset-btn" title="Reset to default in-game stats">↺ Reset Defaults</button>
          </div>
        </div>

        <div id="sb-sliders-area" class="sandbox-sliders-grid">
          <!-- Dynamic Sliders Rendered Here -->
        </div>

        <div class="sandbox-results-panel">
          <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:flex-end; gap:12px; margin-bottom:12px;">
            <div class="controls" style="margin:0;">
              <label for="sb-target-enemy">Test Target Enemy
                <select id="sb-target-enemy">${enemyOptions}</select>
              </label>
              <label for="sb-target-part">Body Part
                <select id="sb-target-part"></select>
              </label>
            </div>
            <div id="sb-target-meta" class="note"></div>
          </div>

          <div class="metric-badges">
            <div class="badge-card">
              <div class="title">Stock (In-Game) Hits</div>
              <div class="num-val" id="sb-stock-hits">—</div>
              <div class="diff-val diff-same" id="sb-stock-time">Stock TTK: —</div>
            </div>
            <div class="badge-card" style="border-left: 4px solid var(--accent);">
              <div class="title">Modded Hits to Kill</div>
              <div class="num-val" id="sb-mod-hits">—</div>
              <div class="diff-val" id="sb-mod-diff">—</div>
            </div>
            <div class="badge-card">
              <div class="title">Modded Time to Kill</div>
              <div class="num-val" id="sb-mod-time">—</div>
              <div class="diff-val" id="sb-time-diff">—</div>
            </div>
            <div class="badge-card">
              <div class="title">Armor Penetration Result</div>
              <div class="num-val" id="sb-mod-ap" style="font-size:16px; margin-top:4px;">—</div>
              <div class="diff-val" id="sb-ap-diff">—</div>
            </div>
          </div>

          <div style="margin-top:14px;">
            <div style="font:600 12px var(--display); letter-spacing:.08em; text-transform:uppercase; color:var(--muted); margin-bottom:4px;">Modded Calculation Breakdown:</div>
            <div class="formula" id="sb-mod-math" style="margin:0;">—</div>
          </div>
        </div>
      </div>
    `;

    renderSliders();
    populateParts();
  }

  function renderSliders() {
    const area = document.getElementById("sb-sliders-area");
    if (!area) return;

    const w = state.activeWeapon;
    const v = state.values[w];

    if (w === "AR-2 Coyote") {
      area.innerHTML = `
        <div class="slider-group">
          <div class="slider-label"><span>Standard (Raw) Damage</span><span class="val" id="v-raw">${v.raw}</span></div>
          <input type="range" id="s-raw" min="30" max="150" step="1" value="${v.raw}">
        </div>
        <div class="slider-group">
          <div class="slider-label"><span>Durable Damage</span><span class="val" id="v-durable">${v.durable}</span></div>
          <input type="range" id="s-durable" min="5" max="80" step="1" value="${v.durable}">
        </div>
        <div class="slider-group">
          <div class="slider-label"><span>Armor Penetration</span><span class="val" id="v-ap">AP${v.ap} (${KillMathEngine.AP_NAMES[v.ap]})</span></div>
          <input type="range" id="s-ap" min="1" max="6" step="1" value="${v.ap}">
        </div>
        <div class="slider-group">
          <div class="slider-label"><span>Fire Rate (RPM)</span><span class="val" id="v-rate">${v.rate} rpm</span></div>
          <input type="range" id="s-rate" min="300" max="900" step="25" value="${v.rate}">
        </div>
        <div class="slider-group">
          <div class="slider-label"><span>Fire DoT Duration</span><span class="val" id="v-burn">${v.burn} s</span></div>
          <input type="range" id="s-burn" min="0" max="8" step="1" value="${v.burn}">
        </div>
      `;
    } else if (w === "PLAS-1 Scorcher") {
      area.innerHTML = `
        <div class="slider-group">
          <div class="slider-label"><span>Plasma Bolt Raw Damage</span><span class="val" id="v-bolt_raw">${v.bolt_raw}</span></div>
          <input type="range" id="s-bolt_raw" min="50" max="250" step="5" value="${v.bolt_raw}">
        </div>
        <div class="slider-group">
          <div class="slider-label"><span>Plasma Bolt Durable Damage</span><span class="val" id="v-bolt_dur">${v.bolt_dur}</span></div>
          <input type="range" id="s-bolt_dur" min="10" max="150" step="5" value="${v.bolt_dur}">
        </div>
        <div class="slider-group">
          <div class="slider-label"><span>Plasma Bolt AP</span><span class="val" id="v-bolt_ap">AP${v.bolt_ap} (${KillMathEngine.AP_NAMES[v.bolt_ap]})</span></div>
          <input type="range" id="s-bolt_ap" min="1" max="5" step="1" value="${v.bolt_ap}">
        </div>
        <div class="slider-group">
          <div class="slider-label"><span>Blast AOE Raw Damage</span><span class="val" id="v-blast_raw">${v.blast_raw}</span></div>
          <input type="range" id="s-blast_raw" min="20" max="300" step="5" value="${v.blast_raw}">
        </div>
        <div class="slider-group">
          <div class="slider-label"><span>Blast AP</span><span class="val" id="v-blast_ap">AP${v.blast_ap} (${KillMathEngine.AP_NAMES[v.blast_ap]})</span></div>
          <input type="range" id="s-blast_ap" min="2" max="6" step="1" value="${v.blast_ap}">
        </div>
      `;
    } else if (w === "PLAS-101 Purifier / Pacifier") {
      area.innerHTML = `
        <div class="slider-group">
          <div class="slider-label"><span>Projectile Raw Damage</span><span class="val" id="v-bolt_raw">${v.bolt_raw}</span></div>
          <input type="range" id="s-bolt_raw" min="100" max="400" step="10" value="${v.bolt_raw}">
        </div>
        <div class="slider-group">
          <div class="slider-label"><span>Projectile Durable Damage</span><span class="val" id="v-bolt_dur">${v.bolt_dur}</span></div>
          <input type="range" id="s-bolt_dur" min="20" max="250" step="5" value="${v.bolt_dur}">
        </div>
        <div class="slider-group">
          <div class="slider-label"><span>Projectile AP</span><span class="val" id="v-bolt_ap">AP${v.bolt_ap} (${KillMathEngine.AP_NAMES[v.bolt_ap]})</span></div>
          <input type="range" id="s-bolt_ap" min="2" max="6" step="1" value="${v.bolt_ap}">
        </div>
        <div class="slider-group">
          <div class="slider-label"><span>Blast AOE Damage</span><span class="val" id="v-blast_raw">${v.blast_raw}</span></div>
          <input type="range" id="s-blast_raw" min="100" max="500" step="10" value="${v.blast_raw}">
        </div>
        <div class="slider-group">
          <div class="slider-label"><span>Blast AP</span><span class="val" id="v-blast_ap">AP${v.blast_ap} (${KillMathEngine.AP_NAMES[v.blast_ap]})</span></div>
          <input type="range" id="s-blast_ap" min="2" max="6" step="1" value="${v.blast_ap}">
        </div>
        <div class="slider-group">
          <div class="slider-label"><span>Charge Hold Time</span><span class="val" id="v-charge_s">${v.charge_s.toFixed(1)} s</span></div>
          <input type="range" id="s-charge_s" min="0.2" max="2.0" step="0.1" value="${v.charge_s}">
        </div>
      `;
    }

    // Attach range event listeners
    area.querySelectorAll("input[type=range]").forEach(input => {
      input.addEventListener("input", e => {
        const key = e.target.id.replace("s-", "");
        let val = Number(e.target.value);
        state.values[state.activeWeapon][key] = val;

        const valElem = document.getElementById("v-" + key);
        if (valElem) {
          if (key === "ap" || key === "bolt_ap" || key === "blast_ap") {
            valElem.textContent = `AP${val} (${KillMathEngine.AP_NAMES[val]})`;
          } else if (key === "rate") {
            valElem.textContent = `${val} rpm`;
          } else if (key === "burn" || key === "charge_s") {
            valElem.textContent = `${val.toFixed(1)} s`;
          } else {
            valElem.textContent = val;
          }
        }
        recalculate();
      });
    });
  }

  function populateParts() {
    const enemyData = ENEMIES_DATA[state.targetEnemy];
    if (!enemyData) return;

    const partSelect = document.getElementById("sb-target-part");
    if (!partSelect) return;

    partSelect.innerHTML = enemyData.parts
      .map((p, idx) => `<option value="${idx}">${p[0]} (AV${p[2]}${p[6] ? ", Fatal" : ""})</option>`)
      .join("");

    partSelect.value = state.targetPartIdx < enemyData.parts.length ? state.targetPartIdx : 0;
    state.targetPartIdx = Number(partSelect.value);
  }

  function attachListeners() {
    const weaponSelect = document.getElementById("sb-weapon-select");
    const enemySelect = document.getElementById("sb-target-enemy");
    const partSelect = document.getElementById("sb-target-part");
    const resetBtn = document.getElementById("sb-reset-btn");

    if (weaponSelect) {
      weaponSelect.addEventListener("change", e => {
        state.activeWeapon = e.target.value;
        renderSliders();
        recalculate();
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        state.values[state.activeWeapon] = JSON.parse(JSON.stringify(BASELINES[state.activeWeapon]));
        renderSliders();
        recalculate();
      });
    }

    if (enemySelect) {
      enemySelect.addEventListener("change", e => {
        state.targetEnemy = e.target.value;
        state.targetPartIdx = 0;
        populateParts();
        recalculate();
      });
    }

    if (partSelect) {
      partSelect.addEventListener("change", e => {
        state.targetPartIdx = Number(e.target.value);
        recalculate();
      });
    }
  }

  function buildModdedWeaponConfig() {
    const w = state.activeWeapon;
    const v = state.values[w];

    if (w === "AR-2 Coyote") {
      return {
        kind: "hit",
        slot: "Primary",
        comps: [["custom bullet", v.raw, v.durable, v.ap, false]],
        rate: v.rate,
        burn: v.burn,
        note: "Custom tuned in Sandbox"
      };
    } else if (w === "PLAS-1 Scorcher") {
      return {
        kind: "hit",
        slot: "Primary",
        comps: [
          ["custom plasma bolt", v.bolt_raw, v.bolt_dur, v.bolt_ap, false],
          ["custom blast", v.blast_raw, v.blast_raw, v.blast_ap, true]
        ],
        rate: v.rate,
        note: "Custom tuned in Sandbox"
      };
    } else if (w === "PLAS-101 Purifier / Pacifier") {
      return {
        kind: "hit",
        slot: "Primary",
        comps: [
          ["custom charged bolt", v.bolt_raw, v.bolt_dur, v.bolt_ap, false],
          ["custom blast", v.blast_raw, v.blast_raw, v.blast_ap, true]
        ],
        rate: Math.round(60 / v.charge_s),
        note: `Custom charge: ${v.charge_s}s`
      };
    }
  }

  function recalculate() {
    const enemyData = ENEMIES_DATA[state.targetEnemy];
    if (!enemyData) return;
    const partData = enemyData.parts[state.targetPartIdx];
    if (!partData) return;

    // Display target part metadata
    const metaElem = document.getElementById("sb-target-meta");
    if (metaElem) {
      metaElem.innerHTML = `Part HP: <b>${partData[1] === null ? "Main" : partData[1].toLocaleString()}</b> · AV: <b>${partData[2]}</b> (${KillMathEngine.AP_NAMES[partData[2]] || ""}) · Durability: <b>${Math.round(partData[3] * 100)}%</b> · ExDR: <b>${Math.round(partData[5] * 100)}%</b>`;
    }

    // Baseline calculation
    let stockWeaponKey = state.activeWeapon;
    if (state.activeWeapon === "PLAS-101 Purifier / Pacifier") {
      stockWeaponKey = "PLAS-101 Purifier (full charge)";
    }
    const stockConfig = WEAPONS_DATA[stockWeaponKey];
    const stockRow = KillMathEngine.computePart(state.targetEnemy, stockWeaponKey, partData, enemyData, stockConfig);

    // Modded calculation
    const modConfig = buildModdedWeaponConfig();
    const modRow = KillMathEngine.computePart(state.targetEnemy, "Modded " + state.activeWeapon, partData, enemyData, modConfig);

    // Update DOM
    const stockHitsElem = document.getElementById("sb-stock-hits");
    const stockTimeElem = document.getElementById("sb-stock-time");
    const modHitsElem = document.getElementById("sb-mod-hits");
    const modDiffElem = document.getElementById("sb-mod-diff");
    const modTimeElem = document.getElementById("sb-mod-time");
    const timeDiffElem = document.getElementById("sb-time-diff");
    const modApElem = document.getElementById("sb-mod-ap");
    const apDiffElem = document.getElementById("sb-ap-diff");
    const modMathElem = document.getElementById("sb-mod-math");

    if (stockHitsElem) {
      stockHitsElem.textContent = stockRow.kill === "—" ? "Immune / Strip Only" : `${stockRow.kill} hits`;
    }
    if (stockTimeElem) {
      stockTimeElem.textContent = stockRow.time !== "" ? `Stock TTK: ${stockRow.time} s` : "Stock TTK: N/A";
    }

    if (modHitsElem) {
      modHitsElem.textContent = modRow.kill === "—" ? "Immune / Strip Only" : `${modRow.kill} hits`;
    }

    // Comparison diff
    if (modDiffElem) {
      if (typeof stockRow.kill === "number" && typeof modRow.kill === "number") {
        const delta = modRow.kill - stockRow.kill;
        if (delta < 0) {
          const pct = Math.round(Math.abs(delta) / stockRow.kill * 100);
          modDiffElem.innerHTML = `<span class="diff-better">▲ ${Math.abs(delta)} fewer hits (${pct}% faster)</span>`;
        } else if (delta > 0) {
          const pct = Math.round(delta / stockRow.kill * 100);
          modDiffElem.innerHTML = `<span class="diff-worse">▼ ${delta} more hits (${pct}% slower)</span>`;
        } else {
          modDiffElem.innerHTML = `<span class="diff-same">= Same hit count</span>`;
        }
      } else if (stockRow.kill === "—" && typeof modRow.kill === "number") {
        modDiffElem.innerHTML = `<span class="diff-better">★ Now capable of killing!</span>`;
      } else if (typeof stockRow.kill === "number" && modRow.kill === "—") {
        modDiffElem.innerHTML = `<span class="diff-worse">✕ Lost ability to kill</span>`;
      } else {
        modDiffElem.innerHTML = `<span class="diff-same">Immune to both</span>`;
      }
    }

    if (modTimeElem) {
      modTimeElem.textContent = modRow.time !== "" ? `${modRow.time} s` : "N/A";
    }

    if (timeDiffElem) {
      if (typeof stockRow.time === "number" && typeof modRow.time === "number") {
        const tDelta = +(modRow.time - stockRow.time).toFixed(2);
        if (tDelta < 0) {
          timeDiffElem.innerHTML = `<span class="diff-better">▲ ${Math.abs(tDelta)}s faster TTK</span>`;
        } else if (tDelta > 0) {
          timeDiffElem.innerHTML = `<span class="diff-worse">▼ +${tDelta}s slower TTK</span>`;
        } else {
          timeDiffElem.innerHTML = `<span class="diff-same">= Identical TTK</span>`;
        }
      } else {
        timeDiffElem.textContent = "—";
      }
    }

    if (modApElem) {
      const chipClass = modRow.apc === "full" ? "c-full" : (modRow.apc === "white" ? "c-white" : "c-bounce");
      const label = modRow.apc === "full" ? "100% Full Penetration" : (modRow.apc === "white" ? "65% Matching Armor" : "0% Deflect / Bounce");
      modApElem.innerHTML = `<span class="chip ${chipClass}">${label}</span>`;
    }

    if (apDiffElem) {
      if (stockRow.apc !== modRow.apc) {
        apDiffElem.innerHTML = `<span class="diff-better">Changed from ${stockRow.apc} to ${modRow.apc}</span>`;
      } else {
        apDiffElem.innerHTML = `<span class="diff-same">Same armor interaction</span>`;
      }
    }

    if (modMathElem) {
      modMathElem.textContent = modRow.math;
    }
  }

  return {
    init,
    recalculate
  };
})();
