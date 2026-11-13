(function () {
  const header = `
<header>
  <nav aria-label="Nawigacja główna" class="navbar navbar-expand-lg fixed-top site-nav" id="mainNav">
    <div class="container">
      <a class="navbar-brand brand" href="index.html#hero">
        <i aria-hidden="true" class="bi bi-heart-pulse-fill brand-icon"></i>
        Reksie <span class="brand-amp">i</span> Azorki
      </a>
      <button aria-controls="navMenu" aria-expanded="false" aria-label="Pokaż lub ukryj menu" class="navbar-toggler" data-bs-target="#navMenu" data-bs-toggle="collapse" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navMenu">
        <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-2">
          <li class="nav-item"><a class="nav-link" href="index.html#o-nas">O nas</a></li>
          <li class="nav-item"><a class="nav-link nav-link--blog" href="blog.html"><i aria-hidden="true" class="bi bi-journal-text me-1"></i>Blog</a></li>
          <li class="nav-item"><a class="nav-link" href="index.html#oferta">Oferta</a></li>
          <li class="nav-item"><a class="nav-link" href="sklep.html"><i aria-hidden="true" class="bi bi-bag me-1"></i>Sklep</a></li>
          <li class="nav-item"><a class="nav-link" href="index.html#kontakt">Kontakt</a></li>
          <li class="nav-item ms-lg-2 d-flex align-items-center gap-2">
            <a class="nav-icon" href="konto.html" aria-label="Moje konto"><i aria-hidden="true" class="bi bi-person-circle"></i></a>
            <a class="nav-icon position-relative" href="koszyk.html" aria-label="Koszyk, 2 produkty">
              <i aria-hidden="true" class="bi bi-cart3"></i>
              <span class="badge rounded-pill cart-badge">2</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>`;

  const footer = `
<footer class="site-footer">
  <div class="container">
    <div class="row g-4 align-items-start">
      <div class="col-md-6">
        <a class="brand brand--footer" href="index.html#hero">Reksie <span class="brand-amp">i</span> Azorki</a>
        <p class="mt-2 mb-0">Reksie i Azorki sp. z o.o.<br>ul. Psia 12, 00-001 Warszawa<br>NIP: 123-456-78-90 • REGON: 123456789</p>
      </div>
      <div class="col-md-6 text-md-end">
        <nav aria-label="Nawigacja w stopce">
          <a href="index.html#o-nas">O nas</a> · <a href="index.html#oferta">Oferta</a> · <a href="index.html#kontakt">Kontakt</a> · <a href="blog.html">Blog</a> · <a href="sklep.html">Sklep</a>
        </nav>
        <a class="back-top mt-3" href="index.html#hero"><i aria-hidden="true" class="bi bi-arrow-up"></i> Do góry</a>
      </div>
    </div>
    <hr>
    <p class="copyright mb-0">© <span id="year">${new Date().getFullYear()}</span> Reksie i Azorki. Wszelkie prawa zastrzeżone.</p>
  </div>
</footer>`;

  const h = document.getElementById("site-header");
  const f = document.getElementById("site-footer");
  if (h) h.outerHTML = header;
  if (f) f.outerHTML = footer;

  // Podświetl "Blog" na stronach bloga i artykułu
  const page = location.pathname.split("/").pop() || "index.html";
  const shopPages = ["sklep.html", "produkt.html", "koszyk.html", "zamowienie.html"];
  if (shopPages.includes(page)) {
    const shop = document.querySelector('#mainNav a[href="sklep.html"]');
    if (shop) { shop.classList.add("active"); shop.setAttribute("aria-current", "page"); }
  }
  if (page === "blog.html" || page === "single.html") {
    const blog = document.querySelector('#mainNav a[href="blog.html"]');
    if (blog) {
      blog.classList.add("active");
      blog.setAttribute("aria-current", "page");
    }
  }
})();
Nata
/*
 * Wspólne menu i stopka dla wszystkich stron.
 * Na każdej stronie potrzebne są:
 *   <div id="site-header"></div>  – tam, gdzie ma być menu
 *   <div id="site-footer"></div>  – tam, gdzie ma być stopka
 *   <script src="js/layout.js"></script>
 */
