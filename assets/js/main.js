/* =====================================================================
   Caylò's Fried Chicken — site script
   Builds the header and footer, switches language, and renders the
   restaurants, menu and jobs from data.js.
   You normally don't need to edit this file.
   ===================================================================== */
(function () {
  "use strict";

  const LANG_KEY = "caylos-lang";
  const page = document.body.dataset.page || "";

  /* ---------- Language ---------- */
  function initialLang() {
    try {
      const saved = localStorage.getItem(LANG_KEY);
      if (saved === "no" || saved === "en") return saved;
    } catch (e) { /* storage blocked */ }
    const nav = (navigator.language || "no").toLowerCase();
    return nav.startsWith("en") ? "en" : "no";
  }
  let lang = initialLang();

  const t = (key) => {
    const v = I18N[lang][key];
    return v === undefined ? I18N.no[key] ?? key : v;
  };
  const L = (obj) => (obj && typeof obj === "object" ? obj[lang] || obj.no || "" : obj || "");

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- Icons ---------- */
  const icon = {
    pin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    phone: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
    check: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>',
    instagram: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    facebook: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8z"/></svg>',
    tiktok: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 3c.3 2.3 1.7 3.8 4 4v3.2c-1.5 0-2.8-.4-4-1.2V15a6 6 0 1 1-6-6v3.3a2.7 2.7 0 1 0 2.7 2.7V3H16z"/></svg>',
  };

  /* ---------- Header ---------- */
  const MORE_PAGES = ["about", "jobs", "contact", "franchise"];
  function renderHeader() {
    const el = document.getElementById("site-header");
    if (!el) return;
    const a = (p) => (p === page ? ' class="active" aria-current="page"' : "");
    el.className = "site-header";
    el.innerHTML = `
      <nav class="container nav" aria-label="Main">
        <a href="index.html" class="logo">
          <img src="assets/img/logo.png" alt="Caylò's Original Fried Chicken">
        </a>
        <ul class="nav-links" id="nav-links">
          <li><a href="index.html"${a("home")} data-i18n="nav.home"></a></li>
          <li><a href="restaurants.html"${a("restaurants")} data-i18n="nav.restaurants"></a></li>
          <li><a href="menu.html"${a("menu")} data-i18n="nav.menu"></a></li>
          <li class="has-dropdown">
            <button class="dropdown-toggle${MORE_PAGES.includes(page) ? " active" : ""}" aria-expanded="false" data-i18n="nav.more"></button>
            <ul class="dropdown">
              <li><a href="about.html"${a("about")} data-i18n="nav.about"></a></li>
              <li><a href="jobs.html"${a("jobs")} data-i18n="nav.jobs"></a></li>
              <li><a href="contact.html"${a("contact")} data-i18n="nav.contact"></a></li>
              <li><a href="franchise.html"${a("franchise")} data-i18n="nav.franchise"></a></li>
            </ul>
          </li>
        </ul>
        <div class="nav-right">
          <div class="lang-switch" role="group" aria-label="Language / Språk">
            <button type="button" data-lang="no" lang="no">NO</button>
            <button type="button" data-lang="en" lang="en">EN</button>
          </div>
          <button class="menu-btn" type="button" aria-controls="nav-links" aria-expanded="false" data-i18n-aria="nav.toggle"><span></span></button>
        </div>
      </nav>`;

    const dd = el.querySelector(".has-dropdown");
    const toggle = dd.querySelector(".dropdown-toggle");
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = dd.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
    document.addEventListener("click", (e) => {
      if (!dd.contains(e.target)) {
        dd.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        dd.classList.remove("open");
        document.body.classList.remove("nav-open");
      }
    });

    const menuBtn = el.querySelector(".menu-btn");
    menuBtn.addEventListener("click", () => {
      const open = document.body.classList.toggle("nav-open");
      menuBtn.setAttribute("aria-expanded", open);
    });

    el.querySelectorAll("[data-lang]").forEach((b) =>
      b.addEventListener("click", () => setLang(b.dataset.lang))
    );
  }

  /* ---------- Footer ---------- */
  function renderFooter() {
    const el = document.getElementById("site-footer");
    if (!el) return;
    const s = COMPANY.socials || {};
    const socials = ["instagram", "facebook", "tiktok"]
      .filter((k) => s[k])
      .map((k) => `<a href="${esc(s[k])}" target="_blank" rel="noopener" aria-label="${k}">${icon[k]}</a>`)
      .join("");
    el.className = "site-footer";
    el.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div>
            <a href="index.html" class="footer-logo">
              <img src="assets/img/logo.png" alt="Caylò's Original Fried Chicken">
            </a>
            <p data-i18n="footer.about"></p>
            <div class="socials">${socials}</div>
          </div>
          <div>
            <h4 data-i18n="footer.explore"></h4>
            <ul>
              <li><a href="index.html" data-i18n="nav.home"></a></li>
              <li><a href="restaurants.html" data-i18n="nav.restaurants"></a></li>
              <li><a href="menu.html" data-i18n="nav.menu"></a></li>
            </ul>
          </div>
          <div>
            <h4 data-i18n="footer.company"></h4>
            <ul>
              <li><a href="about.html" data-i18n="nav.about"></a></li>
              <li><a href="jobs.html" data-i18n="nav.jobs"></a></li>
              <li><a href="franchise.html" data-i18n="nav.franchise"></a></li>
            </ul>
          </div>
          <div>
            <h4 data-i18n="footer.contact"></h4>
            <ul>
              <li><a href="mailto:${esc(COMPANY.email)}">${esc(COMPANY.email)}</a></li>
              <li><a href="tel:${esc(COMPANY.phone.replace(/\s/g, ""))}">${esc(COMPANY.phone)}</a></li>
              <li>${esc(COMPANY.address)}</li>
              <li><a href="contact.html" data-i18n="nav.contact"></a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} Caylò's Fried Chicken. <span data-i18n="footer.rights"></span></span>
          <span><span data-i18n="contact.org"></span> ${esc(COMPANY.orgNumber)}</span>
        </div>
      </div>`;
  }

  /* ---------- Apply translations to static text ---------- */
  function applyStatic() {
    document.documentElement.lang = lang === "no" ? "nb" : "en";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      el.innerHTML = t(el.dataset.i18nHtml);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.placeholder = t(el.dataset.i18nPlaceholder);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      el.setAttribute("aria-label", t(el.dataset.i18nAria));
    });
    document.querySelectorAll("[data-lang]").forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === lang);
      b.setAttribute("aria-pressed", b.dataset.lang === lang);
    });
    const titleKey = document.body.dataset.title;
    if (titleKey) {
      document.title = page === "home" ? t(titleKey) : `${t(titleKey)} | Caylò's Fried Chicken`;
    }
  }

  /* ---------- Menu items ---------- */
  /* ---------- Allergens ---------- */
  const ALLERGY_KEY = "caylos-allergens";
  const allergenName = (id) => {
    const a = (typeof ALLERGENS !== "undefined" ? ALLERGENS : []).find((x) => x.id === id);
    return a ? L(a) : id;
  };
  let blocked = new Set();
  try {
    blocked = new Set(JSON.parse(localStorage.getItem(ALLERGY_KEY) || "[]"));
  } catch (e) { /* storage blocked */ }
  const saveBlocked = () => {
    try { localStorage.setItem(ALLERGY_KEY, JSON.stringify([...blocked])); } catch (e) { /* ignore */ }
  };
  const isHidden = (item) => (item.allergens || []).some((a) => blocked.has(a));

  function allergenLine(item) {
    if (!item.allergens) return "";
    const list = item.allergens.length ? item.allergens.map(allergenName).join(", ") : t("allergy.none");
    return `<p class="item-allergens"><strong>${t("allergy.contains")}</strong> ${esc(list)}</p>`;
  }

  function renderAllergyPanel() {
    const box = document.getElementById("allergy-panel");
    if (!box || typeof ALLERGENS === "undefined") return;
    const wasOpen = box.querySelector("details") ? box.querySelector("details").open : window.innerWidth > 900;
    box.innerHTML = `
      <details${wasOpen ? " open" : ""}>
        <summary>
          <span class="allergy-title">${t("allergy.title")}</span>
          <span class="allergy-count" id="allergy-count"></span>
        </summary>
        <p class="allergy-hint">${t("allergy.hint")}</p>
        <div class="allergy-list">
          ${ALLERGENS.map(
            (a) => `<label class="allergy-chip"><input type="checkbox" value="${esc(a.id)}"${blocked.has(a.id) ? " checked" : ""}><span>${esc(L(a))}</span></label>`
          ).join("")}
        </div>
        <button type="button" class="allergy-reset" id="allergy-reset">${t("allergy.reset")}</button>
        <p class="allergy-note">${t("allergy.note")}</p>
      </details>`;
    box.querySelectorAll("input[type=checkbox]").forEach((cb) =>
      cb.addEventListener("change", () => {
        if (cb.checked) blocked.add(cb.value);
        else blocked.delete(cb.value);
        saveBlocked();
        renderMenu();
      })
    );
    box.querySelector("#allergy-reset").addEventListener("click", () => {
      blocked.clear();
      saveBlocked();
      box.querySelectorAll("input[type=checkbox]").forEach((cb) => (cb.checked = false));
      renderMenu();
    });
  }

  function updateAllergyCount(hiddenCount) {
    const el = document.getElementById("allergy-count");
    const reset = document.getElementById("allergy-reset");
    if (reset) reset.hidden = blocked.size === 0;
    if (!el) return;
    el.textContent = blocked.size ? t("allergy.hidden").replace("{n}", hiddenCount) : "";
  }

  function itemCard(item) {
    const tags = (item.tags || [])
      .map((tg) => `<span class="tag tag-${tg}">${esc(t("menu.tag." + tg))}</span>`)
      .join("");
    const media = item.image
      ? `<img src="${esc(item.image)}" alt="${esc(L(item.name))}" loading="lazy" decoding="async">`
      : `<span aria-hidden="true">${item.emoji || "🍗"}</span>`;
    return `
      <article class="item">
        <div class="item-img${item.image ? " has-photo" : ""}">${media}</div>
        <div class="item-body">
          <h3>${esc(L(item.name))}</h3>
          <p>${esc(L(item.desc))}</p>
          ${allergenLine(item)}
          <div class="item-foot">
            <span class="price">${item.price} ${t("currency")}</span>
            <span class="tags">${tags}</span>
          </div>
        </div>
      </article>`;
  }

  let menuObserver = null;
  // Category picture: its own "image", else the first dish with a photo, else its emoji
  function catThumb(c) {
    const img = c.image || (c.items.find((i) => i.image) || {}).image;
    return img ? `<img src="${esc(img)}" alt="" loading="lazy" decoding="async">` : c.icon || "🍗";
  }
  function renderMenu() {
    const nav = document.getElementById("cat-nav");
    const list = document.getElementById("menu-list");
    if (!nav || !list) return;
    // Leave out dishes with ticked allergens, and categories that end up empty
    const cats = MENU.map((c) => ({ ...c, items: c.items.filter((i) => !isHidden(i)) })).filter((c) => c.items.length);
    const hiddenCount = MENU.reduce((n, c) => n + c.items.filter(isHidden).length, 0);
    updateAllergyCount(hiddenCount);
    nav.innerHTML = cats.map(
      (c) =>
        `<a class="side-link" href="#${esc(c.id)}" data-cat="${esc(c.id)}"><span class="side-thumb" aria-hidden="true">${catThumb(c)}</span><span>${esc(L(c.name))}</span></a>`
    ).join("");
    list.innerHTML = (cats.length ? "" : `<div class="card empty">${t("allergy.empty")}</div>`) + cats.map(
      (c) => `
      <section class="menu-cat" id="${esc(c.id)}">
        <div class="menu-cat-head">
          <h2>${esc(L(c.name))}</h2>
          ${c.desc ? `<p>${esc(L(c.desc))}</p>` : ""}
        </div>
        <div class="grid grid-3">${c.items.map(itemCard).join("")}</div>
      </section>`
    ).join("");

    // Highlight the category for the section in view
    const links = nav.querySelectorAll(".side-link");
    const highlight = (id) => {
      links.forEach((c) => c.classList.toggle("active", c.dataset.cat === id));
      const active = nav.querySelector(".side-link.active");
      // On phones the categories are a sideways row: keep the active one in view
      if (!active) return;
      if (nav.scrollWidth > nav.clientWidth) {
        nav.scrollTo({ left: active.offsetLeft - 16, behavior: "smooth" });
      }
      // Scroll the sidebar (whichever box scrolls at this screen size) to the active category
      const side = [nav.closest(".menu-side"), nav.closest(".menu-aside")].find(
        (el) => el && el.scrollHeight > el.clientHeight + 1
      );
      if (side) {
        const top = active.offsetTop - side.clientHeight / 2 + active.offsetHeight / 2;
        side.scrollTo({ top, behavior: "smooth" });
      }
    };
    highlight(cats[0] && cats[0].id);
    if (menuObserver) menuObserver.disconnect();
    if ("IntersectionObserver" in window) {
      menuObserver = new IntersectionObserver(
        (entries) => entries.forEach((en) => en.isIntersecting && highlight(en.target.id)),
        { rootMargin: "-30% 0px -65% 0px" }
      );
      list.querySelectorAll(".menu-cat").forEach((s) => menuObserver.observe(s));
    }
  }

  function renderFeatured() {
    const el = document.getElementById("featured");
    if (!el) return;
    const items = MENU.flatMap((c) => c.items).filter((i) => i.featured).slice(0, 6);
    el.innerHTML = items.map(itemCard).join("");
  }

  /* ---------- Restaurants ---------- */
  function osloNow() {
    // Day index (0 = Monday) and minutes since midnight, in Norwegian time
    const parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Oslo",
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    }).formatToParts(new Date());
    const get = (type) => parts.find((p) => p.type === type).value;
    const day = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].indexOf(get("weekday"));
    return { day, mins: +get("hour") * 60 + +get("minute") };
  }
  const toMins = (hhmm) => {
    const [h, m] = hhmm.split(":").map(Number);
    return h * 60 + m;
  };

  function isOpen(r) {
    if (r.comingSoon || !r.hours || !r.hours.length) return false;
    const { day, mins } = osloNow();
    const today = r.hours[day];
    if (today) {
      const o = toMins(today[0]);
      const c = toMins(today[1]);
      if (c > o ? mins >= o && mins < c : mins >= o) return true;
    }
    // Yesterday's hours running past midnight
    const y = r.hours[(day + 6) % 7];
    if (y) {
      const o = toMins(y[0]);
      const c = toMins(y[1]);
      if (c <= o && mins < c) return true;
    }
    return false;
  }

  function restoCard(r) {
    const days = t("days");
    const today = osloNow().day;
    let status;
    if (r.comingSoon) status = `<span class="status status-soon">${t("restos.soon")}</span>`;
    else if (isOpen(r)) status = `<span class="status status-open">${t("restos.open")}</span>`;
    else status = `<span class="status status-closed">${t("restos.closed")}</span>`;

    const features = (r.features || []).length
      ? `<div class="tags">${r.features.map((f) => `<span class="tag">${esc(t("restos.feature." + f))}</span>`).join("")}</div>`
      : "";

    const hours =
      !r.comingSoon && r.hours && r.hours.length
        ? `<details class="hours-box">
            <summary>${t("restos.hours")}</summary>
            <table class="hours">${r.hours
              .map(
                (h, i) =>
                  `<tr${i === today ? ' class="today"' : ""}><td>${days[i]}</td><td>${
                    h ? `${esc(h[0])}–${esc(h[1])}` : t("restos.closedDay")
                  }</td></tr>`
              )
              .join("")}</table>
          </details>`
        : "";

    const maps = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(r.address);
    return `
      <article class="resto">
        <div class="resto-head">
          <div>
            <div class="resto-city">${esc(r.city)}</div>
            <h3>${esc(r.name)}</h3>
          </div>
          ${status}
        </div>
        <div class="resto-line">${icon.pin}<span>${esc(r.address)}</span></div>
        ${r.phone ? `<div class="resto-line">${icon.phone}<a href="tel:${esc(r.phone.replace(/\s/g, ""))}">${esc(r.phone)}</a></div>` : ""}
        ${features}
        ${hours}
        <div class="resto-actions">
          <a class="btn btn-primary" href="${maps}" target="_blank" rel="noopener">${t("restos.directions")}</a>
          ${r.phone ? `<a class="btn btn-outline" href="tel:${esc(r.phone.replace(/\s/g, ""))}">${t("restos.call")}</a>` : ""}
        </div>
      </article>`;
  }

  const cities = () => [...new Set(RESTAURANTS.map((r) => r.city))].sort((a, b) => a.localeCompare(b, "nb"));

  function renderRestaurants() {
    const list = document.getElementById("resto-list");
    if (!list) return;
    const search = document.getElementById("resto-search");
    const select = document.getElementById("resto-city");

    const current = select.value;
    select.innerHTML =
      `<option value="">${t("restos.allCities")}</option>` +
      cities().map((c) => `<option value="${esc(c)}">${esc(c)}</option>`).join("");
    select.value = current;

    const draw = () => {
      const q = search.value.trim().toLowerCase();
      const city = select.value;
      const found = RESTAURANTS.filter(
        (r) =>
          (!city || r.city === city) &&
          (!q || [r.name, r.city, r.address].join(" ").toLowerCase().includes(q))
      );
      list.innerHTML = found.length
        ? found.map(restoCard).join("")
        : `<div class="empty">${t("restos.empty")}</div>`;
    };
    if (!list.dataset.bound) {
      search.addEventListener("input", draw);
      select.addEventListener("change", draw);
      list.dataset.bound = "1";
    }
    draw();
  }

  /* ---------- Stats (home + about) ---------- */
  function renderStats() {
    const set = (id, v) => {
      const el = document.getElementById(id);
      if (el) el.textContent = v;
    };
    set("stat-restos", RESTAURANTS.length);
    set("stat-cities", cities().length);
    set("stat-items", MENU.reduce((n, c) => n + c.items.length, 0));
  }

  /* ---------- Jobs ---------- */
  function renderJobs() {
    const list = document.getElementById("job-list");
    if (list) {
      list.innerHTML = JOBS.length
        ? JOBS.map(
            (j, i) => `
          <div class="card job">
            <div>
              <h3>${esc(L(j.title))}</h3>
              <div class="meta">${esc(L(j.location))} · ${esc(L(j.type))}</div>
            </div>
            <a class="btn btn-primary" href="#apply" data-job="${i}">${t("jobs.apply")}</a>
          </div>`
          ).join("")
        : `<div class="card empty">${t("jobs.open.none")}</div>`;
      list.querySelectorAll("[data-job]").forEach((b) =>
        b.addEventListener("click", () => {
          const sel = document.getElementById("job-position");
          if (sel) sel.value = b.dataset.job;
        })
      );
    }
    const pos = document.getElementById("job-position");
    if (pos) {
      const v = pos.value;
      pos.innerHTML =
        `<option value="general">${t("jobs.form.general")}</option>` +
        JOBS.map((j, i) => `<option value="${i}">${esc(L(j.title))}</option>`).join("");
      pos.value = v || "general";
    }
    const rest = document.getElementById("job-restaurant");
    if (rest) {
      const v = rest.value;
      rest.innerHTML =
        `<option value="">${t("jobs.form.any")}</option>` +
        RESTAURANTS.map((r) => `<option>${esc(r.name)}</option>`).join("");
      rest.value = v;
    }
  }

  /* ---------- Contact info ---------- */
  function renderContactInfo() {
    document.querySelectorAll("[data-company]").forEach((el) => {
      const key = el.dataset.company;
      const v = COMPANY[key] || "";
      if (key.toLowerCase().includes("email")) {
        el.innerHTML = `<a href="mailto:${esc(v)}">${esc(v)}</a>`;
      } else if (key === "phone") {
        el.innerHTML = `<a href="tel:${esc(v.replace(/\s/g, ""))}">${esc(v)}</a>`;
      } else {
        el.textContent = v;
      }
    });
  }

  /* ---------- Forms (send via the visitor's email app) ---------- */
  function bindForms() {
    document.querySelectorAll("form[data-mailto]").forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!form.reportValidity()) return;
        const to = COMPANY[form.dataset.mailto] || COMPANY.email;
        const lines = [];
        form.querySelectorAll("input, select, textarea").forEach((f) => {
          if (!f.name) return;
          const label = form.querySelector(`label[for="${f.id}"]`);
          const val = f.tagName === "SELECT" ? f.options[f.selectedIndex]?.text || "" : f.value;
          if (val) lines.push(`${label ? label.textContent : f.name}: ${val}`);
        });
        const heading = form.closest("section")?.querySelector("h2")?.textContent || "Caylò's";
        const nameField = form.querySelector('[name="name"]');
        const subject = `${heading}${nameField && nameField.value ? " – " + nameField.value : ""}`;
        window.location.href =
          `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n\n"))}`;
        const ok = form.querySelector(".form-success");
        if (ok) ok.classList.add("show");
      });
    });
  }

  /* ---------- Ticker (home) ---------- */
  function renderTicker() {
    const el = document.getElementById("ticker");
    if (!el) return;
    const words = t("home.ticker");
    const row = words.map((w) => `<span>${esc(w)}</span><span aria-hidden="true">✦</span>`).join("");
    el.innerHTML = row + row + row + row;
  }

  /* ---------- Render everything ---------- */
  function renderDynamic() {
    renderTicker();
    renderAllergyPanel();
    renderFeatured();
    renderMenu();
    renderRestaurants();
    renderStats();
    renderJobs();
    renderContactInfo();
  }

  function setLang(next) {
    lang = next;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }
    applyStatic();
    renderDynamic();
  }

  renderHeader();
  renderFooter();
  applyStatic();
  renderDynamic();
  bindForms();
})();
