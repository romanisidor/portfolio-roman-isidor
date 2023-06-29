document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');
  const sidebar = document.querySelector(".mobile_sidebar");
  const hamburger = document.querySelector(".navbar__burguer-button");
  let sidebarOpen = false;
  hamburger.addEventListener("click", () => {
    if (!sidebarOpen) {
      sidebar.style.left = "0";
      sidebarOpen = true;
    } else {
      sidebar.style.left = "-100%";
      sidebarOpen = false;
    }
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      sidebar.style.left = "-100%";
      sidebarOpen = false;
    });
  });
});

