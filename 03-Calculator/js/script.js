;display = document.querySelector(".display__input");

const symbols = ["AC", "C", "/", "*", "-", "+", "="];
const operators = ["/", "*", "-", "+"];

let var1 = 0;
let ope;
let var2 = 0;

equal = false;

function handleOperation(operator) {
  var1 = parseFloat(display.innerHTML);
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
      var2 = parseFloat(display.innerHTML);
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


    var1 = parseFloat(display.innerHTML);

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

    if (equal === true) {
      equal = false;    // set the variable equal to false
      var1 = 0;         // set the variable var1 to 0
      var2 = 0;         // set the variable var2 to 0
      ope = "";         // set the variable ope to ""

      display.innerHTML = "0"; // set the display to 0
    }

    if (display.innerHTML === "0") {
      display.innerHTML = "0";
    } else {
      display.innerHTML = display.innerHTML + num.innerText;
    }

  } else {
    console.log("lknflaknflaknflanflkanlkf");


    if (equal === true) {
      display.innerHTML = "0";

      equal = false;    // set the variable equal to false
      var1 = 0;         // set the variable var1 to 0
      var2 = 0;         // set the variable var2 to 0
      ope = "";         // set the variable ope to ""

 // set the display to 0
    }

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

  if (event.target.innerText === "=") {
    equal = true;
  }

  // console.log("valor real", event.target.innerText);
  // console.log("testear igual", equal);

  if (event.target.innerText !== "=") {
    equal = false;
  }

})
