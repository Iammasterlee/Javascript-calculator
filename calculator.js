let number1 = parseFloat(prompt('Enter first number'));
let operator = prompt('Enter either (*, / ,+, -,)');
let number2 = parseFloat(prompt('Enter the second number'));
let result;
if(operator === "*"){
    result = number1 * number2;
}else if(operator === "+"){
    result = number1 + number2;

}else if(operator=== "-"){
result =  result = number1 - number2;
} else if(operator === "/"){
    result = number1 / number2;
} else{
    prompt("Enter a valid operator")
}
alert('The result is: ' + result);