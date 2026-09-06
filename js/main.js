/* ============ RoRock — script global ============ */

/* ---------- Date produse (placeholder până vin modelele exacte) ---------- */
const PRODUCTS = [
  // Tricouri
  { id: "t1", cat: "tricouri", name: "Tricou Trupă A — Tour 2026", price: 90, emoji: "🎸", band: "Trupă A", tag: "Nou", sizes: ["S", "M", "L", "XL", "XXL"], origin: "RO" },
  { id: "t2", cat: "tricouri", name: "Tricou Trupă B — Logo", price: 85, emoji: "🤘", band: "Trupă B", tag: "", sizes: ["S", "M", "L", "XL"], origin: "RO" },
  { id: "t3", cat: "tricouri", name: "Tricou Band X — Album", price: 110, emoji: "💀", band: "Band X", tag: "Import", sizes: ["M", "L", "XL", "XXL"], origin: "EXT" },
  { id: "t4", cat: "tricouri", name: "Tricou Band Y — Classic", price: 105, emoji: "🔥", band: "Band Y", tag: "", sizes: ["S", "M", "L", "XL"], origin: "EXT" },
  { id: "t5", cat: "tricouri", name: "Tricou Trupă C — Ediție limitată", price: 120, emoji: "⚡", band: "Trupă C", tag: "Limitat", sizes: ["M", "L", "XL"], origin: "RO" },
  { id: "t6", cat: "tricouri", name: "Tricou Band Z — Reprint", price: 95, emoji: "🖤", band: "Band Z", tag: "", sizes: ["S", "M", "L", "XL", "XXL"], origin: "EXT" },
  // Patchuri
  { id: "p1", cat: "patchuri", name: "Patch Trupă A — Brodat", price: 25, emoji: "🧷", band: "Trupă A", tag: "Nou", sizes: [], origin: "RO" },
  { id: "p2", cat: "patchuri", name: "Patch Trupă B — Triunghiular", price: 22, emoji: "🔻", band: "Trupă B", tag: "", sizes: [], origin: "RO" },
  { id: "p3", cat: "patchuri", name: "Patch Band X — Back patch mare", price: 45, emoji: "🛡️", band: "Band X", tag: "Import", sizes: [], origin: "EXT" },
  { id: "p4", cat: "patchuri", name: "Patch Band Y — Rotund", price: 20, emoji: "⭕", band: "Band Y", tag: "", sizes: [], origin: "EXT" },
  { id: "p5", cat: "patchuri", name: "Patch Trupă C — Logo brodat", price: 28, emoji: "✴️", band: "Trupă C", tag: "", sizes: [], origin: "RO" },
  { id: "p6", cat: "patchuri", name: "Patch Band Z — Cutie back patch", price: 40, emoji: "🪡", band: "Band Z", tag: "", sizes: [], origin: "EXT" },
  // CD-uri
  { id: "c1", cat: "cduri", name: "Trupă A — „Primul Album” CD", price: 50, emoji: "💿", band: "Trupă A", tag: "Nou", sizes: [], origin: "RO" },
  { id: "c2", cat: "cduri", name: "Trupă B — „Live la București” CD", price: 55, emoji: "🎤", band: "Trupă B", tag: "", sizes: [], origin: "RO" },
  { id: "c3", cat: "cduri", name: "Trupă C — „EP 2026” CD", price: 45, emoji: "📀", band: "Trupă C", tag: "Nou", sizes: [], origin: "RO" },
  // Accesorii
  { id: "a1", cat: "accesorii", name: "Curea de chitară — Model Metal", price: 75, emoji: "🎸", band: "RoRock Gear", tag: "Nou", sizes: [], origin: "RO" },
  { id: "a2", cat: "accesorii", name: "Broșă / Pin — Logo RoRock", price: 15, emoji: "📌", band: "RoRock Gear", tag: "", sizes: [], origin: "RO" },
  { id: "a3", cat: "accesorii", name: "Brățară din piele — Tâșnăi", price: 30, emoji: "⛓️", band: "RoRock Gear", tag: "", sizes: [], origin: "RO" },
  { id: "a4", cat: "accesorii", name: "Breloc — Chitară electrică", price: 20, emoji: "🔑", band: "RoRock Gear", tag: "", sizes: [], origin: "RO" },
  { id: "a5", cat: "accesorii", name: "Pene de chitară — Set 5 buc.", price: 25, emoji: "🎶", band: "RoRock Gear", tag: "", sizes: [], origin: "RO" },
  { id: "a6", cat: "accesorii", name: "Cangur pentru vestă de patchuri", price: 60, emoji: "🎒", band: "RoRock Gear", tag: "Limitat", sizes: [], origin: "RO" },
];

