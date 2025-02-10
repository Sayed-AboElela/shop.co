
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("btn--mobile--menu");
    const closeButton = document.getElementById("btn--close");
    const navlist = document.getElementById("navlist");

    function toggleMenu() {
      navlist.classList.toggle("show--mobile--list");
    }

    menuButton.addEventListener("click", toggleMenu);
    closeButton.addEventListener("click", toggleMenu);

    const searchToggle = document.getElementById("search-toggle");
    const navbar = document.getElementById("navbar");

    searchToggle.addEventListener("click", function () {
      navbar.classList.toggle("search-active");
    });

  const prev = document.getElementById("prev-btn");
  const next = document.getElementById("next-btn");
  const list = document.getElementById("testimonial--list");
  const itemWidth = 300;

  prev.addEventListener("click", () => {
    console.log("click prev");

    list.scrollLeft -= itemWidth;
  });
  next.addEventListener("click", () => {
    list.scrollLeft += itemWidth;
  });
});
