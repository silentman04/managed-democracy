// Helldivers 2 Weapons & Stratagems Catalog
// Source: helldivers.wiki.gg (Patch 1.007.1xx)

const WEAPONS_DATA = {
  // ==========================================
  // PRIMARIES
  // ==========================================
  "AR-2 Coyote": {
    kind: "hit",
    slot: "Primary",
    comps: [["bullet", 75, 10, 3, false]],
    rate: 600,
    note: "+Fire DoT (100/s, AP4) once ignited; not boosted by ship modules"
  },
  "AR-2 Coyote (+3 s burn)": {
    kind: "hit",
    slot: "Primary",
    comps: [["bullet", 75, 10, 3, false]],
    rate: 600,
    burn: 3,
    note: "Assumes target is ignited and burns for 3 s: 100/s × size × AP4-vs-Main factor, applied to Main only"
  },
  "AR-23 Liberator": {
    kind: "hit",
    slot: "Primary",
    comps: [["bullet", 60, 14, 2, false]],
    rate: 640,
    note: "Standard issue assault rifle. 45-round magazine."
  },
  "AR-23P Liberator Penetrator": {
    kind: "hit",
    slot: "Primary",
    comps: [["bullet", 60, 20, 3, false]],
    rate: 640,
    note: "Medium armor penetrating. 30-round magazine."
  },
  "BR-14 Adjudicator": {
    kind: "hit",
    slot: "Primary",
    comps: [["bullet", 95, 23, 3, false]],
    rate: 550,
    note: "Battle rifle with high recoil. 30-round magazine."
  },
  "R-63 Diligence": {
    kind: "hit",
    slot: "Primary",
    comps: [["bullet", 140, 25, 2, false]],
    rate: 350,
    note: "Marksman rifle. 20-round magazine."
  },
  "R-63CS Diligence Counter-Sniper": {
    kind: "hit",
    slot: "Primary",
    comps: [["bullet", 165, 30, 3, false]],
    rate: 350,
    note: "Medium armor penetrating marksman rifle. 15-round magazine."
  },
  "SG-8 Punisher": {
    kind: "hit",
    slot: "Primary",
    comps: [["buckshot (16 pellets)", 405, 65, 2, false]],
    rate: 80,
    note: "Pump shotgun with heavy stagger. Round-by-round reload."
  },
  "SG-8S Slugger": {
    kind: "hit",
    slot: "Primary",
    comps: [["slug", 250, 75, 3, false]],
    rate: 80,
    note: "Heavy solid slug with medium armor penetration. Destroys fences and opens containers."
  },
  "SG-225 Breaker": {
    kind: "hit",
    slot: "Primary",
    comps: [["buckshot (16 pellets)", 330, 50, 2, false]],
    rate: 300,
    note: "Full-auto combat shotgun. 13-round magazine."
  },
  "SG-225IE Breaker Incendiary": {
    kind: "hit",
    slot: "Primary",
    comps: [["buckshot (16 pellets)", 240, 48, 2, false]],
    rate: 300,
    burn: 3,
    note: "Pellets ignite targets with 100/s fire DoT for 3s (AP4)."
  },
  "PLAS-1 Scorcher": {
    kind: "hit",
    slot: "Primary",
    comps: [
      ["plasma bolt", 100, 50, 2, false],
      ["blast", 100, 100, 3, true]
    ],
    rate: 350,
    note: "Plasma bolt with explosive detonation. 15-round mag."
  },
  "PLAS-101 Purifier (full charge)": {
    kind: "hit",
    slot: "Primary",
    comps: [
      ["plasma bolt", 200, 100, 3, false],
      ["blast", 300, 300, 3, true]
    ],
    rate: 60,
    note: "1 s charge per shot, so about 1 shot per second; blast 2.9 m inner radius"
  },
  "PLAS-101 Purifier (quick tap)": {
    kind: "hit",
    slot: "Primary",
    comps: [
      ["plasma bolt", 100, 50, 3, false],
      ["blast", 75, 75, 3, true]
    ],
    rate: 250,
    note: "Uncharged tap; fire rate limited by finger trigger; blast 1 m inner radius"
  },
  "JAR-5 Dominator": {
    kind: "hit",
    slot: "Primary",
    comps: [["jet-assisted rocket", 275, 90, 3, false]],
    rate: 250,
    note: "Heavy penetrator jet rounds. Explosive property on impact."
  },
  "CB-9 Exploding Crossbow": {
    kind: "hit",
    slot: "Primary",
    comps: [
      ["bolt", 270, 70, 3, false],
      ["blast", 150, 150, 3, true]
    ],
    rate: 50,
    note: "One-handed explosive projectile with moderate AOE."
  },
  "FLAM-66 Torcher": {
    kind: "flame",
    slot: "Primary",
    dps: 150,
    ec: false,
    fuel_s: 12.4,
    note: "Primary flamethrower. ~12.4 s continuous spray per canister."
  },

  // ==========================================
  // SECONDARIES
  // ==========================================
  "P-2 Peacemaker": {
    kind: "hit",
    slot: "Secondary",
    comps: [["bullet", 75, 15, 2, false]],
    rate: 900,
    note: "Standard semi-auto sidearm. 15-round magazine."
  },
  "P-19 Redeemer": {
    kind: "hit",
    slot: "Secondary",
    comps: [["bullet", 60, 12, 2, false]],
    rate: 1100,
    note: "Full-auto machine pistol. 31-round magazine."
  },
  "P-4 Senator": {
    kind: "hit",
    slot: "Secondary",
    comps: [["heavy bullet", 200, 50, 3, false]],
    rate: 200,
    note: "Heavy revolver with medium armor penetration. Speedloader reload on empty."
  },
  "GP-31 Grenade Pistol": {
    kind: "hit",
    slot: "Secondary",
    comps: [
      ["shell", 250, 250, 3, false],
      ["blast", 400, 400, 4, true]
    ],
    rate: 30,
    note: "Single-shot breach-loading explosive sidearm. Closes bug holes and bot fabricators."
  },
  "GP-20 Ultimatum": {
    kind: "hit",
    slot: "Secondary",
    comps: [
      ["shell", 1000, 1000, 6, false],
      ["blast", 2000, 2000, 6, true]
    ],
    rate: null,
    note: "Anti-tank secondary shell. Devastating close-range blast."
  },
  "P-72 Crisper": {
    kind: "flame",
    slot: "Secondary",
    dps: 150,
    ec: false,
    fuel_s: 6.1,
    note: "Compact flamethrower pistol. ~6.1 s continuous spray per canister."
  },

  // ==========================================
  // GRENADES
  // ==========================================
  "G-12 High Explosive": {
    kind: "hit",
    slot: "Grenade",
    comps: [["blast", 800, 800, 4, true]],
    rate: null,
    note: "Standard 3.5s fuse timed grenade. 7m blast radius."
  },
  "G-16 Impact": {
    kind: "hit",
    slot: "Grenade",
    comps: [["blast", 400, 400, 4, true]],
    rate: null,
    note: "Detonates instantly on impact. Zero fuse timer."
  },
  "G-123 Thermite": {
    kind: "hit",
    slot: "Grenade",
    comps: [
      ["spark stream (x6)", 150, 150, 7, false],
      ["terminal explosion", 2000, 2000, 7, true]
    ],
    rate: null,
    note: "Clings to surface, burns at AP7, then detonates with 2,000 AP7 explosion."
  },

  // ==========================================
  // SUPPORT WEAPONS
  // ==========================================
  "MG-43 Machine Gun": {
    kind: "hit",
    slot: "Support",
    comps: [["heavy bullet", 90, 25, 3, false]],
    rate: 760,
    note: "Medium AP support machine gun. Stationary reload."
  },
  "M-105 Stalwart": {
    kind: "hit",
    slot: "Support",
    comps: [["bullet", 60, 14, 2, false]],
    rate: 850,
    note: "Light AP mobile machine gun. Mobile reload on the run."
  },
  "APW-1 Anti-Materiel Rifle": {
    kind: "hit",
    slot: "Support",
    comps: [["sniper round", 450, 180, 4, false]],
    rate: 350,
    note: "Heavy AP4 sniper rifle. 7-round magazine."
  },
  "AC-8 Autocannon": {
    kind: "hit",
    slot: "Support",
    comps: [
      ["shell", 260, 260, 4, false],
      ["blast", 150, 150, 3, true]
    ],
    rate: 175,
    note: "Rapid-fire AP4 autocannon with explosive inner blast."
  },
  "RS-422 Railgun (Safe mode)": {
    kind: "hit",
    slot: "Support",
    comps: [["slug", 600, 300, 5, false]],
    rate: 30,
    note: "Safe mode charge (stops at 50% capacity). AP5 Tank I."
  },
  "RS-422 Railgun (Unsafe mode ~90%)": {
    kind: "hit",
    slot: "Support",
    comps: [["slug", 900, 450, 7, false]],
    rate: 25,
    note: "Unsafe overcharge to ~90%. Penetrates AP7 Anti-Tank III."
  },
  "GL-21 Grenade Launcher": {
    kind: "hit",
    slot: "Support",
    comps: [
      ["direct impact", 250, 250, 3, false],
      ["blast", 400, 400, 3, true]
    ],
    rate: 250,
    note: "Bouncing 40mm grenades. Rapid fire crowd control."
  },
  "LAS-99 Quasar Cannon": {
    kind: "hit",
    slot: "Support",
    comps: [
      ["energy bolt", 2000, 2000, 6, false],
      ["blast", 150, 150, 3, true]
    ],
    rate: null,
    note: "3 s charge + 15 s recharge, unlimited ammo"
  },
  "EAT-17 Expendable AT": {
    kind: "hit",
    slot: "Support",
    comps: [
      ["rocket", 2000, 2000, 6, false],
      ["blast", 150, 150, 3, true]
    ],
    rate: null,
    note: "2 launchers per call-in, 70s cooldown"
  },
  "MLS-4X Commando": {
    kind: "hit",
    slot: "Support",
    comps: [
      ["missile", 1100, 1100, 6, false],
      ["blast", 150, 150, 3, true]
    ],
    rate: null,
    note: "4 laser-guided missiles per disposable tube"
  },
  "GR-8 Recoilless (HEAT)": {
    kind: "hit",
    slot: "Support",
    comps: [
      ["shell", 3200, 3200, 6, false],
      ["blast", 150, 150, 3, true]
    ],
    rate: null,
    note: "High Explosive Anti-Tank shell. 1 loaded + 5 backpack shells."
  },
  "GR-8 Recoilless (HE)": {
    kind: "hit",
    slot: "Support",
    comps: [
      ["shell", 750, 750, 5, false],
      ["blast", 800, 800, 4, true]
    ],
    rate: null,
    note: "Anti-infantry high explosive round with wider blast radius."
  },
  "FAF-14 Spear": {
    kind: "hit",
    slot: "Support",
    comps: [
      ["missile", 4000, 4000, 7, false],
      ["blast", 200, 200, 3, true]
    ],
    rate: null,
    note: "Lock-on only heavy missile. AP7 Anti-Tank III. 1 + 3 spare."
  },
  "EAT-700 Expendable Napalm": {
    kind: "hit",
    slot: "Support",
    comps: [
      ["rocket", 500, 500, 3, false],
      ["blast", 250, 250, 6, true]
    ],
    rate: null,
    note: "+25 bomblets (200 dmg AP0 each) and napalm Burning Heavy 200/s (×1.25 with Enhanced Combustion)"
  },
  "EAT-411 Leveller": {
    kind: "hit",
    slot: "Support",
    comps: [
      ["warhead", 1000, 1000, 6, false],
      ["blast (10 m inner radius)", 2500, 2500, 6, true]
    ],
    rate: null,
    note: "1 per call-in; blast also hits every other part in 10 m, so real damage is higher"
  },
  "FLAM-40 Flamethrower": {
    kind: "flame",
    slot: "Support",
    dps: 150,
    ec: true,
    fuel_s: 18.6,
    note: "Stratagem: +25% from Enhanced Combustion. ~18.6 s continuous spray per canister."
  },
  "B/FLAM-80 Cremator": {
    kind: "flame",
    slot: "Support (backpack)",
    dps: 225,
    ec: true,
    fuel_s: 62.35,
    note: "Heavy backpack-fed industrial flamethrower. 225 DPS at AP4."
  },
  "AX/FLAM-75 Hot Dog": {
    kind: "flame",
    slot: "Backpack drone",
    dps: 150,
    ec: true,
    fuel_s: 9.9,
    note: "Guard Dog drone equipped with miniature flamethrower."
  },

  // ==========================================
  // STRATAGEMS (OFFENSIVE STRIKES)
  // ==========================================
  "Orbital Precision Strike": {
    kind: "hit",
    slot: "Stratagem",
    comps: [
      ["shell kinetic", 2500, 2500, 8, false],
      ["orbital blast", 1000, 1000, 7, true]
    ],
    rate: null,
    note: "Direct 380mm orbital shell with pinpoint guidance beacon. AP8/AP7."
  },
  "Orbital Railcannon Strike": {
    kind: "hit",
    slot: "Stratagem",
    comps: [
      ["kinetic slug", 3000, 3000, 8, false],
      ["shockwave", 500, 500, 5, true]
    ],
    rate: null,
    note: "Automated high-velocity slug targeting the largest enemy in range. AP8."
  },
  "Eagle 500kg Bomb": {
    kind: "hit",
    slot: "Stratagem",
    comps: [
      ["bomb kinetic", 1400, 1400, 7, false],
      ["massive detonation", 2200, 2200, 7, true]
    ],
    rate: null,
    note: "Large high-yield demolition bomb. Cone-shaped upward blast pattern."
  },
  "Eagle Airstrike": {
    kind: "hit",
    slot: "Stratagem",
    comps: [
      ["cluster bomb kinetic", 500, 500, 5, false],
      ["blast", 500, 500, 5, true]
    ],
    rate: null,
    note: "Payload of 6 AP5 bombs dropped perpendicular to the thrower's axis."
  },
  "Eagle 110mm Rocket Pods": {
    kind: "hit",
    slot: "Stratagem",
    comps: [
      ["rocket (per missile ×3)", 600, 600, 6, false],
      ["blast (per missile ×3)", 250, 250, 5, true]
    ],
    rate: null,
    note: "Fires a salvo of 3 targeted anti-tank rockets at the largest enemy."
  }
};