/* Numele categoriilor afișate pe filtre și carduri */
const CAT_NAMES = {
  tricouri: "Tricouri",
  patchuri: "Patchuri",
  cduri: "CD-uri",
  accesorii: "Accesorii",
};

/* ---------- Utilitare ---------- */
const fmt = (n) => n.toLocaleString("ro-RO", { maximumFractionDigits: 0 }) + " lei";
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/* ---------- Anul curent în footer ---------- */
$$(".year").forEach((el) => (el.textContent = new Date().getFullYear()));

/* ---------- Meniu mobil ---------- */
const burger = $(".burger");
const navLinks = $(".nav-links");
if (burger && navLinks) {
  burger.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") navLinks.classList.remove("open");
  });
}

/* ---------- Link activ în navigare ---------- */
const page = location.pathname.split("/").pop() || "index.html";
$$(".nav-links a").forEach((a) => {
  const href = a.getAttribute("href");
  if (href === page || (page === "" && href === "index.html")) a.classList.add("active");
});

/* ---------- Scroll reveal ---------- */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("visible");
        revealObserver.unobserve(en.target);
      }
    });
  },
  { threshold: 0.12 }
);
$$(".reveal").forEach((el) => revealObserver.observe(el));

/* ---------- Toast ---------- */
let toastTimer;
function showToast(msg) {
  let toast = $(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  requestAnimationFrame(() => toast.classList.add("show"));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

/* ============================================================
   COȘ DE CUMPĂRĂTURI (localStorage)
   ============================================================ */
const CART_KEY = "rorock_cart_v1";

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}
function saveCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  renderCart();
}

let cart = loadCart();

function cartCount() {
  return cart.reduce((s, i) => s + i.qty, 0);
}
function cartTotal() {
  return cart.reduce((s, i) => s + i.qty * i.price, 0);
}

function addToCart(id, size) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return;
  const key = size ? `${id}|${size}` : id;
  const existing = cart.find((i) => i.key === key);
  if (existing) existing.qty += 1;
  else cart.push({ key, id, name: p.name, price: p.price, emoji: p.emoji, size: size || null, qty: 1 });
  saveCart(cart);
  showToast(`✔ ${p.name} adăugat în coș`);
  openCart();
}

