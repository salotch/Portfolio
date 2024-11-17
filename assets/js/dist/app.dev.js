"use strict";

var sections = document.querySelectorAll(".section");
var secBtns = document.querySelectorAll(".controls");
var secBtn = document.querySelectorAll(".control");
var allSections = document.querySelectorAll(".main-content");

function pageTranstions() {
  //button click active class
  for (var i = 0; i < secBtn.length; i++) {
    secBtn[i].addEventListener("click", function () {
      var currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace("active-btn", "");
      this.className += " active-btn";
    });
  } //sections active class


  allSections[0].addEventListener("click", function (e) {
    var id = e.target.dataset.id;

    if (id) {
      //remove selected ele from the other btns
      secBtns.forEach(function (btn) {
        btn.classList.remove("active");
      });
      secBtn.forEach(function (btn) {
        btn.classList.remove("active");
      });
      e.target.classList.add("active"); //hide other sections

      sections.forEach(function (section) {
        section.classList.remove("active");
      });
      var element = document.getElementById(id);
      element.classList.add("active");
    }
  }); // toggle theme

  var papaSwitcher = document.getElementById("theme-btn");
  var switcher = document.getElementById("ball-switcher");
  papaSwitcher.addEventListener("click", function () {
    var element = document.body;

    if (switcher) {
      if (papaSwitcher.style.justifyContent == "flex-start") {
        element.classList.toggle("light-mode");
        papaSwitcher.style.setProperty("justify-content", "flex-end");
      } else {
        element.classList.toggle("light-mode");
        papaSwitcher.style.setProperty("justify-content", "flex-start");
      }
    }
  });
}

pageTranstions();