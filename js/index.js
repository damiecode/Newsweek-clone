var navbar = document.getElementById('top-nav')
var menu = document.getElementById("bottom-nav");
var date = document.getElementById("date");
var logo = document.getElementById("logo");
var header = document.getElementById("nav-container");

const increaseWidth = () => {
  let width = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );

  if (width < 993) {
    navbar.style.position = "fixed";
    navbar.style.top = 0;
    logo.style.width = "25%";
    menu.style.visibility = "hidden";
    date.style.visibility = "hidden";
    date.style.position = "absolute";
  } else {
    navbar.style.position = "relative";
    nav.style.top = 100;
    logo.style.width = "40%";
    menu.style.visibility = "visible";
    date.style.visibility = "visible";
    date.style.position = "relative";
  }

  window.onresize = (event) => {
    increaseWidth();
  }
}
