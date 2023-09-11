const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const colorText = document.querySelector(".color");

btn.addEventListener("click", () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[randomInt()];
  }

  colorText.textContent = color;
  document.body.style.backgroundColor = color;
});

function randomInt() {
  return Math.floor(hex.length * Math.random());
}
