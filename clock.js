const clockContainer = document.querySelector(".js-clock"),
  clockTitle = document.querySelector("h1"),
  dateTitle = document.querySelector("h2");

const days = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];

function getTime() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dateDay = date.getDate();
  const day = date.getDay();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  dateTitle.innerText = `${year}년 ${month}월 ${dateDay}일 ${days[day]}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
