function openMenu() {
  var popup = document.getElementById("popup");
  if (popup.style.display === "block") {
      popup.style.display = "none";
  } else {
      popup.style.display = "block";
  }
}

function closeMenu() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}
