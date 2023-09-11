const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const colors1 = document.querySelector(".color");

btn.addEventListener("click", () => {
  const color = colors[randomInt()];

  document.body.style.backgroundColor = color;
  colors1.textContent = color;
});

function randomInt() {
  return Math.floor(colors.length * Math.random());
}
