/********************
Part 1 project
Written by Priya Silwal
 Written in 13/05/2025
 Purpose: Part 1 project
 *******************/

let userName;
let cost =0;
let days = ["1,2,3,4,5,6,7,8,9,10"];
let array =["BAC Mono",  "MX5" , "Mini", "Falcon", "Outlander", "Estima"];

 function start () {
    rental();
 }
  function rental ()  {
alert("Welcome to Rob’s rentals!");
   userName = prompt("What is your name?");
  let array =["BAC Mono",  "MX5" , "Mini", "Falcon", "Outlander", "Estima"];
  let choice = prompt("Hi " + userName + ".\nHow many seats do you need in your car?");
  alert( "I think you might be interested in buying " + array[choice]);
   days = prompt("For how long do you want to rent the car?");
   prompt("You have rented " + array[choice] + " for " + days + " days\n Your total cost is" + days * choice);
 }

 
 