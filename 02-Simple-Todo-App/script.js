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

    // task content
    task_content = document.createElement("div");
    task_content.classList.add("task-content");
    task_content.innerText = task;

    task_el.appendChild(task_content);

    // control
    const control = document.createElement("div")
    control.classList.add("control")

    // done button
    done = document.createElement("button")
    done.id = "done"
    done.classList.add("button-control")
    done.innerText = "✔️"
    done.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.classList.toggle("done")
    })
    control.appendChild(done)

    // done button
    erase = document.createElement("button")
    erase.id = "erase"
    erase.classList.add("button-control")
    erase.innerText = "🗑️"
    erase.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.remove()
    })

    control.appendChild(erase)

    task_el.appendChild(control)

    // append to DOM
    container.appendChild(task_el);

    input.value = ""

}

form.addEventListener("submit", addTask)
button_add.addEventListener('click', addTask)
button_clear.addEventListener('click', () => {
  container.innerHTML = ""
})

// const doneButton = document.querySelector("#done")
// console.dir(doneButton)

// doneButton.addEventListener("click", (e) => {

//     e.target.parentElement.classList.toggle("done")

//   })

// const eraseButton = document.querySelector("#erase")
// eraseButton.addEventListener("click", (e) => {

//     e.target.parentElement.remove()

// })
