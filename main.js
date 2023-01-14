let input = document.querySelector("form input");
let content = document.querySelector(".box .content");
let button = document.getElementById("button");
let a = document.getElementById("link");


function append(name) {
  let header = document.createElement("h1");
  let text = document.createTextNode(name);
  header.appendChild(text);
  content.prepend(header);
  a.style.display = "block";
}
a.onclick = function () {
  content.innerHTML = "";
}
button.addEventListener("click", function generateName(e) {
  e.preventDefault();
  let name = input.value;
  append(name);

})


const background = document.body;
const getRandomNumber = (maxNum) => {
  return Math.floor(Math.random() * maxNum);
};
const getRandomColor = () => {
  const h = getRandomNumber(360);
  const s = getRandomNumber(100);
  const l = getRandomNumber(100);
  return `hsl(${h}deg, ${s}%, ${l}%)`;
};
const setBackgroundColor = () => {
  const randomColor = getRandomColor();
  background.style.backgroundColor = randomColor;
  background.style.color = randomColor;
};

let randomButton = document.getElementById("random");

randomButton.onclick = function () {
  document.body.innerHTML = "";
  setBackgroundColor();
  setInterval(() => {
    setBackgroundColor();
  }, 1000);
}
