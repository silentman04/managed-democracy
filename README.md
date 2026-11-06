# Helldivers 2 Kill Math · Galactic Damage Calculator 💥

An offline-first, client-side damage calculator, ballistics matrix, and "What-If" weapon tuning laboratory for **Helldivers 2**.

[![Live App](https://img.shields.io/badge/Live%20App-GitHub%20Pages-brightgreen?style=for-the-badge&logo=github)](https://silentman04.github.io/managed-democracy/)
[![Game Patch](https://img.shields.io/badge/Game%20Patch-1.007.1xx-orange?style=for-the-badge)](https://helldivers.wiki.gg)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

### 🌐 **[👉 Open the Live Calculator in Your Browser](https://silentman04.github.io/managed-democracy/)**

---

## 🎯 What This Tool Does

Helldivers 2's in-game weapon cards conceal vital ballistic mechanics. This calculator models every hidden interaction with mathematical accuracy:

* **AP vs AV Thresholds:** 100% full damage (AP > AV), 65% matching damage (AP = AV), and 0% ricochets (AP < AV).
* **Durability Scaling:** Seamlessly blends standard ("raw") and durable damage based on target body part durability percentage.
* **Health Pools & Fatal Parts:** Distinguishes between localized part HP, bleedout constitution, limb-to-Main transfer caps, and instant-kill fatal organs.
* **Fire DoT & Stratagem Multipliers:** Direct stream DPS, enemy size scaling (1.5×, 1.7×), and the Enhanced Combustion ship module (+25%).
* **Explosive Damage Resistance (ExDR):** Independent explosive blast calculations against anatomical structures.

---

## 🚀 Key Features

1. **How Damage Works Guide:** Interactive ballistic manual with diagrams, formulas, and intuitive analogies.
2. **Dynamic Kill Matrix:** Fastest shots-to-kill or seconds-to-kill across all weapons against key targets for **Terminids**, **Automatons**, and **Illuminates**.
3. **17-Column Faction Breakdowns:** Full part-by-part calculation tables with search filtering, column sorting, and instant Reddit/Discord Markdown export.
4. **All Three Factions Supported (36 Enemies):** Comprehensive anatomical data for Terminids, Automatons, and the Illuminate (Squ'ith) roster.
5. **Expanded Arsenal:** Primaries, Secondaries, Grenades, Support Launchers, and offensive Orbital/Eagle Stratagems.
6. **"What-If" Tuning Sandbox:** Real-time balance lab with interactive sliders for **AR-2 Coyote**, **PLAS-1 Scorcher**, and **PLAS-101 Purifier / Pacifier**.
7. **Shareable Matchups:** Filter any matchup and copy a direct link with URL hash parameters (`#tab=Terminid&enemy=Charger&weapon=Quasar`).
8. **Dark / Light Tactical Theme:** Built with Super Earth military terminal aesthetics.

---

## 💻 Running Locally / Offline

No web server, node.js, or build step required! 

1. Clone or download this repository:
   ```bash
   git clone https://github.com/silentman04/managed-democracy.git
   ```
2. Double-click `index.html` in your file explorer to open it directly in any web browser (Chrome, Firefox, Edge, Safari).

```
managed-democracy/
├── index.html            # Main dashboard shell
├── css/
│   └── style.css         # Styling, dark mode, responsive tables
├── js/
│   ├── engine.js         # Pure math engine: AP check, durability blend, ExDR, TTK
│   ├── sandbox.js        # "What-If" slider controller
│   └── app.js            # Tab switching, URL sync, and DOM rendering
├── data/
│   ├── weapons.js        # Primaries, Secondaries, Grenades, Supports, Stratagems
│   └── enemies.js        # Anatomical tables for all 3 factions
└── README.md
```

---

## 🛠️ Contributing & Patch Updates

Because this tool uses a **dynamic JS engine** rather than static precomputed tables, balance adjustments take seconds:

* **To add or adjust a weapon:** Edit [`data/weapons.js`](data/weapons.js). Update `comps` (damage, durable, AP) or `rate`.
* **To update enemy health or armor:** Edit [`data/enemies.js`](data/enemies.js).
* All matrix tables, breakdown panels, and sandbox simulations recalculate automatically at runtime! Pull requests are warmly welcomed.

---

## 📖 Sources & Citations

* Ballistic data verified via [helldivers.wiki.gg](https://helldivers.wiki.gg) (Game Patch 1.007.1xx).
* Formulas adhere to Arrowhead Game Studios' internal ballistic mechanics researched and verified by the community.
