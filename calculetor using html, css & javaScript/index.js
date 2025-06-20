const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    const expression = display.value;
    let result = 0;

    let operatorFound = false;
    let num1 = "";
    let num2 = "";
    let operator = "";

    for(let i = 0; i < expression.length; i++){
        const char = expression[i];

        if(!operatorFound && (char === '+' || char === '-' || char === '*' || char === '/')) {
            operator = char;
            operatorFound = true;
        } 
        else if(!operatorFound){
            num1 += char;
        } 
        else{
            num2 += char;
        }
    }

    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if(isNaN(a) || isNaN(b) || operator === ""){
        display.value = "Invalid Input";
        return;
    }

    if(operator === '+'){
        result = a + b;
    } 
    else if(operator === '-'){
        result = a - b;
    } 
    else if(operator === '*'){
        result = a * b;
    } 
    else if(operator === '/'){
        if(b === 0){
        display.value = "Cannot divide by 0";
        return;
    }
    result = a / b;
    }

  display.value = result;
}



function deleteLast(){
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}



