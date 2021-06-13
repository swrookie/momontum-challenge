const body = document.querySelector("body");
const IMG_NUMBER = 2;

function handleImageLoad(img) {
  img.classList.add("bgImg");
  body.appendChild(img);
}

function paintImage(imgNum) {
  const img = new Image();
  img.src = `images/${imgNum}.jpg`;
  img.addEventListener("load", handleImageLoad(img));
  // img.classList.add("bgImg");
  // body.appendChild(img);
}

function genRandom() {
  const number = Math.ceil(Math.random() * IMG_NUMBER);

  return number;
}

function init() {
  const randNum = genRandom();
  paintImage(randNum);
}

init();
