// toggel class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger-menu di clik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// ketik di luar nav untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.targer)) {
    navbarNav.classList.remove("active");
  }
});
