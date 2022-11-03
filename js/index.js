import logo from "./logo.js";

// providing log0
let navlogo = document.getElementById("logo");
navlogo.innerHTML = logo();
let footerLogo = document.getElementById("footerLogo");
footerLogo.innerHTML = logo();

let drawer = document.getElementById("drawer");
let closeDrawer = document.getElementById("closeDrawer");
let hambergerManu = document.getElementById("hamberger");

hambergerManu.addEventListener("click", () => {
  drawer.style.display = "grid";
});

closeDrawer.addEventListener("click", () => {
  drawer.style.display = "none";
});

function changeNavBackground() {
  var windowHeight = window.scrollY;
  var nav = document.getElementById("navbar");
  var signbtn = document.getElementById("signin");
  var contactusBtn = document.getElementById("contactus");

  if (windowHeight > 60) {
    nav.style.color = "#717171";
    nav.style.backgroundColor = "white";
    signbtn.style.border = "1px solid gray";
    signbtn.style.color = "gray";
    contactusBtn.style.background = "rgb(255, 98, 164)";
    contactusBtn.style.color = "white";
  } else {
    nav.style.color = "white";
    nav.style.background = "local";
    signbtn.style.border = "1px solid white";
    signbtn.style.color = "white";
    contactusBtn.style.background = "white";
    contactusBtn.style.color = "#717171";
  }
}
window.addEventListener("scroll", changeNavBackground);

function reveal() {
  var revealleft = document.querySelectorAll(".revealleft");
  var revealright = document.querySelectorAll(".revealright");
  for (var i = 0; i < revealleft.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = revealleft[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      revealleft[i].classList.add("active");
    } else {
      revealleft[i].classList.remove("active");
    }
  }
  console.log(windowHeight);

  for (var j = 0; j < revealright.length; j++) {
    var windowHeight = window.innerHeight;
    var elementTop = revealright[j].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      revealright[j].classList.add("active");
    } else {
      revealright[j].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

function showBackToTop() {
  var windowHeight = window.scrollY;
  var backToTopButton = document.getElementById("upArrow");
  var viportHight = window.visualViewport.height;
  if (windowHeight > viportHight) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

window.addEventListener("scroll", showBackToTop);


