// Chapter 9-11 Tasks
function checkCity() {
    var city = document.getElementById("city").value.toLowerCase();
    if (city === "karachi") {
        alert("Welcome to the city of lights");
    } else {
        alert("Welcome to " + city);
    }
}

function checkGender() {
    var gender = document.getElementById("gender").value.toLowerCase();
    if (gender === "male") {
        alert("Good Morning Sir");
    } else if (gender === "female") {
        alert("Good Morning Ma'am");
    } else {
        alert("Good Morning!");
    }
}

function checkSignal() {
    var signal = document.getElementById("signal").value.toLowerCase();
    if (signal === "red") {
        alert("Must Stop");
    } else if (signal === "yellow") {
        alert("Ready to move");
    } else if (signal === "green") {
        alert("Move now");
    } else {
        alert("Invalid signal color");
    }
}

function checkFuel() {
    var fuel = document.getElementById("fuel").value;
    if (fuel < 0.25) {
        alert("Please refill the fuel in your car");
    } else {
        alert("You have enough fuel");
    }
}

function guessNumber() {
    var secretNumber = 7;
    var userGuess = parseInt(document.getElementById("secretNumber").value);
    if (userGuess === secretNumber) {
        alert("Bingo! Correct answer");
    } else if (userGuess === secretNumber - 1 || userGuess === secretNumber + 1) {
        alert("Close enough to the correct answer");
    } else {
        alert("Wrong guess, try again");
    }
}

// Chapter 12-13 Tasks
function checkCharacter() {
    var char = document.getElementById("char").value;
    var ascii = char.charCodeAt(0);
    
    if (ascii >= 48 && ascii <= 57) {
        alert("The input is a number.");
    } else if (ascii >= 65 && ascii <= 90) {
        alert("The input is an uppercase letter.");
    } else if (ascii >= 97 && ascii <= 122) {
        alert("The input is a lowercase letter.");
    } else {
        alert("The input is neither a number nor a letter.");
    }
}

function compareIntegers() {
    var num1 = parseInt(document.getElementById("int1").value);
    var num2 = parseInt(document.getElementById("int2").value);
    
    if (num1 > num2) {
        alert(num1 + " is larger than " + num2);
    } else if (num2 > num1) {
        alert(num2 + " is larger than " + num1);
    } else {
        alert("Both numbers are equal.");
    }
}

function checkNumber() {
    var num = parseInt(document.getElementById("number").value);
    
    if (num > 0) {
        alert("The number is positive.");
    } else if (num < 0) {
        alert("The number is negative.");
    } else {
        alert("The number is zero.");
    }
}

function isVowel() {
    var char = document.getElementById("vowel").value.toLowerCase();
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        alert("True, it's a vowel.");
    } else {
        alert("False, it's not a vowel.");
    }
}