(function () {
  // Menu (pasek nawigacji)
  var header = `
<header>
  <nav aria-label="Nawigacja główna" class="navbar navbar-expand-lg fixed-top site-nav" id="mainNav">
    <div class="container">
      <a class="navbar-brand brand" href="index.html#hero">
        <i aria-hidden="true" class="bi bi-heart-pulse-fill brand-icon"></i>
        Reksie <span class="brand-amp">i</span> Azorki
      </a>
      <button aria-controls="navMenu" aria-expanded="false" aria-label="Pokaż lub ukryj menu" class="navbar-toggler" data-bs-target="#navMenu" data-bs-toggle="collapse" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navMenu">
        <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-2">
          <li class="nav-item"><a class="nav-link" href="index.html#o-nas">O nas</a></li>
          <li class="nav-item"><a class="nav-link nav-link--blog" href="blog.html"><i aria-hidden="true" class="bi bi-journal-text me-1"></i>Blog</a></li>
          <li class="nav-item"><a class="nav-link" href="index.html#oferta">Oferta</a></li>
          <li class="nav-item"><a class="nav-link" href="sklep.html"><i aria-hidden="true" class="bi bi-bag me-1"></i>Sklep</a></li>
          <li class="nav-item"><a class="nav-link" href="index.html#kontakt">Kontakt</a></li>
          <li class="nav-item ms-lg-2 d-flex align-items-center gap-2">
            <a class="nav-icon" href="konto.html" aria-label="Moje konto"><i aria-hidden="true" class="bi bi-person-circle"></i></a>
            <a class="nav-icon position-relative" href="koszyk.html" aria-label="Koszyk, 2 produkty">
              <i aria-hidden="true" class="bi bi-cart3"></i>
              <span class="badge rounded-pill cart-badge">2</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>`;

  // Stopka
  var footer = `
<footer class="site-footer">
  <div class="container">
    <div class="row g-4 align-items-start">
      <div class="col-md-6">
        <a class="brand brand--footer" href="index.html#hero">Reksie <span class="brand-amp">i</span> Azorki</a>
        <p class="mt-2 mb-0">Reksie i Azorki sp. z o.o.<br>ul. Psia 12, 00-001 Warszawa<br>NIP: 123-456-78-90 • REGON: 123456789</p>
      </div>
      <div class="col-md-6 text-md-end">
        <nav aria-label="Nawigacja w stopce">
          <a href="index.html#o-nas">O nas</a> · <a href="index.html#oferta">Oferta</a> · <a href="index.html#kontakt">Kontakt</a> · <a href="blog.html">Blog</a> · <a href="sklep.html">Sklep</a>
        </nav>
        <a class="back-top mt-3" href="index.html#hero"><i aria-hidden="true" class="bi bi-arrow-up"></i> Do góry</a>
      </div>
    </div>
    <hr>
    <p class="copyright mb-0">© <span id="year">${new Date().getFullYear()}</span> Reksie i Azorki. Wszelkie prawa zastrzeżone.</p>
  </div>
</footer>`;

  // Wstawia menu i stopkę na stronę
  function render() {
    var h = document.getElementById("site-header");
    var f = document.getElementById("site-footer");
    if (h) h.outerHTML = header;
    if (f) f.outerHTML = footer;

    // Podświetla "Blog" na stronie bloga i artykułu
    var page = location.pathname.split("/").pop() || "index.html";
    const shopPages = ["sklep.html", "produkt.html", "koszyk.html", "zamowienie.html"];
  if (shopPages.includes(page)) {
    const shop = document.querySelector('#mainNav a[href="sklep.html"]');
    if (shop) { shop.classList.add("active"); shop.setAttribute("aria-current", "page"); }
  }
  if (page === "blog.html" || page === "single.html") {
      var blog = document.querySelector('#mainNav a[href="blog.html"]');
      if (blog) {
        blog.classList.add("active");
        blog.setAttribute("aria-current", "page");
      }
    }
  }

  // Czeka, aż strona się wczyta, a potem wstawia menu i stopkę
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();