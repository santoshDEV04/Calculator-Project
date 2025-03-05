let string = "";

let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerHTML;

    if (value === "C") {
      string = "";
      document.querySelector(".input").value = string;
    } else if (value === "=") {
      try {
        string = Function('"use strict"; return (' + string + ')')();
        document.querySelector(".input").value = string;
      } catch {
        document.querySelector(".input").value = "Error";
        string = "";
      }
    } else {
      string += value;
      document.querySelector(".input").value = string;
    }
  });
});


setTimeout(() => {
  const heading = document.getElementById("floating-text");
  if (heading) heading.style.animation = "none";
}, 3000);


function RandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function changeGradient() {
  const color1 = RandomColor();
  const color2 = RandomColor();
  const angle = Math.floor(Math.random() * 360);
  document.body.style.background = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
}


// setInterval(changeGradient, 4000);


const ToggleButton = document.getElementById("theme-toggle");
const CurrentTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", CurrentTheme);

ToggleButton.addEventListener("click", () => {
  let theme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
});
