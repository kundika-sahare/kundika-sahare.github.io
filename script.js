document.addEventListener("DOMContentLoaded", () => {

  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("nav ul li a");

  window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;

    sections.forEach((sec) => {
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (scrollY >= offset && scrollY < offset + height) {
        navLinks.forEach((link) => {
          link.parentElement.classList.remove("active");
          if (link.getAttribute("href") === "#" + id) {
            link.parentElement.classList.add("active");
          }
        });
      }
    });
  });

  // Hamburger menu
  const toggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-links");

  if (toggle && navMenu) {
    toggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll("#nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }

});
