"use strict";

let line = document.querySelector(".left__line"),
  txt = document.querySelector(".left__txt"),
  typeText = "Welcome",
  i = -1;

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    setTimeout(() => {
      setTimeout(() => {
        let timer = setInterval(() => {
          i++;
          console.log(i);
          txt.innerHTML += typeText[i];
          if (i === typeText.length - 1) clearInterval(timer);
        }, 150);
      }, 1000);
    }, 1400);
    let inline_timer = setInterval(() => {
      line.classList.toggle("inline");
      setTimeout(() => clearInterval(inline_timer), 5500);
    }, 400);
  }, 200);
});
