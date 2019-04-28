// Tabbed Menu
function openMenu(evt, menuName) {
  let menuElements = document.getElementsByClassName("menu");

  for (let element of menuElements) {
     element.style.display = "none";
  }

  let tablinks = document.getElementsByClassName("tablink");

  for (let link of tablinks) {
     link.className = link.className.replace(" w3-red", "");
  }

  document.getElementById(menuName).style.display = "block";

  evt.currentTarget.firstElementChild.className += " w3-red";
}

document.getElementById("myLink").click();
