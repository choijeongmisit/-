const cl = console
const dc = document


const clock = dc.querySelector("h2#clock")

// clock.innerText = "lalalala"

function sayHello() {
  cl.log("hello")
}
// 5000ms > 즉 5초마다 sayHello 함수 실행
// setInterval(sayHello, 5000);


// 5초 이후에 sayHello 함수 실행
// setTimeout(sayHello, 5000);


function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = (`${hours}:${minutes}:${seconds}`)
}
getClock()
setInterval(getClock, 1000);