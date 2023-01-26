const button_add = document.querySelectorAll("button")[0];
const button_clear = document.querySelectorAll("button")[1];
const input = document.querySelector("input");
// const body = document.querySelector('body')


let container = document.querySelector("#tasks");


const form = document.querySelector("#formo")

addTask = (e) => {

    e.preventDefault();

    const task = input.value;
    if (!task) {
      alert("Please fill the task");
      return
    }

    const task_el = document.createElement("div");
    task_el.classList.add("task");

    task_content = document.createElement("div");
    task_content.classList.add("task-content");
    task_content.innerText = task;

    task_el.appendChild(task_content);
    container.appendChild(task_el);

    input.value = ""

}

form.addEventListener("submit", addTask)
button_add.addEventListener('click', addTask)
button_clear.addEventListener('click', () => {
  container.innerHTML = ""

})

// let texto = input.value;

// function add_todo(texto); {

//   let template = <div class="ToDo">
//  <div class="texto">texto</div>
//    <div class="control">
//      <button>Done</button><button>Close</button>
//    </div>
//  </div>
//
//
// }

function getTemplate() {
  div = document.createElement("div")
  div.appendChild
}



//   let element = document.createElement("p")
//   element.innerText = input.value;
//   container.appendChild(element);

//   input.value = ""
// })
