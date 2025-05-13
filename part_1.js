/********************
Part 1 project
Written by Priya Silwal
 Written in 13/05/2025
 Purpose: Part 1 project
 *******************/

let userName;
let cost =0;
let days = ["1,2,3,4,5,6,7,8,9,10"];
let array =["BAC Mono, MX5, Mini,Falcon, Outlander, Estima"];

 function start () {
    userName = askUserName();
    choice = seats();
 }

 askUserName();
 seats();

  function askUserName ()  {
alert("Welcome to Rob’s rentals!");
  userName = prompt("What is your name?");
 }

 function seats () {
let choice = prompt("Hi " + userName + ".\nHow many seats do you need in your car?");
  let array =["BAC, Mono, MX5, Mini,Falcon, Outlander, Estima"];
  alert( "I think you might be interested in buying" + array[choice]);
 }
 