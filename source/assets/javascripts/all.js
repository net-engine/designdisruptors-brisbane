// This is where it all goes :)

// document.addEventListener("DOMContentLoaded", function(event) {
// });
function showMenu(e) {
  document.getElementsByClassName("js-menu")[0].classList.add("transformY-0");
  document.body.classList.add("overflow-hidden");
}

function hideMenu(e) {
  document.getElementsByClassName("js-menu")[0].classList.remove("transformY-0");
  document.body.classList.remove("overflow-hidden");
}
