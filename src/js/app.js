window.addEventListener("DOMContentLoaded", () => {
  const modeButton = document.getElementById("dark-mode"),
  modeIcon =  modeButton.querySelector(".bx"),
  desktopText = document.querySelector(".app-banner__desktop-text");
  
  modeButton.addEventListener("click", () => {
    if (!document.body.classList.contains("dark-mode")) {
      enableDarkMode();
    } else if (document.body.classList.contains("dark-mode")) {
      disableDarkMode();
    }
  });

  function enableDarkMode() {
    document.body.classList.add("dark-mode");
    modeIcon.classList.remove("bx-moon");
    modeIcon.classList.add("bx-sun");
    modeIcon.setAttribute("aria-label", "light");
    desktopText.innerHTML = "light";
  }

  function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    modeIcon.classList.remove("bx-sun");
    modeIcon.classList.add("bx-moon");
    modeIcon.setAttribute("aria-label", "dark");
    desktopText.innerHTML = "dark";
  }
});


