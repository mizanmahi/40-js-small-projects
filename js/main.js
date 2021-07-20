const btn = document.querySelector(".changebtn");
const flipBtn = document.querySelector(".flipbtn");
const colorEl = document.querySelector(".color");
const colorModeEl = document.querySelector(".color-mode");

let mode = "RGB";

flipBtn.addEventListener("click", () => {
   mode = mode === "RGB" ? "HEX" : "RGB";
   colorModeEl.innerText = mode; 
});

btn.addEventListener("click", changeColor);

function changeColor() {
   const randomColor = generateColor();

   document.body.style.backgroundColor = randomColor;
   colorEl.innerText = randomColor;
}

function getRandom(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateColor() {
   const red = getRandom(0, 255);
   const green = getRandom(0, 255);
   const blue = getRandom(0, 255);
   if (mode === "RGB") {
      return `rgb(${red},${green},${blue})`;
   } else {
      return RGBToHex(red, green, blue);
   }
}

function RGBToHex(r, g, b) {
   r = r.toString(16);
   g = g.toString(16);
   b = b.toString(16);

   if (r.length === 1) r = "0" + r;
   if (g.length === 1) g = "0" + g;
   if (b.length === 1) b = "0" + b;

   return "#" + r + g + b;
}
