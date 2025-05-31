/********************
Part 1 project
Written by Priya Silwal
 Written in 13/05/2025
 Purpose: Part 1 project
 *******************/

//Variables//

const array = ["N/A", "Solo Hoverpod", "Smart Car", "Mazda RX-8", "Toyota Camry", "Honda CR-V", "Chevrolet Suburban", "Mercedes-Benz Sprinter", "Ford Transit", "Toyota HiAce"];

let userName;
let rentalDays;
let numberOfSeats;
let carPrice;
let insurance;

//functions//

//Starts the rental process//
 function start () {
   greetUser();
    car();
    days();
    details();
 }

 //Greets the user and collects their names//
  function greetUser () {
   alert("Welcome to Rob’s rentals!");
   userName = prompt("What's your name?");
    
    // Validate name input
    while (userName.trim() === "" || !isNaN(userName)) {
        userName = prompt("Invalid input. Please enter a valid name.");
  }
  if (userName == null) {
    return;
  }
}
 
  //Asks for number of seates needed and suggests a car//
  function car () {
  numberOfSeats = prompt("Hi " + userName + "!\nHow many seats do you need in your car?");
     while ( numberOfSeats== " " || isNaN(numberOfSeats) || numberOfSeats<=0) {
        numberOfSeats = prompt("Invalid input. Please enter a valid input.\nPlease enter a number between 1 to 9.");
  }
   while (numberOfSeats>9) {
    numberOfSeats = prompt("Sorry, we don't have a car more than 9 seats\nPlease enter a number between 1 to 9.");
   }
      alert( "I think you might be interested in buying " + array[numberOfSeats] + ".");
 if (numberOfSeats == null){
    return;
  }
  }

  //Collects rental duration//
  function days () {
   rentalDays = prompt("For how long do you want to rent the car?");
   while (rentalDays.trim() === "" || isNaN(rentalDays) || rentalDays<=0) {
        rentalDays = prompt("Invalid input. Please enter a valid input.");
  }
   if (rentalDays == null) {
    return;
  }
}

  //Display rental details with cost//
function details() {
    insurance = prompt("Do you need insurance coverage for your rental? (yes/no)");

    // Validate input until the user enters "yes" or "no"
    while (insurance=== "yes" || insurance=== "no") {
        insurance = prompt("Invalid input. Please enter 'yes' or 'no'.");
    }

    let insuranceCost = 0; // Default insurance cost

    // Apply insurance cost if the user chooses "yes"
    if (insurance === "yes") {
        insuranceCost = rentalDays * 15; // $15 per day
        carPrice= insuranceCost + (numberOfSeats*10);
    } else {
        insuranceCost = 0; // No insurance cost
        carPrice = numberOfSeats*10;
    }

   alert("So, "+ userName+" have rented " + array[numberOfSeats] + " for " + rentalDays + " days.\nYour insurance cost is $" + insuranceCost + ".\nYour total cost is "+ carPrice);
}