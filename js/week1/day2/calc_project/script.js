// Get the elements from the HTML page
let firstNumber = document.getElementById('first_number');
let secondNumber = document.getElementById('second_number');
let operator = document.getElementById('operatorSelect');
let calculateBtn = document.getElementById('send');
let timeDisplay = document.getElementById('currentTime');

// This function runs when you click the "=" button
function doCalculation() {
    // Get the numbers from the input boxes
    let num1 = Number(firstNumber.value);
    let num2 = Number(secondNumber.value);
    let op = operator.value;
    let answer;
    
    // Check if the inputs are really numbers
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers!");
        return; // Stop the function if numbers are not valid
    }
    
    // Do the math based on which operator is selected
    if (op === "+") {
        answer = num1 + num2;
    } else if (op === "-") {
        answer = num1 - num2;
    } else if (op === "*") {
        answer = num1 * num2;
    } else if (op === "/") {
        // Check if we're dividing by zero
        if (num2 === 0) {
            alert("Cannot divide by zero!");
            return;
        }
        answer = num1 / num2;
    } else if (op === "%") {
        answer = num1 % num2;
    }
    
    // Show the answer on the button
    calculateBtn.value = answer;
}

// This function shows the current time
function showTime() {
    let now = new Date();
    timeDisplay.innerHTML = now.toUTCString();
}

// Make the "=" button work when clicked
calculateBtn.onclick = doCalculation;

// Show the time when the page loads
showTime();

// Update the time every second
setInterval(showTime, 1000);

// Reset the button back to "=" when you change any input
firstNumber.oninput = function() {
    calculateBtn.value = "=";
};

secondNumber.oninput = function() {
    calculateBtn.value = "=";
};

operator.onchange = function() {
    calculateBtn.value = "=";
};



// // A function is a block of code only
// // executed whern it is called

// function sum(){
// let a = 12
// let b = 13
// let c = a + b
// console.log(c)
// }
// sum()

// function age_calculator(){
// current_year = 2026
// birth_year = 2000
// age = current_year - birth_year
// console.log(age)
// }

// age_calculator()



// function sum(a ,b){
// let c = a + b
// console.log(c)
// }
// sum(12, 23)
// sum(32,1)

//LOOP
// FOR LOOP 

const cars = ["BMW", "Volvo", "Toyota", "Ford"];

let name = "Miscellaneous"

let len_cars = cars.length //4
let len_name = name.length //13



for(let i = 0; i < len_name; i++){
    console.log(i + 1)
}

for(let j = 0; j < len_cars; j++){
    console.log(cars[j]) 
}

numbers = [3, 6, 9, 15, 23, 1, 2, 3, 4,5]


len_num = numbers.length

for(let i = 0; i < len_num; i++){
    if (numbers[i] % 3 == 0){
        console.log("Fizz " + numbers[i])
    }
}

// numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,10]
// console.log("This is an even number " + numbers[i])