const toDoForm = dc.getElementById("todo-form");
const toDoList = dc.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY ="todos"

let toDos = [];


function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


// function delToDoos() {
//   localStorage.removeItem(TODOS_KEY)
// }


function delToDo(event) {
  const lifather = event.target.parentElement;
  lifather.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(lifather.id));
  saveToDos()
}

function paintToDo(newTodo){
  const li = dc.createElement("li");
  li.id = newTodo.id
  const span = dc.createElement("span");
  span.innerText = newTodo.text;
  const button = dc.createElement("button");
  button.innerText = "X"
  button.addEventListener("click", delToDo)
  // button.addEventListener("click", delToDoos)
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}


function todosub(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text:newTodo,
    id:Date.now()
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", todosub);

// 연습용
// function sayHello2(item) {
//   cl.log("this is the turn of", item);
// }

const saveToDoos = localStorage.getItem(TODOS_KEY)

if(saveToDoos !== null) {
  const parsedToDos = JSON.parse(saveToDoos)
  //연습용// parsedToDos.forEach((item) => cl.log("this is the turn of ", item));
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

