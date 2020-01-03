const menuBtn = $(".menu-btn");
const menu = $(".menu");
const menuNav = $(".menu-nav");
const menuBranding = $(".menu-branding");

const navItems = document.querySelectorAll(".nav-item");

let showMenu = false;

menuBtn.on("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.addClass("close");
    menu.addClass("show");
    menuNav.addClass("show");
    menuBranding.addClass("show");
    navItems.forEach(function(item) {
      $(item).addClass("show");
    });

    showMenu = true;
  } else {
    menuBtn.removeClass("close");
    menu.removeClass("show");
    menuNav.removeClass("show");
    menuBranding.removeClass("show");
    navItems.forEach(function(item) {
      $(item).removeClass("show");
    });

    showMenu = false;
  }
}
