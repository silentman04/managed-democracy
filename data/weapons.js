// Helldivers 2 Complete Weapons & Stratagems Catalog
// Source: helldivers.wiki.gg (Patch 1.007.1xx)

const WEAPONS_DATA = {
  // ==========================================
  // PRIMARY WEAPONS
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
  "AR-23A Liberator Carbine": {
    kind: "hit",
    slot: "Primary",
    comps: [["bullet", 60, 14, 2, false]],
    rate: 850,
    note: "Compact carbine with high fire rate and heavy recoil. 45-round magazine."
  },
  "AR-23C Liberator Concussive": {
    kind: "hit",
    slot: "Primary",
    comps: [["concussive bullet", 65, 23, 2, false]],
    rate: 320,
    note: "Heavy concussive rounds that stagger and knock back enemies. 30-round mag."
  },
  "AR-23P Liberator Penetrator": {
    kind: "hit",
    slot: "Primary",
    comps: [["penetrator bullet", 60, 20, 3, false]],
    rate: 640,
    note: "Medium armor penetrating assault rifle. 30-round magazine."
  },
  "AR-61 Tenderizer": {
    kind: "hit",
    slot: "Primary",
    comps: [["bullet", 95, 17, 2, false]],
    rate: 600,
    note: "High-caliber light AP assault rifle with very low recoil. 35-round magazine."
  },
  "BR-14 Adjudicator": {
    kind: "hit",
    slot: "Primary",
    comps: [["battle rifle round", 95, 23, 3, false]],
    rate: 550,
    note: "Heavy battle rifle with high damage and medium penetration. 30-round magazine."
  },
  "R-63 Diligence": {
    kind: "hit",
    slot: "Primary",
    comps: [["marksman bullet", 140, 25, 2, false]],
    rate: 350,
    note: "Semi-auto marksman rifle. 20-round magazine."
  },
  "R-63CS Diligence Counter-Sniper": {
    kind: "hit",
    slot: "Primary",
    comps: [["heavy sniper round", 165, 30, 3, false]],
    rate: 350,
    note: "Medium armor penetrating precision rifle. 15-round magazine."
  },
  "R-2124 Constitution": {
    kind: "hit",
    slot: "Primary",
    comps: [["service rifle cartridge", 180, 45, 3, false]],
    rate: 60,
    note: "Traditional bolt-action service rifle with attached melee bayonet."
  },
  "R-36 Eruptor": {
    kind: "hit",
    slot: "Primary",
    comps: [
      ["kinetic bolt", 230, 115, 3, false],
      ["shrapnel explosion", 340, 340, 3, true]
    ],
    rate: 25,
    note: "Bolt-action explosive rifle firing AP3 shells with high AOE shrapnel. 5-round magazine."
  },
  "SMG-37 Defender": {
    kind: "hit",
    slot: "Primary",
    comps: [["bullet", 75, 15, 2, false]],
    rate: 520,
    note: "One-handed submachine gun with high stopping power. 45-round magazine."
  },
  "SMG-72 Pummeler": {
    kind: "hit",
    slot: "Primary",
    comps: [["concussive round", 65, 15, 2, false]],
    rate: 475,
    note: "One-handed submachine gun firing concussive rounds that stun targets. 45-round mag."
  },
  "MP-98 Knight": {
    kind: "hit",
    slot: "Primary",
    comps: [["bullet", 50, 10, 2, false]],
    rate: 1380,
    note: "Super Citizen submachine gun with an extreme 1,380 RPM fire rate. 50-round magazine."
  },
  "SG-8 Punisher": {
    kind: "hit",
    slot: "Primary",
    comps: [["buckshot (16 pellets)", 405, 65, 2, false]],
    rate: 80,
    note: "Pump shotgun with heavy stagger. Round-by-round tube reload. 16 pellets per shell."
  },
  "SG-8S Slugger": {
    kind: "hit",
    slot: "Primary",
    comps: [["slug", 250, 75, 3, false]],
    rate: 80,
    note: "Heavy solid slug with medium armor penetration. Destroys wooden fences and containers."
  },
  "SG-8P Punisher Plasma": {
    kind: "hit",
    slot: "Primary",
    comps: [
      ["plasma lob", 100, 50, 2, false],
      ["plasma blast", 150, 150, 3, true]
    ],
    rate: 80,
    note: "Pump-action plasma launcher firing arcing explosive plasma balls."
  },
  "SG-451 Cookout": {
    kind: "hit",
    slot: "Primary",
    comps: [["incendiary pellets (16)", 320, 48, 2, false]],
    rate: 80,
    burn: 3,
    note: "Pump shotgun firing incendiary phosphorus pellets that ignite targets and deal heavy stagger."
  },
  "SG-225 Breaker": {
    kind: "hit",
    slot: "Primary",
    comps: [["buckshot (16 pellets)", 330, 50, 2, false]],
    rate: 300,
    note: "Full-auto combat shotgun. 13-round magazine."
  },
  "SG-225SP Breaker Spray & Pray": {
    kind: "hit",
    slot: "Primary",
    comps: [["birdshot (16 pellets)", 240, 36, 2, false]],
    rate: 320,
    note: "High-capacity drum shotgun with wide pellet spread for small targets. 26-round mag."
  },
  "SG-225IE Breaker Incendiary": {
    kind: "hit",
    slot: "Primary",
    comps: [["buckshot (16 pellets)", 240, 48, 2, false]],
    rate: 300,
    burn: 3,
    note: "Pellets ignite targets with 100/s fire DoT for 3s (AP4). 25-round magazine."
  },
  "CB-9 Exploding Crossbow": {
    kind: "hit",
    slot: "Primary",
    comps: [
      ["bolt", 270, 70, 3, false],
      ["blast", 150, 150, 3, true]
    ],
    rate: 50,
    note: "One-handed explosive crossbow. Closes bug holes and bot fabricators."
  },
  "JAR-5 Dominator": {
    kind: "hit",
    slot: "Primary",
    comps: [["jet-assisted rocket", 275, 90, 3, false]],
    rate: 250,
    note: "Heavy penetrator jet rounds with explosive impact. 15-round magazine."
  },
  "PLAS-1 Scorcher": {
    kind: "hit",
    slot: "Primary",
    comps: [
      ["plasma bolt", 100, 50, 2, false],
      ["blast", 100, 100, 3, true]
    ],
    rate: 350,
    note: "Plasma bolt with explosive detonation. 15-round magazine."
  },
  "PLAS-101 Purifier (full charge)": {
    kind: "hit",
    slot: "Primary",
    comps: [
      ["plasma bolt", 200, 100, 3, false],
      ["blast", 300, 300, 3, true]
    ],
    rate: 60,
    note: "1 s charge per shot; blast 2.9 m inner radius. 15-round magazine."
  },
  "PLAS-101 Purifier (quick tap)": {
    kind: "hit",
    slot: "Primary",
    comps: [
      ["plasma bolt", 100, 50, 3, false],
      ["blast", 75, 75, 3, true]
    ],
    rate: 250,
    note: "Uncharged tap; limited by trigger speed; blast 1 m inner radius."
  },
  "PLAS-39 Accelerator Rifle": {
    kind: "hit",
    slot: "Primary",
    comps: [["plasma slug", 180, 90, 3, false]],
    rate: 200,
    note: "Semi-automatic high-velocity plasma marksman rifle. 20-round magazine."
  },
  "LAS-16 Sickle": {
    kind: "hit",
    slot: "Primary",
    comps: [["laser pulse", 55, 11, 2, false]],
    rate: 750,
    note: "Spooling energy assault rifle firing rapid-fire pulses. Heat sink magazine."
  },
  "LAS-5 Scythe": {
    kind: "beam",
    slot: "Primary",
    dps: 350,
    dur_dps: 150,
    ap: 2,
    burn: 3,
    note: "Continuous thermal laser beam. 350 DPS at AP2; ignites target after sustained contact."
  },
  "ARC-12 Blitzer": {
    kind: "hit",
    slot: "Primary",
    comps: [["arc lightning", 250, 50, 3, false]],
    rate: 30,
    note: "High-voltage arc shotgun firing wide electrical arcs. Unlimited ammo (pump cooldown)."
  },
  "FLAM-66 Torcher": {
    kind: "flame",
    slot: "Primary",
    dps: 150,
    ec: false,
    fuel_s: 12.4,
    note: "Primary flamethrower. ~12.4 s continuous spray per canister. AP4 direct fire."
  },

  // ==========================================
  // SECONDARY WEAPONS
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
  "P-113 Verdict": {
    kind: "hit",
    slot: "Secondary",
    comps: [["14mm heavy bullet", 125, 32, 2, false]],
    rate: 450,
    note: "Heavy 14mm semi-automatic pistol with high stopping power. 10-round magazine."
  },
  "PLAS-15 Loyalist": {
    kind: "hit",
    slot: "Secondary",
    comps: [
      ["plasma bolt", 100, 50, 2, false],
      ["blast", 75, 75, 3, true]
    ],
    rate: 300,
    note: "Semi-automatic plasma sidearm with moderate explosive blast. 15-round magazine."
  },
  "LAS-7 Dagger": {
    kind: "beam",
    slot: "Secondary",
    dps: 250,
    dur_dps: 100,
    ap: 2,
    burn: 3,
    note: "Continuous laser beam sidearm. 250 DPS at AP2; sets targets on fire after sustained focus."
  },
  "SG-22 Bushwhacker": {
    kind: "hit",
    slot: "Secondary",
    comps: [["buckshot (triple shell)", 405, 65, 2, false]],
    rate: 100,
    note: "Triple-barrel sawed-off shotgun. Can fire single barrel or all three simultaneously."
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
    note: "Anti-tank secondary shell. Devastating close-range blast at AP6."
  },
  "P-72 Crisper": {
    kind: "flame",
    slot: "Secondary",
    dps: 150,
    ec: false,
    fuel_s: 6.1,
    note: "Compact flamethrower pistol. ~6.1 s continuous spray per canister. AP4 direct fire."
  },

  // ==========================================
  // GRENADES
  // ==========================================
  "G-6 Frag": {
    kind: "hit",
    slot: "Grenade",
    comps: [["fragmentation blast", 250, 250, 3, true]],
    rate: null,
    note: "Fragmentation grenade with low fuse timer (2.4s) and an expanded lethal blast radius."
  },
  "G-12 High Explosive": {
    kind: "hit",
    slot: "Grenade",
    comps: [["blast", 800, 800, 4, true]],
    rate: null,
    note: "Standard 3.5s fuse timed grenade. 7m blast radius at AP4."
  },
  "G-16 Impact": {
    kind: "hit",
    slot: "Grenade",
    comps: [["blast", 400, 400, 4, true]],
    rate: null,
    note: "Detonates instantly on impact. Zero fuse timer. AP4."
  },
  "G-10 Incendiary": {
    kind: "hit",
    slot: "Grenade",
    comps: [["incendiary blast", 150, 150, 3, true]],
    rate: null,
    burn: 3,
    note: "Timed fuse incendiary grenade coating the detonation zone in persistent AP4 fire."
  },
  "G-13 Incendiary Impact": {
    kind: "hit",
    slot: "Grenade",
    comps: [["incendiary blast", 150, 150, 3, true]],
    rate: null,
    burn: 3,
    note: "Impact incendiary grenade detonating on contact with instant 100/s fire DoT."
  },
  "G-123 Thermite": {
    kind: "hit",
    slot: "Grenade",
    comps: [
      ["spark stream (x6)", 150, 150, 7, false],
      ["terminal explosion", 2000, 2000, 7, true]
    ],
    rate: null,
    note: "Clings to surface, burns at AP7, then detonates with 2,000 damage at AP7."
  },
  "K-2 Throwing Knife": {
    kind: "hit",
    slot: "Grenade",
    comps: [["throwing knife", 250, 250, 7, false]],
    rate: null,
    note: "Silent armor-piercing kinetic throwing knife with heavy penetration (AP7 Anti-Tank III)."
  },

  // ==========================================
  // SUPPORT WEAPONS
  // ==========================================
  "MG-43 Machine Gun": {
    kind: "hit",
    slot: "Support",
    comps: [["heavy bullet", 90, 25, 3, false]],
    rate: 760,
    note: "Medium AP support machine gun. Stationary reload. 150-round drum."
  },
  "M-105 Stalwart": {
    kind: "hit",
    slot: "Support",
    comps: [["bullet", 60, 14, 2, false]],
    rate: 850,
    note: "Light AP mobile machine gun. Mobile reload on the run. 250-round drum."
  },
  "MG-206 Heavy Machine Gun": {
    kind: "hit",
    slot: "Support",
    comps: [["anti-materiel round", 150, 50, 4, false]],
    rate: 600,
    note: "Heavy AP4 support machine gun. High recoil, shreds Hulks and Gunship engines."
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
    note: "Rapid-fire AP4 autocannon with explosive inner blast. 10-round internal magazine."
  },
  "LAS-98 Laser Cannon": {
    kind: "beam",
    slot: "Support",
    dps: 450,
    dur_dps: 150,
    ap: 4,
    burn: 3,
    note: "Continuous AP4 heavy laser beam. 450 DPS. Infinite ammo if managed without overheating."
  },
  "ARC-3 Arc Thrower": {
    kind: "hit",
    slot: "Support",
    comps: [["chaining lightning", 250, 250, 7, false]],
    rate: 60,
    note: "Fires electrical arc lightning penetrating AP7 armor and jumping to adjacent targets."
  },
  "RS-422 Railgun (Safe mode)": {
    kind: "hit",
    slot: "Support",
    comps: [["slug", 600, 300, 5, false]],
    rate: 30,
    note: "Safe mode charge (caps at 50% capacity). AP5 Tank I."
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
    note: "Bouncing 40mm grenades. Rapid fire crowd control. 10-round drum."
  },
  "LAS-99 Quasar Cannon": {
    kind: "hit",
    slot: "Support",
    comps: [
      ["energy bolt", 2000, 2000, 6, false],
      ["blast", 150, 150, 3, true]
    ],
    rate: null,
    note: "3 s charge + 15 s recharge, unlimited ammo. AP6 Anti-Tank II."
  },
  "EAT-17 Expendable AT": {
    kind: "hit",
    slot: "Support",
    comps: [
      ["rocket", 2000, 2000, 6, false],
      ["blast", 150, 150, 3, true]
    ],
    rate: null,
    note: "2 single-use launchers per call-in, 70s cooldown. AP6 Anti-Tank II."
  },
  "MLS-4X Commando": {
    kind: "hit",
    slot: "Support",
    comps: [
      ["missile", 1100, 1100, 6, false],
      ["blast", 150, 150, 3, true]
    ],
    rate: null,
    note: "4 laser-guided disposable missiles. AP6 Anti-Tank II."
  },
  "GR-8 Recoilless (HEAT)": {
    kind: "hit",
    slot: "Support",
    comps: [
      ["shell", 3200, 3200, 6, false],
      ["blast", 150, 150, 3, true]
    ],
    rate: null,
    note: "High Explosive Anti-Tank shell. 1 loaded + 5 backpack shells. AP6 Anti-Tank II."
  },
  "GR-8 Recoilless (HE)": {
    kind: "hit",
    slot: "Support",
    comps: [
      ["shell", 750, 750, 5, false],
      ["blast", 800, 800, 4, true]
    ],
    rate: null,
    note: "Anti-infantry high explosive round with wider blast radius. AP5 / AP4."
  },
  "FAF-14 Spear": {
    kind: "hit",
    slot: "Support",
    comps: [
      ["missile", 4000, 4000, 7, false],
      ["blast", 200, 200, 3, true]
    ],
    rate: null,
    note: "Lock-on only heavy missile. AP7 Anti-Tank III. 1 loaded + 3 spare."
  },
  "RL-77 Airburst Rocket Launcher": {
    kind: "hit",
    slot: "Support",
    comps: [
      ["rocket casing", 400, 400, 3, false],
      ["cluster burst", 800, 800, 3, true]
    ],
    rate: null,
    note: "Proximity-fused rocket that scatters dozens of secondary explosive bomblets over an area."
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
    note: "Stratagem: +25% from Enhanced Combustion. ~18.6 s continuous spray per canister. AP4 direct fire."
  },
  "B/FLAM-80 Cremator": {
    kind: "flame",
    slot: "Support",
    dps: 225,
    ec: true,
    fuel_s: 62.35,
    note: "Heavy backpack-fed industrial flamethrower. 225 DPS at AP4."
  },
  "AX/FLAM-75 Hot Dog": {
    kind: "flame",
    slot: "Support",
    dps: 150,
    ec: true,
    fuel_s: 9.9,
    note: "Guard Dog drone equipped with miniature flamethrower."
  },

  // ==========================================
  // EAGLE STRATAGEMS
  // ==========================================
  "Eagle 500kg Bomb": {
    kind: "hit",
    slot: "Eagle Stratagem",
    comps: [
      ["bomb kinetic impact", 1400, 1400, 7, false],
      ["massive blast", 2200, 2200, 7, true]
    ],
    rate: null,
    note: "Heavy high-yield demolition bomb. Cone-shaped upward blast pattern at AP7."
  },
  "Eagle Airstrike": {
    kind: "hit",
    slot: "Eagle Stratagem",
    comps: [
      ["cluster bomb kinetic", 500, 500, 5, false],
      ["blast", 500, 500, 5, true]
    ],
    rate: null,
    note: "Payload of 6 AP5 bombs dropped perpendicular to the thrower's axis."
  },
  "Eagle 110mm Rocket Pods": {
    kind: "hit",
    slot: "Eagle Stratagem",
    comps: [
      ["rocket (per missile x3)", 600, 600, 6, false],
      ["blast (per missile x3)", 250, 250, 5, true]
    ],
    rate: null,
    note: "Salvo of 3 targeted anti-tank rockets fired at the largest enemy in beacon radius."
  },
  "Eagle Cluster Bomb": {
    kind: "hit",
    slot: "Eagle Stratagem",
    comps: [
      ["cluster submunition (x5)", 200, 200, 3, true],
      ["secondary fragmentation", 150, 150, 3, true]
    ],
    rate: null,
    note: "High-density anti-personnel cluster strike covering a broad corridor."
  },
  "Eagle Napalm Strike": {
    kind: "hit",
    slot: "Eagle Stratagem",
    comps: [["napalm canister impact", 250, 250, 3, true]],
    rate: null,
    burn: 3,
    note: "Creates a 20-second wall of fire dealing persistent Burning Heavy (200/s AP4) to Main."
  },
  "Eagle Strafing Run": {
    kind: "hit",
    slot: "Eagle Stratagem",
    comps: [
      ["23mm rotary shell", 250, 100, 4, false],
      ["inner blast", 150, 150, 3, true]
    ],
    rate: 1800,
    note: "High-speed linear strafe of 30 AP4 armor-piercing 23mm explosive rounds."
  },

  // ==========================================
  // ORBITAL STRIKES
  // ==========================================
  "Orbital Precision Strike": {
    kind: "hit",
    slot: "Orbital Strike",
    comps: [
      ["shell kinetic impact", 2500, 2500, 8, false],
      ["orbital blast", 1000, 1000, 7, true]
    ],
    rate: null,
    note: "Direct 380mm orbital shell with pinpoint guidance beacon. AP8 kinetic / AP7 blast."
  },
  "Orbital Railcannon Strike": {
    kind: "hit",
    slot: "Orbital Strike",
    comps: [
      ["kinetic slug", 3000, 3000, 8, false],
      ["shockwave", 500, 500, 5, true]
    ],
    rate: null,
    note: "Automated high-velocity magnetic slug targeting the largest enemy in range. AP8."
  },
  "Orbital 380mm HE Barrage": {
    kind: "hit",
    slot: "Orbital Strike",
    comps: [
      ["380mm shell kinetic", 1500, 1500, 7, false],
      ["massive blast", 1000, 1000, 7, true]
    ],
    rate: null,
    note: "Heavy orbital artillery barrage of 380mm high explosive shells over a wide zone. AP7."
  },
  "Orbital 120mm HE Barrage": {
    kind: "hit",
    slot: "Orbital Strike",
    comps: [
      ["120mm shell kinetic", 800, 800, 6, false],
      ["blast", 600, 600, 5, true]
    ],
    rate: null,
    note: "Concentrated medium artillery bombardment with high structural demolition. AP6/AP5."
  },
  "Orbital Walking Barrage": {
    kind: "hit",
    slot: "Orbital Strike",
    comps: [
      ["380mm shell kinetic", 1500, 1500, 7, false],
      ["heavy blast", 1000, 1000, 7, true]
    ],
    rate: null,
    note: "Linear creeping barrage of 380mm shells advancing forward from the beacon. AP7."
  },
  "Orbital Laser": {
    kind: "beam",
    slot: "Orbital Strike",
    dps: 750,
    dur_dps: 750,
    ap: 5,
    burn: 3,
    note: "Tracking high-intensity thermal orbital death beam. 750 DPS at AP5; incinerates armor."
  },
  "Orbital Gatling Barrage": {
    kind: "hit",
    slot: "Orbital Strike",
    comps: [
      ["rotary shell", 120, 50, 4, false],
      ["blast", 100, 100, 3, true]
    ],
    rate: 1200,
    note: "Saturation bombardment of high-velocity explosive rounds fired continuously for 10 s."
  },
  "Orbital Airburst Strike": {
    kind: "hit",
    slot: "Orbital Strike",
    comps: [["airburst shrapnel salvo", 500, 500, 4, true]],
    rate: null,
    note: "Three successive timed high-explosive shrapnel bursts directly over the beacon. AP4."
  },
  "Orbital Gas Strike": {
    kind: "hit",
    slot: "Orbital Strike",
    comps: [
      ["projectile impact", 500, 500, 4, false],
      ["corrosive cloud (tick)", 50, 50, 4, true]
    ],
    rate: null,
    note: "Direct shell impact followed by a dense corrosive caustic gas cloud dealing 50/s at AP4."
  },

  // ==========================================
  // SENTRIES & EMPLACEMENTS
  // ==========================================
  "A/AC-8 Autocannon Sentry": {
    kind: "hit",
    slot: "Sentry & Emplacement",
    comps: [
      ["twin autocannon shell", 300, 300, 5, false],
      ["blast", 150, 150, 3, true]
    ],
    rate: 200,
    note: "Automated anti-armor autocannon turret. AP5 Tank I penetration with explosive blast."
  },
  "A/MLS-4X Rocket Sentry": {
    kind: "hit",
    slot: "Sentry & Emplacement",
    comps: [
      ["anti-tank missile", 1000, 1000, 6, false],
      ["blast", 200, 200, 3, true]
    ],
    rate: 60,
    note: "Long-range missile turret engaging heavy armor at AP6 Anti-Tank II."
  },
  "A/M-12 Mortar Sentry": {
    kind: "hit",
    slot: "Sentry & Emplacement",
    comps: [
      ["mortar kinetic", 400, 400, 4, false],
      ["mortar blast", 400, 400, 4, true]
    ],
    rate: 30,
    note: "High-angle indirect fire artillery turret firing over terrain and obstacles. AP4."
  },
  "A/G-16 Gatling Sentry": {
    kind: "hit",
    slot: "Sentry & Emplacement",
    comps: [["bullet", 90, 25, 3, false]],
    rate: 1200,
    note: "High-RPM rotary machine gun turret with medium armor penetration (AP3)."
  },
  "A/MG-43 Machine Gun Sentry": {
    kind: "hit",
    slot: "Sentry & Emplacement",
    comps: [["bullet", 90, 25, 3, false]],
    rate: 600,
    note: "Automated standard machine gun turret with medium armor penetration (AP3)."
  },
  "E/MG-101 HMG Emplacement": {
    kind: "hit",
    slot: "Sentry & Emplacement",
    comps: [["twin heavy bullet", 300, 100, 4, false]],
    rate: 500,
    note: "Manned twin heavy machine gun fortification. Heavy AP4 armor penetration with 300 total rounds."
  }
};
