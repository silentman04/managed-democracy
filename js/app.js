/**
 * Helldivers 2 Kill Math Application
 * Coordinates tab routing, dynamic breakdown panels, matrix tables,
 * weapons catalog, anatomy viewer, theme switcher, and markdown exporter.
 */

(function () {
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // Toast notification helper
  function showToast(message) {
    let toast = document.getElementById("app-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "app-toast";
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2600);
  }

  // Theme switcher
  function initTheme() {
    const btn = document.getElementById("theme-toggle");
    const stored = localStorage.getItem("hd-theme");
    if (stored) {
      document.documentElement.setAttribute("data-theme", stored);
    }
    if (btn) {
      const updateLabel = () => {
        const current = document.documentElement.getAttribute("data-theme") || 
          (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        btn.textContent = current === "dark" ? "☀ Light Mode" : "🌙 Dark Mode";
      };
      updateLabel();
      btn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme") || 
          (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        const next = current === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("hd-theme", next);
        updateLabel();
      });
    }
  }

  // Tab switching with URL hash sync
  const tabs = [...document.querySelectorAll("nav button")];
  function switchTab(id, updateUrl = true) {
    if (!id || !document.getElementById(id)) return;
    tabs.forEach(b => b.setAttribute("aria-selected", b.dataset.tab === id ? "true" : "false"));
    document.querySelectorAll("section[role=tabpanel]").forEach(s => s.hidden = s.id !== id);
    try {
      localStorage.setItem("hdtab", id);
    } catch (e) {}

    if (updateUrl) {
      const currentParams = new URLSearchParams(location.hash.slice(1));
      currentParams.set("tab", id);
      history.replaceState(null, "", "#" + currentParams.toString());
    }

    if (id === "sandbox" && typeof WhatIfSandbox !== "undefined") {
      WhatIfSandbox.recalculate();
    }
  }

  tabs.forEach(b => b.addEventListener("click", () => switchTab(b.dataset.tab)));

  // Setup Kill Matrix
  function renderMatrix(faction) {
    const enemies = Object.keys(ENEMIES_DATA).filter(e => ENEMIES_DATA[e].faction === faction);
    const weapons = Object.keys(WEAPONS_DATA);
    const bestRoutes = KillMathEngine.computeBestRoutes(ENEMIES_DATA, WEAPONS_DATA);

    let html = `<thead><tr><th class="wname">Weapon</th>${enemies.map(e => `<th>${esc(e)}</th>`).join("")}</tr></thead><tbody>`;

    for (const w of weapons) {
      const wData = WEAPONS_DATA[w];
      html += `<tr><td class="wname"><b>${esc(w)}</b><br><span class="note">${esc(wData.slot)}</span></td>`;
      for (const e of enemies) {
        const b = bestRoutes[`${e}|${w}`];
        if (!b) {
          html += `<td class="cell none"><b>—</b><small>Immune</small></td>`;
          continue;
        }
        const isOneHit = b.u !== "s" && b.k === 1;
        const valText = b.u === "s" ? `${b.k} s` : `${b.k} ${b.k === 1 ? "hit" : "hits"}`;
        html += `<td class="cell ${isOneHit ? "one" : ""}"><b>${valText}</b><small>${esc(b.p)}</small></td>`;
      }
      html += "</tr>";
    }
    const container = document.getElementById(`mx-${faction}`);
    if (container) container.innerHTML = html + "</tbody>";
  }

  // Exact 17 Columns Configuration
  const COLS = [
    ["enemy", "Enemy"],
    ["weapon", "Weapon"],
    ["part", "Part"],
    ["hp", "Part HP", "num"],
    ["av", "AV", "num"],
    ["dur", "Durable %", "num"],
    ["tomain", "→ Main %", "num"],
    ["exdr", "ExDR %", "num"],
    ["fatal", "Fatal"],
    ["apc", "AP check"],
    ["dmg", "Dmg / hit (or /s)", "num"],
    ["brk", "To break", "num"],
    ["kill", "To kill", "num"],
    ["time", "Time (s)", "num"],
    ["route", "Route"],
    ["math", "Math", "mathc"],
    ["note", "Notes"]
  ];

  const CHIP_HTML = {
    full: '<span class="chip c-full">full</span>',
    white: '<span class="chip c-white">65%</span>',
    bounce: '<span class="chip c-bounce">bounce</span>'
  };

  // Render Breakdown Panel
  function renderPanel(fac) {
    const el = document.getElementById(fac);
    if (!el) return;

    const rows = KillMathEngine.computeFactionRows(fac, ENEMIES_DATA, WEAPONS_DATA);
    const enemies = [...new Set(rows.map(r => r.enemy))];
    const weapons = [...new Set(rows.map(r => r.weapon))];

    el.innerHTML = `
      <h2>${fac} Breakdown</h2>
      <p class="lede">Every weapon against every body part. Guns and launchers are counted in hits, flame weapons in seconds of spray. Click any column header to sort.</p>
      <div class="controls">
        <label for="${fac}-e">Enemy
          <select id="${fac}-e"><option value="">All enemies</option>${enemies.map(e => `<option>${esc(e)}</option>`).join("")}</select>
        </label>
        <label for="${fac}-w">Weapon
          <select id="${fac}-w"><option value="">All weapons</option>${weapons.map(w => `<option>${esc(w)}</option>`).join("")}</select>
        </label>
        <label for="${fac}-q">Part Search
          <input type="search" id="${fac}-q" placeholder="e.g. head, eye, vent, belly">
        </label>
        <label class="inline" for="${fac}-k">
          <input type="checkbox" id="${fac}-k"> Only rows that kill
        </label>
        <button class="btn" id="${fac}-export" title="Copy filtered rows as Discord/Reddit Markdown table">📋 Copy Table Markdown</button>
        <button class="btn" id="${fac}-share" title="Copy shareable URL link to this filter">🔗 Share Matchup</button>
        <span class="count" id="${fac}-n"></span>
      </div>
      <div class="tbl scroll">
        <table>
          <thead><tr>${COLS.map(([k, l]) => `<th><button data-k="${k}">${l}</button></th>`).join("")}</tr></thead>
          <tbody id="${fac}-b"></tbody>
        </table>
      </div>
    `;

    const E = el.querySelector(`#${fac}-e`);
    const W = el.querySelector(`#${fac}-w`);
    const Q = el.querySelector(`#${fac}-q`);
    const KK = el.querySelector(`#${fac}-k`);
    const exportBtn = el.querySelector(`#${fac}-export`);
    const shareBtn = el.querySelector(`#${fac}-share`);

    // Defaults for comfortable browsing
    if (fac === "Terminid") E.value = "Charger";
    else if (fac === "Automaton") E.value = "Hulk (Bruiser)";
    else if (fac === "Illuminate") E.value = "Overseer";

    let sortK = null;
    let dir = 1;

    function renderTable() {
      const q = Q.value.trim().toLowerCase();
      let rs = rows.filter(r => 
        (!E.value || r.enemy === E.value) &&
        (!W.value || r.weapon === W.value) &&
        (!q || r.part.toLowerCase().includes(q)) &&
        (!KK.checked || typeof r.kill === "number")
      );

      if (sortK) {
        rs = rs.slice().sort((a, b) => {
          const va = a[sortK];
          const vb = b[sortK];
          const na = typeof va === "number";
          const nb = typeof vb === "number";
          if (na && nb) return (va - vb) * dir;
          if (na) return -1;
          if (nb) return 1;
          return String(va || "").localeCompare(String(vb || "")) * dir;
        });
      }

      const shown = rs.slice(0, 600);
      document.getElementById(`${fac}-b`).innerHTML = shown.map(r => {
        const isF = WEAPONS_DATA[r.weapon]?.kind === "flame";
        return "<tr>" + COLS.map(([k, l, c]) => {
          if (k === "apc") return `<td>${CHIP_HTML[r.apc] || r.apc}</td>`;
          let v = r[k];
          if (k === "kill") {
            const cls = v === "—" ? "kno" : (v === 1 && !isF ? "k1" : "");
            return `<td class="num kill ${cls}">${esc(v)}${typeof v === "number" ? (isF ? " s" : "") : ""}</td>`;
          }
          if (k === "brk" && v !== "" && isF) v = v + " s";
          if (k === "hp" && v === null) v = "Main";
          return `<td class="${c || ""}">${esc(v)}</td>`;
        }).join("") + "</tr>";
      }).join("");

      document.getElementById(`${fac}-n`).textContent = `${rs.length} rows` + (rs.length > 600 ? " (showing first 600, narrow filters)" : "");
    }

    [E, W, Q, KK].forEach(x => x.addEventListener("input", renderTable));
    el.querySelectorAll("th button").forEach(b => {
      b.onclick = () => {
        dir = sortK === b.dataset.k ? -dir : 1;
        sortK = b.dataset.k;
        renderTable();
      };
    });

    // Markdown Exporter
    if (exportBtn) {
      exportBtn.addEventListener("click", () => {
        const q = Q.value.trim().toLowerCase();
        const filtered = rows.filter(r => 
          (!E.value || r.enemy === E.value) &&
          (!W.value || r.weapon === W.value) &&
          (!q || r.part.toLowerCase().includes(q)) &&
          (!KK.checked || typeof r.kill === "number")
        );

        if (filtered.length === 0) {
          showToast("No rows to export.");
          return;
        }

        let md = `| Enemy | Weapon | Part | Part HP | AV | Dur% | Dmg/Hit | Hits to Kill | Route |\n`;
        md += `|:---|:---|:---|:---:|:---:|:---:|:---:|:---:|:---|\n`;
        filtered.slice(0, 100).forEach(r => {
          md += `| ${r.enemy} | ${r.weapon} | ${r.part} | ${r.hp ?? 'Main'} | AV${r.av} | ${r.dur}% | ${r.dmg} | ${r.kill} | ${r.route} |\n`;
        });

        navigator.clipboard.writeText(md).then(() => {
          showToast(`Copied ${Math.min(filtered.length, 100)} rows as Markdown!`);
        }).catch(() => {
          showToast("Failed to copy table.");
        });
      });
    }

    // Share Matchup URL
    if (shareBtn) {
      shareBtn.addEventListener("click", () => {
        const params = new URLSearchParams();
        params.set("tab", fac);
        if (E.value) params.set("enemy", E.value);
        if (W.value) params.set("weapon", W.value);
        const shareUrl = `${location.origin}${location.pathname}#${params.toString()}`;
        navigator.clipboard.writeText(shareUrl).then(() => {
          showToast("Shareable link copied to clipboard!");
        });
      });
    }

    renderTable();
  }

  // Render Weapons Inputs Table
  function renderWeaponsTable() {
    const table = document.getElementById("wtable");
    if (!table) return;

    let h = `<thead><tr><th>Weapon</th><th>Slot</th><th>Component</th><th>Raw dmg</th><th>Durable dmg</th><th>AP</th><th>Type</th><th>Notes</th></tr></thead><tbody>`;

    for (const [name, w] of Object.entries(WEAPONS_DATA)) {
      if (w.kind === "hit") {
        w.comps.forEach((c, idx) => {
          h += `<tr>
            <td>${idx ? "" : `<b>${esc(name)}</b>`}</td>
            <td>${idx ? "" : esc(w.slot)}</td>
            <td>${esc(c[0])}</td>
            <td class="num">${c[1]}</td>
            <td class="num">${c[2]}</td>
            <td class="num">AP${c[3]}</td>
            <td>${c[4] ? "explosion" : "projectile"}</td>
            <td class="note">${idx ? "" : esc((w.rate ? `${w.rate} rpm. ` : "") + (w.note || ""))}</td>
          </tr>`;
        });
      } else {
        h += `<tr>
          <td><b>${esc(name)}</b></td>
          <td>${esc(w.slot)}</td>
          <td>flame stream + burn</td>
          <td class="num">${w.dps}/s</td>
          <td class="num">${w.dps}/s</td>
          <td class="num">AP4</td>
          <td>fire</td>
          <td class="note">${w.ec ? "Stratagem: +25% from Enhanced Combustion. " : "Not boosted by ship modules. "}~${w.fuel_s} s of spray per canister. Burn: 100/s for 3 s, AP4, Main only.</td>
        </tr>`;
      }
    }
    table.innerHTML = h + "</tbody>";
  }

  // Render Enemy Parts Catalog
  function renderEnemyPartsCatalog() {
    const select = document.getElementById("enemyPick");
    const info = document.getElementById("enemyInfo");
    const table = document.getElementById("etable");
    if (!select || !table) return;

    select.innerHTML = Object.keys(ENEMIES_DATA)
      .map(e => `<option>${esc(e)}</option>`)
      .join("");

    function update() {
      const e = ENEMIES_DATA[select.value];
      if (!e) return;
      info.innerHTML = `<p><b>${esc(select.value)}</b> · ${esc(e.faction)} · Main health <b>${e.main.toLocaleString()}</b> at AV${e.main_av} · fire multiplier ${e.fire}×</p>`;
      table.innerHTML = `
        <thead><tr><th>Part</th><th>HP</th><th>AV</th><th>Durable %</th><th>→ Main %</th><th>ExDR %</th><th>Fatal</th></tr></thead>
        <tbody>
          ${e.parts.map(p => `<tr>
            <td>${esc(p[0])}</td>
            <td class="num">${p[1] === null ? "Main" : p[1].toLocaleString()}</td>
            <td class="num">${p[2]}</td>
            <td class="num">${Math.round(p[3] * 100)}</td>
            <td class="num">${Math.round(p[4] * 100)}</td>
            <td class="num">${Math.round(p[5] * 100)}</td>
            <td>${p[6] ? "Yes" : "No"}</td>
          </tr>`).join("")}
        </tbody>
      `;
    }

    select.addEventListener("change", update);
    update();
  }

  // Deep linking: read URL parameters on boot
  function initRouting() {
    const rawHash = location.hash.slice(1);
    const params = new URLSearchParams(rawHash);
    const tabParam = params.get("tab") || rawHash;
    const enemyParam = params.get("enemy");
    const weaponParam = params.get("weapon");

    if (tabParam && document.getElementById(tabParam)) {
      switchTab(tabParam, false);
      if (enemyParam) {
        const eSelect = document.getElementById(`${tabParam}-e`);
        if (eSelect) {
          eSelect.value = enemyParam;
          eSelect.dispatchEvent(new Event("input"));
        }
      }
      if (weaponParam) {
        const wSelect = document.getElementById(`${tabParam}-w`);
        if (wSelect) {
          wSelect.value = weaponParam;
          wSelect.dispatchEvent(new Event("input"));
        }
      }
    } else {
      const savedTab = localStorage.getItem("hdtab") || "guide";
      if (document.getElementById(savedTab)) {
        switchTab(savedTab, false);
      }
    }
  }

  // Initialize all components
  window.addEventListener("DOMContentLoaded", () => {
    initTheme();

    // Render matrices
    renderMatrix("Terminid");
    renderMatrix("Automaton");
    renderMatrix("Illuminate");

    // Render breakdown panels
    renderPanel("Terminid");
    renderPanel("Automaton");
    renderPanel("Illuminate");

    // Render tables
    renderWeaponsTable();
    renderEnemyPartsCatalog();

    // Init What-If Sandbox
    if (typeof WhatIfSandbox !== "undefined") {
      WhatIfSandbox.init();
    }

    // Init Routing
    initRouting();
  });
})();
