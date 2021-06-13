const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  userQuestion = form.querySelector(".userQuestion"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSumit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreetings(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSumit);
}

function paintGreetings(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Welcome, ${text}!`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    userQuestion.hidden = false;
    askForName();
  } else {
    userQuestion.hidden = true;
    paintGreetings(currentUser);
  }
}

function init() {
  loadName();
}

init();
