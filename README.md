# Helldivers 2 Kill Math · Galactic Damage Calculator 💥

An offline-first, client-side damage calculator, ballistics matrix, and "What-If" weapon tuning laboratory for **Helldivers 2**.

Accurately models Helldivers 2's hidden damage mechanics:
* **AP vs AV thresholds:** 100% full damage (AP > AV), 65% matching damage (AP = AV), and 0% ricochets (AP < AV).
* **Durability scaling:** Blending standard ("raw") and durable damage based on enemy part durability percentage.
* **Health transfer & Fatal parts:** Part HP, bleedout constitution, limb-to-Main transfer caps, and fatal vs non-fatal body parts.
* **Fire DoT & Stratagem scaling:** Continuous stream DPS, size multipliers (1.5×, 1.7×), and the Enhanced Combustion ship module (+25%).
* **Explosive Damage Resistance (ExDR):** Independent splash blast calculations against anatomical components.

---

## 🚀 Features

1. **How Damage Works Guide:** Complete interactive textbook with diagrams, formulas, and intuitive analogies.
2. **Dynamic Kill Matrix:** Fastest shots-to-kill or seconds-to-kill across all weapons against key targets for **Terminids**, **Automatons**, and **Illuminates**.
3. **Faction Breakdown Panels:** Full part-by-part calculation tables with search filtering, column sorting, and instant Reddit/Discord Markdown export.
4. **All Three Factions Supported:** Includes Terminids, Automatons, and the newly added Illuminate (Squ'ith) roster.
5. **Expanded Weapon & Stratagem Arsenal:** Primaries, Secondaries, Grenades, Support Launchers, and Orbital/Eagle offensive stratagems.
6. **"What-If" Tuning Sandbox:** Real-time balance lab with interactive sliders for **AR-2 Coyote**, **PLAS-1 Scorcher**, and **PLAS-101 Purifier / Pacifier**.
7. **Shareable Deep Links:** Filter by matchup and copy shareable URLs with URL hash parameters (`#tab=Terminid&enemy=Charger&weapon=Quasar`).
8. **Dark / Light Tactical Theme:** Matches the Super Earth military terminal aesthetic.

---

## 💻 Offline Usage

No web server or build step required! Simply double-click `index.html` in your file explorer to open it directly in any modern browser (Chrome, Firefox, Edge, Safari).

```
epic-hawking/
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

## 🌐 Deploying to GitHub Pages (Free Instant Hosting)

1. **Create a new repository** on GitHub (e.g. `helldivers-kill-math`).
2. **Push this workspace** to your repository:
   ```bash
   git add .
   git commit -m "Initial release of Helldivers 2 Kill Math Calculator"
   git branch -M main
   git remote add origin https://github.com/silentman04/managed-democracy.git
   git push -u origin main
   ```
3. **Enable GitHub Pages:**
   * Go to your repository on GitHub: [github.com/silentman04/managed-democracy](https://github.com/silentman04/managed-democracy)
   * Click **Settings** → **Pages**.
   * Under **Build and deployment** > **Source**, select **Deploy from a branch**.
   * Choose `main` branch and `/ (root)` folder, then click **Save**.
4. Your calculator will be live at:
   `https://silentman04.github.io/managed-democracy/`

---

## 🛠️ Making Patch & Balance Updates

Because this tool uses a **dynamic JS engine** rather than hardcoded tables, updating stats takes seconds:

* **To add or buff a weapon:** Edit [data/weapons.js](file:///c:/Users/manuv/Documents/antigravity/epic-hawking/data/weapons.js). Update `comps` (damage, durable, AP) or `rate`.
* **To update enemy health or armor:** Edit [data/enemies.js](file:///c:/Users/manuv/Documents/antigravity/epic-hawking/data/enemies.js).
* All matrix tables, breakdown panels, and sandbox simulations recalculate automatically at runtime!

---

## 📖 Sources & Citations

* Stats verified via [helldivers.wiki.gg](https://helldivers.wiki.gg) (Game Patch 1.007.1xx).
* Formulas follow Arrowhead Game Studios' internal ballistic mechanics as researched by the community.
