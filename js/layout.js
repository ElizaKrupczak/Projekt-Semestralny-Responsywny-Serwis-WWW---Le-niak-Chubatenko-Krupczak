var header = `
<header>
  <nav aria-label="Nawigacja główna" class="navbar navbar-expand-lg fixed-top site-nav" id="mainNav">
    <div class="container">
      <a class="navbar-brand brand" href="index.html#top">
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
          <li class="nav-item"><a class="nav-link" href="index.html#oferta">Oferta</a></li>
          <li class="nav-item"><a class="nav-link" href="index.html#kontakt">Kontakt</a></li>
        </ul>
      </div>
    </div>
  </nav>
</header>`;