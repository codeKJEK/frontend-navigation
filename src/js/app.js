// app js
window.addEventListener("DOMContentLoaded", () => {
  
  // MODE BUTTON CLICK - DARK MODE
  const modeButton = document.getElementById("dark-mode"),
  modeIcon =  modeButton.querySelector(".bx");

  function enableDarkMode() {
    document.body.classList.add("dark-mode");
    modeIcon.classList.remove("bx-moon");
    modeIcon.classList.add("bx-sun");
    modeIcon.setAttribute("aria-label", "light");
    document.querySelector(".app-banner__desktop-text").innerHTML = "light";
  }

  function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    modeIcon.classList.remove("bx-sun");
    modeIcon.classList.add("bx-moon");
    modeIcon.setAttribute("aria-label", "dark");
    document.querySelector(".app-banner__desktop-text").innerHTML = "dark";
  }

  modeButton.addEventListener("click", () => {
    if (!document.body.classList.contains("dark-mode")) {
      enableDarkMode();
    } else if (document.body.classList.contains("dark-mode")) {
      disableDarkMode();
    }
  });

});


