/********************
 Part 1 project
Car Rental System
Written by Priya Silwal
Written on 13/05/2025
Purpose: Part 1 project
*******************/

// Variables //
const array = ["N/A", "Solo Hoverpod", "Smart Car", "Mazda RX-8", "Toyota Camry"];

let userName;
let rentalDays;
let numberOfSeats;

// Functions //
function start() {
    greetUser();
    numberOfSeats = seats();
    rentalDays = days();
    details();
}

// Greets the user and collects their name //
function greetUser() {
    alert("Welcome to Rob’s rentals!");
    userName = prompt("What's your name?");
    
    while (userName === "" || !isNaN(userName)) {
        userName = prompt("Invalid input. Please enter a valid name.");
    }
    if (userName == null) return;
}

// Asks for number of seats needed and suggests a car //
function seats() {
     numberOfSeats = prompt("Hi " + userName + "!\nHow many seats do you need in your car?");

    if (numberOfSeats === null) return null;

    while (numberOfSeats === "" || isNaN(numberOfSeats) || numberOfSeats < 1 || numberOfSeats > 9) {
        numberOfSeats = prompt("Invalid input. Please enter a valid number between 1 to 9.");
        if (numberOfSeats === null) return null;
    }

    numberOfSeats = Number(numberOfSeats);
      alert( "I think you might be interested in buying " + array[numberOfSeats] + ".");
    return numberOfSeats;
}

// Collects rental duration //
function days() {
    let inputDays = prompt("For how long do you want to rent the car?");
    
    if (inputDays === null) return null;

    while (inputDays === "" || isNaN(inputDays) || inputDays <= 0) {
        inputDays = prompt("Invalid input! Please enter a valid number of days.");
        if (inputDays === null) return null;
    }

    rentalDays = Number(inputDays);
    return rentalDays;
}

// Displays rental details with total cost //
function details() {
    let totalCost = rentalDays * numberOfSeats * 10;
    alert("So, "+ userName+" have rented " + array[numberOfSeats] + " for " + rentalDays + " days.\nYour total cost is $" + (rentalDays * numberOfSeats * 10) + ".");
}