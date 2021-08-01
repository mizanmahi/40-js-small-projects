const imgContainer = document.querySelector(".img");
const image = document.querySelector("img");

const ranges = document.querySelectorAll(".range");

ranges.forEach((range) =>
   range.addEventListener("change", update)
);

ranges.forEach((range) =>
   range.addEventListener("mousemove", update) // needed to instant update
);

function update () {
   if (this.name === "spacing") {
      imgContainer.style.borderWidth = `${this.value}px`;
   } else if (this.name === "blur") {
      image.style.filter = `blur(${this.value}px)`;
   }else if(this.name === "color"){
      document.documentElement.style.setProperty(`--${this.name}`, this.value)
   }
}