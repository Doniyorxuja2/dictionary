const toggle = document.querySelector(".toggle");
const body = document.querySelector("body");
const toggleY = document.querySelector(".toggleY");

const asosiyFont = document.querySelector("#asosiy-fond");
const sansSerif = document.querySelector("#sans-serif");
const serif = document.querySelector("#serif");
const mono = document.querySelector("#mono");

mono.addEventListener("click", () => {
  body.style.fontFamily = "Inconsolata";
  asosiyFont.textContent = "Mono";
});
serif.addEventListener("click", () => {
  asosiyFont.textContent = "Serif";
  body.style.fontFamily = "Lora";
});
sansSerif.addEventListener("click", () => {
  body.style.fontFamily = "Inter";
  asosiyFont.textContent = "Sans-Serif";
});

toggle.addEventListener("click", () => {
  body.classList.toggle("darkMode");
  toggleY.classList.toggle("toggleY-transform");
  
});

