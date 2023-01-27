num0 = document.getElementById("0");
num1 = document.getElementById("1");
num2 = document.getElementById("2");
num3 = document.getElementById("3");
num4 = document.getElementById("4");
num5 = document.getElementById("5");
num6 = document.getElementById("6");
num7 = document.getElementById("7");
num8 = document.getElementById("8");
num9 = document.getElementById("9");
plus = document.getElementById("plus");
minus = document.getElementById("minus");
multiply = document.getElementById("mult");
divide = document.getElementById("divide");
equals = document.getElementById("equal");
clear = document.getElementById("clear");


display = document.querySelector(".display__input");

function for_display(num) {

  if (num.innerText === "0") {
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



clear.addEventListener("click", function() {
  display.innerHTML = "0";
});

num0.addEventListener("click", function() {
  for_display(num0);

})

num1.addEventListener("click", function() {
  for_display(num1);
});

num2.addEventListener("click", function() {
  for_display(num2);
});

num3.addEventListener("click", function() {
  for_display(num3);
});

num4.addEventListener("click", function() {
  for_display(num4);
});

num5.addEventListener("click", function() {
  for_display(num5);
});

num6.addEventListener("click", function() {
  for_display(num6);
});

num7.addEventListener("click", function() {
  for_display(num7);
});

num8.addEventListener("click", function() {
  for_display(num8);
});

num9.addEventListener("click", function() {
  for_display(num9);
});
