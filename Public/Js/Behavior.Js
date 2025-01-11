const NavWrapper = document.getElementsByTagName("nav")[0];

function ShadowUnderNav() {
  if (window.scrollY >= 50) {
    NavWrapper.classList.add("shadow","fixed");
  } else {
    NavWrapper.classList.remove("shadow","fixed");
  }
}

addEventListener("scroll", ShadowUnderNav);
