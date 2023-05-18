var x = [];
var display = document.querySelector("#display");
var buttons = Array.from(document.querySelectorAll(".first-layer"));

buttons.map( function(button){
  button.addEventListener("click", function() {
    switch (this.innerText) {
      case "+":
        display.value = display.textContent;
        x.push(display.value);
        x.push(this.innerText);
        display.textContent = "";
        console.log(x);
        break;
      case "-":
        display.value = display.textContent;
        x.push(display.value);
        x.push(this.innerText);
        display.textContent = "";
        console.log(x);
        break;
      case "*":
        display.value = display.textContent;
        x.push(display.value);
        x.push(this.innerText);
        display.textContent = "";
        console.log(x);
        break;
      case "/":
        display.value = display.textContent;
        x.push(display.value);
        x.push(this.innerText);
        display.textContent = "";
        console.log(x);
        break;
      case "=":
        x.push(display.textContent);
        let sum = "";
       for(var i=0;i<x.length;i++) {
         sum += x[i];
         };
        display.textContent = eval(sum);
        console.log(sum);
        clearArray();
        break;
      case "AC":
       display.textContent = "";
        break;
      case "DEL":
        display.textContent = display.textContent.slice(0, -1);
        break;
      case "C":
        display.textContent = "";
        break;
          default:
        if (display.innerText.length !=4) {
            display.textContent += this.innerText;
          }
        }
  })
})

function clearArray(array) {
  while (x.length > 0) {
    x.pop();
  }
}


for (var i = 0; i < buttons.length; i++) {
buttons[i].addEventListener("mouseover", function() {
    this.classList.add("selected");
});

buttons[i].addEventListener("mouseout", function() {
  this.classList.remove("selected");
});

buttons[i].addEventListener("click", function() {
  this.classList.toggle("done");
  });
}