"use strict";

// app js
window.addEventListener("DOMContentLoaded", function () {
  // MODE BUTTON CLICK - DARK MODE
  var modeButton = document.getElementById("dark-mode"),
      modeIcon = modeButton.querySelector(".bx");
  modeButton.addEventListener("click", function () {
    if (!document.body.classList.contains("dark-mode")) {
      document.body.classList.add("dark-mode");
      modeIcon.classList.remove("bx-moon");
      modeIcon.classList.add("bx-sun");
      document.querySelector(".app-banner__button-text").innerHTML = "light";
    } else if (document.body.classList.contains("dark-mode")) {
      document.body.classList.remove("dark-mode");
      modeIcon.classList.remove("bx-sun");
      modeIcon.classList.add("bx-moon");
      document.querySelector(".app-banner__button-text").innerHTML = "dark";
    }
  });
});