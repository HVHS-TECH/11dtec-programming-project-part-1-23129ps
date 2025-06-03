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
let array = ["N/A", "Solo Hoverpod", "Smart Car", "Mazda RX-8", "Toyota Camry", "Honda CR-V", "Chevrolet Suburban"];


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
   userName = prompt("Before we start, can you please enter your name?");
  }
 
  //Asks for number of seates needed and suggests a car//
  function car () {
  choice = prompt("Hi " + userName + "!\nHow many seats do you need in your car?");
      alert( "I think you might be interested in buying " + array[choice] + ".");
  }


  //Collects rental duration//
  function days () {
   rentalDays = prompt("For how long do you want to rent the car?");
  }


  //Display rental details with cost//
  function details() {
   alert("So, "+ userName+" have rented " + array[choice] + " for " + rentalDays + " days.\nYour total cost is $" + (rentalDays * choice * 10) + ".");
}
 
 

