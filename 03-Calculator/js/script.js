// TODO fix bug, add "end of operation"

display = document.querySelector(".display__input");

const symbols = ["AC", "C", "/", "*", "-", "+", "="];
const operators = ["/", "*", "-", "+"];

let var1 = 0;
let ope;
let var2 = 0;

equal = false;

function handleOperation(operator) {
  var1 = parseInt(display.innerHTML);
  display.innerHTML = "0";

  switch (operator) {
    case "/":
      ope = "/";
      break

    case "*":
      ope = "*";
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

    if (equal === false) {
      var2 = parseInt(display.innerHTML);
    }

    console.log("pre operation", var1, ope, var2);

    switch (ope) {

      case "/":
        display.innerHTML = var1 / var2;
        break

      case "*":
        display.innerHTML = var1*var2;
        break

      case "-":
        display.innerHTML = var1 - var2;
        break

      case "+":
        display.innerHTML = var1 + var2;
        break
    }


    var1 = parseInt(display.innerHTML);

    console.log("post operation", var1, ope, var2)

  }

  if (symbols.includes(num.innerText)) {

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

  if (event.target.innerText !== "=") {
    equal = false;
  }

  for_display(event.target);

  if (event.target.innerText === "=") {
    equal = true;
  }

})
