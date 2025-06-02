///variables//

const array = ["N/A", "Solo Hoverpod", "Smart Car", "Mazda RX-8", "Toyota Camry", "Honda CR-V", "Chevrolet Suburban", "Mercedes-Benz Sprinter", "Ford Transit", "Toyota HiAce"];


let userName;
let rentalDays;
let numberOfSeats;
let carPrice;
let insurance;

//functions//

function start() {
    greetUser();
    if (userName === null) return;


    numberOfSeats = seats();
    if (numberOfSeats === null) return; 


    rentalDays = days();
     if (rentalDays === null) return;

    details();
}
   
 //Greets the user and collects their names//
  function greetUser () {
   alert("Welcome to Rob’s rentals!");
   userName = prompt("What's your name?");
   
    // Validate name input
    while (userName === "" || !isNaN(userName)) {
        userName = prompt("Invalid input. Please enter a valid name.");
  }
  if (userName == null) {
    return;
  }
}



  //Asks for number of seates needed and suggests a car//
function seats () {
  numberOfSeats = prompt("Hi " + userName + "!\nHow many seats do you need in your car?");

  
  if (numberOfSeats === null) return;

  while (numberOfSeats === "" || isNaN(numberOfSeats) || numberOfSeats <= 0 || numberOfSeats > 9) {
    numberOfSeats = prompt("Invalid input. Please enter a valid number between 1 to 9.");
    if (numberOfSeats === null) return; 
  }
}

  function days () {
   rentalDays = prompt("For how long do you want to rent the car?");
   while (rentalDays === "" || isNaN(rentalDays) || rentalDays<=0) {
        rentalDays = prompt("Invalid input. Please enter a valid input.");
  }
}
 alert(userName + numberOfSeats + rentalDays);  