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
        <a href="konto.html" class="text-reset" aria-label="Konto użytkownika"><i class="bi bi-person-circle fs-5"></i></a>
        <a href="koszyk.html" class="text-reset position-relative me-2 me-lg-0" aria-label="Koszyk zakupowy">
          <i class="bi bi-cart3 fs-5"></i>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style="font-size: 0.65rem;">2<span class="visually-hidden">produkty w koszyku</span></span>
        </a>
        <button aria-controls="navMenu" aria-expanded="false" aria-label="Pokaż lub ukryj menu" class="navbar-toggler ms-2" data-bs-target="#navMenu" data-bs-toggle="collapse" type="button">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse order-lg-2" id="navMenu">
        <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-2 pe-lg-4">
          <li class="nav-item"><a class="nav-link" href="index.html#o-nas">O nas</a></li>
          <li class="nav-item"><a class="nav-link" href="sklep.html">Sklep</a></li>
          <li class="nav-item"><a class="nav-link nav-link--blog" href="blog.html"><i aria-hidden="true" class="bi bi-journal-text me-1"></i>Blog</a></li>
          <li class="nav-item"><a class="nav-link" href="index.html#kontakt">Kontakt</a></li>
        </ul>
      </div>
    </div>
  </nav>
</header>`;

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
          <a href="index.html#o-nas">O nas</a> · <a href="sklep.html">Sklep</a> · <a href="index.html#kontakt">Kontakt</a> · <a href="blog.html">Blog</a>
        </nav>
        <a class="back-top mt-3" href="index.html#hero"><i aria-hidden="true" class="bi bi-arrow-up"></i> Do góry</a>
      </div>
    </div>
    <hr>
    <p class="copyright mb-0">© <span id="year">${new Date().getFullYear()}</span> Reksie i Azorki. Wszelkie prawa zastrzeżone.</p>
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
      if (blog) {
        blog.classList.add("active");
        blog.setAttribute("aria-current", "page");
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }

  // Funkcje do działania nawigacji (rozwijanie/zwijanie) i aktualizacji roku
  setTimeout(() => {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const nav = document.getElementById('mainNav');
    if(nav) {
      const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
      window.addEventListener('scroll', onScroll); 
      onScroll();
    }
  }, 100);
})();