/********************
Part 1 project
Written by Priya Silwal
 Written in 13/05/2025
 Purpose: Part 1 project
 *******************/

//variables///

let userName;
let rentalDays;
let choice;
let array =["N/A", "BAC Mono",  "MX5" , "Mini", "Falcon", "Outlander", "Estima"];

//functions///

 function start () {
   greetUser();
    car();
    days();
    details();
 }

  function greetUser () {
   alert("Welcome to Rob’s rentals!");
   userName = prompt("Before we start, can you please enter your name?");
  }
 
  function car () {
  choice = prompt("Hi " + userName + "!\nHow many seats do you need in your car?");
      alert( "I think you might be interested in buying " + array[choice] + ".");
  }
 
  function days () {
   rentalDays = prompt("For how long do you want to rent the car?");
  }

  function details() {
   prompt("You have rented " + array[choice] + " for " + rentalDays + " days.\nYour total cost is $" + (rentDays * choice) + ".");
}
 
 