function changeQty(key, delta) {
  const item = cart.find((i) => i.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter((i) => i.key !== key);
  saveCart(cart);
}
function removeItem(key) {
  cart = cart.filter((i) => i.key !== key);
  saveCart(cart);
}

/* ---------- Randare coș ---------- */
function renderCart() {
  const count = cartCount();
  $$("[data-cart-count]").forEach((el) => {
    el.textContent = count;
    el.classList.toggle("show", count > 0);
  });

  const list = $("#cartItems");
  if (!list) return;

  if (!cart.length) {
    list.innerHTML = `<div class="cart-empty"><div class="big">🎸</div><p>Coșul tău e gol.<br>Metal te așteaptă!</p></div>`;
  } else {
    list.innerHTML = cart
      .map(
        (i) => `
      <div class="cart-item">
        <div class="cart-item-thumb">${i.emoji}</div>
        <div>
          <div class="cart-item-name">${i.name}</div>
          <div class="cart-item-meta">${i.size ? "Mărime " + i.size + " · " : ""}${fmt(i.price)} / buc</div>
          <div class="qty-controls">
            <button class="qty-btn" data-dec="${i.key}" aria-label="Scade cantitatea">−</button>
            <span>${i.qty}</span>
            <button class="qty-btn" data-inc="${i.key}" aria-label="Crește cantitatea">+</button>
          </div>
        </div>
        <div style="text-align:right">
          <div class="cart-item-price">${fmt(i.price * i.qty)}</div>
          <button class="remove-item" data-rm="${i.key}">Șterge</button>
        </div>
      </div>`
      )
      .join("");
  }

  const total = $("#cartTotal");
  if (total) total.textContent = fmt(cartTotal());
  const checkoutBtn = $("#checkoutBtn");
  if (checkoutBtn) checkoutBtn.disabled = !cart.length;
}

/* ---------- Drawer coș ---------- */
function openCart() {
  $(".cart-overlay")?.classList.add("show");
  $(".cart-drawer")?.classList.add("show");
  document.body.style.overflow = "hidden";
}
function closeCart() {
  $(".cart-overlay")?.classList.remove("show");
  $(".cart-drawer")?.classList.remove("show");
  document.body.style.overflow = "";
}

document.addEventListener("click", (e) => {
  const t = e.target;
  if (t.closest("[data-open-cart]")) { openCart(); return; }
  if (t.closest("[data-close-cart]") || t.classList.contains("cart-overlay")) { closeCart(); return; }

  const inc = t.closest("[data-inc]");
  if (inc) return changeQty(inc.dataset.inc, 1);
  const dec = t.closest("[data-dec]");
  if (dec) return changeQty(dec.dataset.dec, -1);
  const rm = t.closest("[data-rm]");
  if (rm) return removeItem(rm.dataset.rm);

  const add = t.closest("[data-add]");
  if (add) {
    const id = add.dataset.add;
    const p = PRODUCTS.find((x) => x.id === id);
    let size = null;
    if (p && p.sizes.length) {
      const select = $(`select[data-size-for="${id}"]`);
      size = select ? select.value : "M";
    }
    addToCart(id, size);
    add.classList.add("added");
    add.textContent = "✔ Adăugat";
    setTimeout(() => { add.classList.remove("added"); add.textContent = "Adaugă în coș"; }, 1400);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeCart();
});

/* ---------- Checkout: formular comandă → mesaj ---------- */
function initCheckout() {
  const form = $("#checkoutForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!cart.length) return;

    const data = new FormData(form);
    const lines = cart.map(
      (i) => `• ${i.qty} x ${i.name}${i.size ? " (mărime " + i.size + ")" : ""} — ${fmt(i.price * i.qty)}`
    );
    const message =
      `Comandă RoRock\n\n` +
      `Nume: ${data.get("nume")}\n` +
      `Telefon: ${data.get("telefon")}\n` +
      `Email: ${data.get("email")}\n` +
      `Adresă livrare: ${data.get("adresa")}\n` +
      `Metodă: ${data.get("livrare")}\n\n` +
      `Produse:\n${lines.join("\n")}\n\n` +
      `Total: ${fmt(cartTotal())}`;

    const phone = form.dataset.whatsapp; // numărul magazinului, setat pe pagină
    if (phone) {
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
    } else {
      const mail = "rorock.sibiu@gmail.com";
      window.location.href = `mailto:${mail}?subject=${encodeURIComponent("Comandă RoRock")}&body=${encodeURIComponent(message)}`;
    }
    showToast("Comanda a fost pregătită! Verifică mesajul generat.");
  });
}

/* ============================================================
   Pagini de produse: randare + filtre
   ============================================================ */
function renderProducts(catFilter = "all", originFilter = "all") {
  const grid = $("#productGrid");
  if (!grid) return;

  const items = PRODUCTS.filter(
    (p) =>
      (catFilter === "all" || p.cat === catFilter) &&
      (originFilter === "all" || p.origin === originFilter)
  );
  grid.innerHTML = items
    .map(
      (p, idx) => `
    <article class="product-card reveal" style="transition-delay:${(idx % 3) * 0.08}s">
      <div class="product-img">
        ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ""}
        <span aria-hidden="true">${p.emoji}</span>
      </div>
      <div class="product-body">
        <span class="product-band">${CAT_NAMES[p.cat] || p.cat} · ${p.band}${p.origin === "RO" ? " · 🇷🇴" : " · 🌍"}</span>
        <h3 class="product-name">${p.name}</h3>
        ${p.sizes.length ? `
        <select class="size-select" data-size-for="${p.id}" aria-label="Alege mărimea">
          ${p.sizes.map((s) => `<option value="${s}">Mărime ${s}</option>`).join("")}
        </select>` : ""}
        <div class="product-foot">
          <div class="product-price">${fmt(p.price)}</div>
          <button class="add-btn" data-add="${p.id}">Adaugă în coș</button>
        </div>
      </div>
    </article>`
    )
    .join("");

  grid.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
}

/* Filtre combinate: categorie (data-cat-filter) + origine (data-origin-filter) */
function initFilters() {
  const state = { cat: "all", origin: "all" };

  function apply() {
    // grupul de categorii: doar un buton activ
    $$("[data-cat-filter]").forEach((b) =>
      b.classList.toggle("active", b.dataset.catFilter === state.cat)
    );
    // grupul de origine: doar un buton activ
    $$("[data-origin-filter]").forEach((b) =>
      b.classList.toggle("active", b.dataset.originFilter === state.origin)
    );
    renderProducts(state.cat, state.origin);
  }

  $$("[data-cat-filter]").forEach((btn) =>
    btn.addEventListener("click", () => {
      state.cat = btn.dataset.catFilter;
      apply();
    })
  );
  $$("[data-origin-filter]").forEach((btn) =>
    btn.addEventListener("click", () => {
      state.origin = btn.dataset.originFilter;
      apply();
    })
  );
}

/* ============================================================
   Pagina Magazin: status deschis/închis
   ============================================================ */
function initOpenStatus() {
  const el = $("#openStatus");
  if (!el) return;

  // Program real: L și M închis, Miercuri–Sâmbătă 12–19, Duminică închis
  const hours = { 0: null, 1: null, 2: null, 3: [12, 19], 4: [12, 19], 5: [12, 19], 6: [12, 19] };
  const days = ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"];
  const now = new Date();
  const d = now.getDay();
  const h = now.getHours() + now.getMinutes() / 60;
  const today = hours[d];

  const open = today && h >= today[0] && h < today[1];
  el.className = "open-status " + (open ? "open" : "closed");
  el.innerHTML = `<span class="dot"></span>${open ? "Deschis acum" : "Închis acum"}`;

  const row = $(`[data-day="${d}"]`);
  if (row) row.classList.add("today");
}

/* ============================================================
   Hartă Google: se încarcă doar după click pe "Deschide harta"
   (așa IP-ul vizitatorului nu pleacă către Google fără acord)
   ============================================================ */
function initMapConsent() {
  const btn = $("#loadMapBtn");
  const consent = $("#mapConsent");
  const wrap = $("#mapWrap");
  if (!btn || !consent || !wrap) return;

  btn.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.src =
      "https://maps.google.com/maps?cid=3225179046934812138&hl=ro&output=embed";
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    iframe.title = "Harta magazinului RoRock";
    iframe.allowFullscreen = true;
    wrap.appendChild(iframe);
    consent.remove();
  });
}

/* ============================================================
   Inițializare la încărcare
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderCart();
  initCheckout();
  initOpenStatus();
  initMapConsent();

  // Pagina de magazin: filtre + randare produse
  if ($("#productGrid")) {
    initFilters();
    renderProducts();
  }
});
