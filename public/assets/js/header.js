document.addEventListener("DOMContentLoaded", () => {
  const header = document.createElement("header");
  header.id = "header";
  header.innerHTML = `
    <a class="logo" href="/">Since 1989</a>
    <button id="nav-toggle" aria-label="Open navigation menu">
      <span class="hamburger"></span>
      <span class="hamburger"></span>
      <span class="hamburger"></span>
    </button>
    <nav id="nav-menu">
      <a href="/">Home</a>
      <a href="/index.html#services-section">Services</a>
      <a href="/certificate.html">Certificates</a>
      <a href="/Contact.html">Contact Us</a>
    </nav>
  `;

  document.getElementById("header-placeholder").appendChild(header);

  // Hamburger menu functionality
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    navToggle.classList.toggle("open");
  });
});

