

const loginForm = dc.querySelector("#login-form");
const loginInput = dc.querySelector("#login-form input");
const greeting = dc.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; //이건 그냥 이 string을 key에 집어넣기위한 용도//

const savedUsername = localStorage.getItem(USERNAME_KEY);
// cl.log(savedUsername)

if(savedUsername === null){
  // show the form // 
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginsub)
}else {
// 인사 나오고 히든클래스 지워서 h1 나오게만듬
  paintGreetings();
}

function paintGreetings(){
  const username = localStorage.getItem(USERNAME_KEY)
  greeting.innerText = `안농~😍 ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function loginsub(event) {
  event.preventDefault(); //기본동작 실행 x 
  const username = loginInput.value
  localStorage.setItem(USERNAME_KEY, username)
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings();
}
loginForm.addEventListener("submit", loginsub)