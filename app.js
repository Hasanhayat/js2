

function nine(){


    // Task 1
    var city = prompt("Enter your city name:");
    if (city === "karachi") {
        alert("Welcome to the city of lights");
    }
    
    // Task 2
    var gender = prompt("Enter your gender:");
    if (gender === "male") {
        alert("Good Morning Sir");
    } else if (gender === "female") {
        alert("Good Morning Ma’am");
    }
    
    // Task 3
    var signalColor = prompt("Enter the traffic signal color:");
    if (signalColor === "red") {
        alert("Must Stop");
    } else if (signalColor === "yellow") {
        alert("Ready to move");
    } else if (signalColor === "green") {
        alert("Move now");
    }
    
    // Task 4
    var remainingFuel = prompt("Enter remaining fuel in litres:");
    if (remainingFuel < 0.25) {
        alert("Please refill the fuel in your car");
    }
    
    // Task 5
    // a
    var a = 4;
    if (++a === 5) {
        alert("Given condition for variable a is true");
    }
    
    // b
    var b = 82;
    if (b++ === 83) {
        alert("Given condition for variable b is true");
    }
    
    // c
    var c = 12;
    if (c++ === 13) {
        alert("Condition 1 is true");
    }
    if (c === 13) {
        alert("Condition 2 is true");
    }
    if (++c < 14) {
        alert("Condition 3 is true");
    }
    if (c === 14) {
        alert("Condition 4 is true");
    }
    
    // d
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost) {
        alert("The cost equals");
    }
    
    // e
    if (true) {
        alert("True");
    }
    if (false) {
        alert("False");
    }
    
    // f
    if ("car" < "cat") {
        alert("Car is smaller than cat");
    }
    
    // Task 7: 
    var secretNumber = 7;  
    var userGuess = Number(prompt("Guess the secret number (between 1 and 10):"));
    
    if (userGuess === secretNumber) {
        alert("Bingo! Correct answer");
    } else if (userGuess === secretNumber - 1 || userGuess === secretNumber + 1) {
        alert("Close enough to the correct answer");
    } else {
        alert("Wrong guess, try again!");
    }
    
    
    
    // Task 8: 
    function checkDivisibleBy3() {
        var number = prompt("Enter a number to check if it's divisible by 3:");
        
        if (number % 3 === 0) {
            alert(number + " is divisible by 3.");
        } else {
            alert(number + " is not divisible by 3.");
        }
    }
    checkDivisibleBy3();
    // Task 9: 
    function checkEvenOrOdd() {
        var number = prompt("Enter a number to check if it's even or odd:");
        
        if (number % 2 === 0) {
            alert(number + " is an even number.");
        } else {
            alert(number + " is an odd number.");
        }
    }
    
    checkEvenOrOdd();
    
    
    // Task 10: 
    function checkTemperature() {
        var temperature = prompt("Enter the current temperature:");
    
        if (temperature > 40) {
            alert("It is too hot outside.");
        } else if (temperature > 30) {
            alert("The Weather today is Normal.");
        } else if (temperature > 20) {
            alert("Today's Weather is cool.");
        } else if (temperature > 10) {
            alert("OMG! Today's weather is so Cool.");
        } else {
            alert("It's extremely cold today!");
        }
        
    }
    checkTemperature();
    
    
    document.querySelector("h1").innerText = "chap:11 complete";
    
    }
    
    
    function ten(){
    
    
    
    
    
    
    
    // Task 1: 
    function checkCharacter() {
        var char = prompt("Enter a character:");
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
    checkCharacter();
    
    // Task 2: 
    function compareIntegers() {
        var num1 = Number(prompt("Enter the first integer:"));
        var num2 = Number(prompt("Enter the second integer:"));
    
        if (num1 > num2) {
            alert(num1 + " is larger than " + num2);
        } else if (num2 > num1) {
            alert(num2 + " is larger than " + num1);
        } else {
            alert("Both numbers are equal.");
        }
    }
    compareIntegers();
    
    // Task 3: C
    function checkNumber() {
        var num = parseInt(prompt("Enter a number:"));
    
        if (num > 0) {
            alert("The number is positive.");
        } else if (num < 0) {
            alert("The number is negative.");
        } else {
            alert("The number is zero.");
        }
    }
    checkNumber();
    
    // Task 4: 
    function isVowel() {
        var char = prompt("Enter a character (length 1):");
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            alert("True, it's a vowel.");
        } else {
            alert("False, it's not a vowel.");
        }
    }
    isVowel();
    
    
    // Task 5:
    var correctPassword = "123"; 
    var userPassword = prompt("Enter your password:123");
    
    if (userPassword === "") {
        alert("Please enter your password");
    } else if (userPassword === correctPassword) {
        alert("Correct! The password you entered matches the original password.");
    } else {
        alert("Incorrect password");
    }
    
    // Task 6:
    var greeting;
    var hour = 13;
    
    if (hour < 18) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
    
    
    console.log(greeting); 
    
    // Task 7:
    var time = Number(prompt("Enter the time in 24-hour "));
    
    if (time >= 0 && time < 12) {
        alert("Good morning!");
    } else if (time >= 12 && time < 17) {
        alert("Good afternoon!");
    } else if (time >= 17 && time < 21) {
        alert("Good evening!");
    } else if (time >= 21 && time <= 23) {
        alert("Good night!");
    } else {
        alert("Invalid time format.");
    }
    
    
    document.querySelector("h1").innerText = "chap:13 complete";
    
    }
    
    
    