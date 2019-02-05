let num1, num2, number, operation, checkDot;
number = "";
operation = "";
checkDot = 0;

const display = document.getElementById("display");
const display1 = document.getElementById("display1");

//event listeners
const buttons = document.querySelectorAll("button[class=num]");
console.log(buttons);
buttons.forEach((button) => {
    button.addEventListener("click", function(){
        getNum(button.innerHTML);
    } )
})
const btnads = document.querySelectorAll("button[class=adds]");
btnads.forEach((button) => {
    button.addEventListener("click", function(){
        let add = button.id;
        switch (add) {
            case "negPos":
                negPos(number);
                break;
            case "dot":
                    dot(number);
                    break;
        }
    })
})
 const buttons1 = document.querySelectorAll("button[class=func]");
 buttons1.forEach((button) => {
     button.addEventListener("click", function(e){
         display.textContent = "";
         num1 = number;
         number = "";
         operation += num1 + " " + button.innerHTML + " ";
         display1.textContent = operation;
         checkDot = 0;
     })
 })
 const equals = document.getElementById("equals");
 equals.addEventListener("click", function(){
     display.textContent = "";
     display1.textContent = "";
     num2 = number;
     operation += num2;
     display.textContent = parseFloat(parseFloat(eval(operation)).toPrecision(12));
     num1 = num2 = number = operation = "";
     checkDot = 0;
 })
 const clear = document.getElementById("clear");
 clear.addEventListener("click", function(){
     num1 = "";
     num2 = "";
     number = "";
     operation = "";
     display.textContent = "";
     display1.textContent = "";
 })
//functions
function getNum(num){
    number += num;
    display.textContent = number;
}
function negPos(num){
    number = -num;
    display.textContent = -num;
}
function dot(num){
        if (checkDot == 0){
            number = num + ".";
            display.textContent = number;
            checkDot = 1;
        }
}
