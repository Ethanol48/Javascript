display = document.querySelector(".display__input");

const array = ["AC", "C", "/", "*", "-", "+", "="];
const operators = ["/", "*", "-", "+"];

let var1 = 0;
let ope;
let var2 = 0;

function handleOperation(operator) {
  var1 = parseInt(display.innerHTML);
  display.innerHTML = "0";

  switch (operator) {
    case "/":
      ope = "/";
      break

    case "*":
      ope = "mult";
      console.log("multiplication1")
      break

    case "-":
      ope = "-";
      break

    case "+":
      ope = "+";
      break
}
}

function for_display(num) {

  if (num.innerText === "=") {
    var2 = parseInt(display.innerHTML);

    console.log(var1, ope, var2)

    switch (ope) {

      case "/":
        console.log("division")
        display.innerHTML = var1 / var2;
        break

      case "mult":
        console.log("multiplication2")
        display.innerHTML = var1*var2;
        break

      case "-":
        console.log("soustraction")
        display.innerHTML = var1 - var2;
        break

      case "+":
        console.log("addition")
        display.innerHTML = var1 + var2;
        break
    }
  }

  if (array.includes(num.innerText)) {

    if (operators.includes(num.innerText)) {
      handleOperation(num.innerText);

    } else {

      switch (num.innerText) {
        case "AC":
          display.innerHTML = "0";
          var1 = 0;
          ope = "";
          var2 = 0;

        case "C":
          display.innerHTML = "0";
      }
    }

  } else if (num.innerText === "0") {
    if (display.innerHTML === "0") {
      display.innerHTML = "0";
    } else {
      display.innerHTML = display.innerHTML + num.innerText;
    }

  } else {
    if (display.innerHTML === "0") {
      display.innerHTML = num.innerText;
    } else {
      display.innerHTML = display.innerHTML + num.innerText;
    }
  }
}

const wrapper = document.querySelector('.buttons');

wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }

  for_display(event.target);

})
