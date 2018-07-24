function showSearch() {
  document.querySelector("#page-1").style.display = "";
  document.querySelector("#page-2").style.display = "none";
  document.querySelector("#page-3").style.display = "none";
}

function showMovie() {
  document.querySelector("#page-1").style.display = "none";
  document.querySelector("#page-2").style.display = "";
  document.querySelector("#page-3").style.display = "none";
}

function showFavorites() {
  document.querySelector("#page-1").style.display = "none";
  document.querySelector("#page-2").style.display = "none";
  document.querySelector("#page-3").style.display = "";
}
