/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
var hamburgerIcon = document.getElementById("hamburger");

hamburgerIcon.addEventListener("click", toggleMobileMenu);
function toggleMobileMenu() {
  var x = document.getElementById("navLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
