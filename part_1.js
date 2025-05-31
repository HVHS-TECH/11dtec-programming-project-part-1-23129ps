/********************
Part 1 project
Written by Priya Silwal
 Written in 13/05/2025
 Purpose: Part 1 project
 *******************/

//Variables//

let userName;
let rentalDays;
let choice;
let array = ["N/A", "Solo Hoverpod", "Smart Car", "Mazda RX-8", "Toyota Camry", "Honda CR-V", "Chevrolet Suburban", "Mercedes-Benz Sprinter", "Ford Transit", "Toyota HiAce"];

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
    while (userName == null || userName.trim() === "" || !isNaN(userName)) {
        userName = prompt("Invalid input. Please enter a valid name.");
  }
}
 
  //Asks for number of seates needed and suggests a car//
  function car () {
  choice = prompt("Hi " + userName + "!\nHow many seats do you need in your car?");
     while (choice == null || choice.trim() === "" || isNaN(choice) || choice==0) {
        choice = prompt("Invalid input. Please enter a valid age.");
  }
      alert( "I think you might be interested in buying " + array[choice] + ".");

  }

  //Collects rental duration//
  function days () {
   rentalDays = prompt("For how long do you want to rent the car?");
   while (rentalDays == null || rentalDays.trim() === "" || isNaN(rentalDays) || rentalDays==0) {
        userAge = prompt("Invalid input. Please enter a valid age.");
  }
}

  //Display rental details with cost//
  function details() {
   alert("So, "+ userName+" have rented " + array[choice] + " for " + rentalDays + " days.\nYour total cost is $" + (rentalDays * choice * 10) + ".");
}