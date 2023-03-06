const flight = "LH234";

const gopal = {
  name: "Gopal Das",
  passport: 23278367
}

const checkIn = (flightNum, passenger) => {
  flightNum = "NH654";
  passenger.name = "Mr" + passenger.name;

  if(passenger.passport === 23278367) {
    alert("Check In");
  } else {
    alert("Wrong password")
  }

}

checkIn(flight, gopal);
console.log(flight);
console.log(gopal);