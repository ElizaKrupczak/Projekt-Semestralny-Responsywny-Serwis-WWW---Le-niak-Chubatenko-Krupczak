(function () {
  var header = `
<header>
  <nav aria-label="Nawigacja główna" class="navbar navbar-expand-lg fixed-top site-nav" id="mainNav">
    <div class="container">
      <a class="navbar-brand brand" href="index.html#hero">
        <i aria-hidden="true" class="bi bi-heart-pulse-fill brand-icon"></i>
        Reksie <span class="brand-amp">i</span> Azorki
      </a>
      <div class="d-flex align-items-center order-lg-3 ms-auto gap-3">
        <a href="konto.html" class="text-reset nav-icon-link" aria-label="Konto użytkownika" title="Moje konto">
          <i class="bi bi-person-circle fs-4"></i>
        </a>
        <a href="koszyk.html" class="text-reset position-relative me-2 me-lg-0 nav-icon-link" aria-label="Koszyk zakupowy" title="Koszyk">
          <i class="bi bi-cart3 fs-4"></i>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cart-badge">2<span class="visually-hidden">produkty w koszyku</span></span>
        </a>
        <button aria-controls="navMenu" aria-expanded="false" aria-label="Pokaż lub ukryj menu" class="navbar-toggler ms-2" data-bs-target="#navMenu" data-bs-toggle="collapse" type="button">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse order-lg-2" id="navMenu">
        <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-2 pe-lg-4">
          <li class="nav-item"><a class="nav-link" href="index.html#o-nas">O nas</a></li>
          <li class="nav-item"><a class="nav-link" href="sklep.html">Sklep</a></li>
          <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
          <li class="nav-item"><a class="nav-link" href="kontakt.html">Kontakt</a></li>
        </ul>
      </div>
    </div>
  </nav>
</header>`;

  var footer = `
<footer class="site-footer">
  <div class="container">
    <div class="row g-4 pb-4">
      <!-- Kolumna 1: O marce -->
      <div class="col-lg-4 col-md-6">
        <a class="brand brand--footer" href="index.html#hero">Reksie <span class="brand-amp">i</span> Azorki</a>
        <p class="mt-3 mb-3 footer-desc">Tworzymy miejsce dla świadomych opiekunów psów, łącząc rzetelną wiedzę behawioralną ze sprawdzonymi akcesoriami. Wspieramy codzienne spacery, trening i zdrowie każdego czworonoga.</p>
        <div class="d-flex gap-2 footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener" aria-label="Odwiedź nasz profil na Facebooku"><i class="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener" aria-label="Odwiedź nasz profil na Instagramie"><i class="bi bi-instagram"></i></a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener" aria-label="Odwiedź nasz kanał na YouTube"><i class="bi bi-youtube"></i></a>
        </div>
      </div>

      <!-- Kolumna 2: Szybka nawigacja -->
      <div class="col-lg-2 col-md-6">
        <h3 class="footer-heading">Nawigacja</h3>
        <ul class="list-unstyled footer-links mb-0">
          <li><a href="index.html">Strona główna</a></li>
          <li><a href="index.html#o-nas">O nas</a></li>
          <li><a href="index.html#sklep">Oferta</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="kontakt.html">Kontakt</a></li>
        </ul>
      </div>

      <!-- Kolumna 3: Strefa klienta / Sklep -->
      <div class="col-lg-3 col-md-6">
        <h3 class="footer-heading">Strefa klienta</h3>
        <ul class="list-unstyled footer-links mb-0">
          <li><a href="sklep.html">Sklep</a></li>
          <li><a href="koszyk.html">Koszyk</a></li>
          <li><a href="konto.html">Moje konto</a></li>
          <li><a href="polityka-prywatnosci.html">Polityka prywatności</a></li>
        </ul>
      </div>

      <!-- Kolumna 4: Newsletter i kontakt -->
      <div class="col-lg-3 col-md-6">
        <h3 class="footer-heading">Newsletter i kontakt</h3>
        <p class="small footer-desc mb-2">Zapisz się, aby otrzymywać porady behawiorystów i zniżki do sklepu.</p>
        <form action="kontakt.html" class="mb-3">
          <div class="input-group input-group-sm">
            <input type="email" class="form-control" placeholder="Twój adres e-mail" aria-label="Adres e-mail do newslettera" required>
            <button class="btn btn-brand px-3" type="submit">Zapisz</button>
          </div>
        </form>
        <ul class="list-unstyled small footer-contact mb-0">
          <li class="mb-1"><i class="bi bi-envelope me-2"></i><a href="mailto:kontakt@reksieiazorki.pl">kontakt@reksieiazorki.pl</a></li>
          <li><i class="bi bi-telephone me-2"></i><a href="tel:+48500123456">+48 500 123 456</a></li>
        </ul>
      </div>
    </div>

    <!-- Dolny pasek prawny (Sub-footer) -->
    <div class="sub-footer d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 pt-3">
      <p class="mb-0 small">© <span id="year">${new Date().getFullYear()}</span> Reksie i Azorki sp. z o.o. Wszelkie prawa zastrzeżone.</p>
      <p class="mb-0 small">Autorzy projektu: Leśniak, Chubatenko, Krupczak</p>
      <div class="d-flex align-items-center gap-3 small">
        <a href="polityka-prywatnosci.html">Polityka prywatności</a>
        <a href="index.html#hero" aria-label="Wróć na górę strony"><i class="bi bi-arrow-up"></i> Do góry</a>
      </div>
    </div>
  </div>
</footer>`;

  function render() {
    var h = document.getElementById("site-header");
    var f = document.getElementById("site-footer");
    if (h) h.outerHTML = header;
    if (f) f.outerHTML = footer;

    var page = location.pathname.split("/").pop() || "index.html";

    if (page === "blog.html" || page === "single.html") {
      var blog = document.querySelector('#mainNav a[href="blog.html"]');
      if (blog) { blog.classList.add("active"); blog.setAttribute("aria-current", "page"); }
    } else if (page.includes("sklep") || page === "produkt.html" || page === "koszyk.html" || page === "zamowienie.html") {
      var sklep = document.querySelector('#mainNav a[href="sklep.html"]');
      if (sklep) { sklep.classList.add("active"); sklep.setAttribute("aria-current", "page"); }
    } else if (page === "kontakt.html") {
      var kontakt = document.querySelector('#mainNav a[href="kontakt.html"]');
      if (kontakt) { kontakt.classList.add("active"); kontakt.setAttribute("aria-current", "page"); }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }

  setTimeout(() => {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const nav = document.getElementById('mainNav');
    if (nav) {
      const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
      window.addEventListener('scroll', onScroll);
      onScroll();
    }
  }, 100);
})();