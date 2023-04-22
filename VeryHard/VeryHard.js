//Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"

alert("Hello! I am your simple calculator, please click okay and follow the next three prompts to use me.")
//Functions from last problem
function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}

//Define num1 and num2 as unser input from prompt
let num1 = prompt("Please enter your first number.");
let operator = prompt("Please enter one of the following operators: + (to add), - (to subtract), * (to mulitply) or / (to divide).");
let num2 = prompt("Please enter your second number.");
let result;//define result so it can be logged

//If else statement to active the correct function for the corresponding operator
if (operator === "+") {
  result = add(Number(num1), Number(num2));
} else if (operator === "-") {
  result = subtract(num1, num2);
} else if (operator === "*") {
  result = multiply(num1, num2);
} else if (operator === "/") {
  result = divide(num1, num2);
} else {//If an incorrect operator is inputted  
  console.log("I'm sorry, that is an invalid calculation");
  document.write("I'm sorry, that is an invalid calculation: ");//To display on html page
};



console.log(`${num1} ${operator} ${num2} = ${result}`);
document.write(`${num1} ${operator} ${num2} = ${result}`);//To display on html page
