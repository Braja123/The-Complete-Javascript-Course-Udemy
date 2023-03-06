// // Function Declaration
// function calcAge(birthYear) {
//   return 2019 - birthYear;
// }

// const age1 = calcAge(1996);

// // Function Experssion
// const calcAge2 = function(birthYear) {
//   return 2022 - birthYear;
// }

// const age2 = calcAge2(1996);
// console.log(age1, age2);

// // Arrow Function
// const calAge3 = birthYear => 2025 - birthYear;
// let age3 = calAge3(1996);
// console.log(age3);

// const cutFruits = function(fruits) {
//   return fruits * 4;
// }

// const fruitProcessor = function(apples, oranges) {
//   let appCut = cutFruits(apples);
//   let ornCut = cutFruits(oranges);
//   const juice = `Juice with ${appCut} pieces of apples and ${ornCut} pieces of oranges`;
//   return juice;
// }
// console.log(fruitProcessor(4, 3));

// const gopal = {
//   firstName: 'gopal',
//   lastName: 'das',
//   job: 'software Engineer',
//   age: 26
// }

// console.log(gopal.firstName);
// console.log(gopal['firstName']);  //Here we can add expression

// let nameKey = "Name";
// console.log(gopal['first' + nameKey]);  // O/P- same as other two output

// const interestedIn = prompt("What do you want to know about Gopal? Choose between firstName, lastName, age, job and friends");

// console.log(interestedIn);  //O/P- job
// console.log(jonas.interestedIn);  //O/P- undefined, because it does not has interestedIn property
// console.log(jonas[interestedIn]); //O/P- software Engineer, as javascript will look into "interestedIn" and change its value to "job" then give the result

// jonas.location = "Hyderabad";
// jonas['twitter'] = "das";

// const jonas = {
//   firstName: 'jonas',
//   lastName: 'das',
//   job: 'software Engineer',
//   age: 26,
//   friends: ['Michel', 'sanu', 'dipa']
// }

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
//O/P- jonas has 3 friends, and his best friend is called Michel

// const jonas = {
//   firstName: 'jonas',
//   lastName: 'das',
//   job: 'software Engineer',
//   birthYear: 1996,
//   hasDriversLicense: false,
//   friends: ['Michel', 'sanu', 'dipa'],
//   calcAge: function() {
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function() {
//     return `${this.firstName} is a ${this.calcAge()} years old teacher, and he has ${this.hasDriversLicense ? 'a' : 'not'} driver's license.`
//   }
// }

// // Here Only need to calculate / call the calcAge once, after we can use the age property directly
// const res = jonas.calcAge();
// console.log(res);
// console.log(jonas.age);

// console.log(jonas.getSummary());

// const jonas = ["gopal", "das", 26, "sanu", [1, 2, 3, 4], true];

// // continue is to exit the current iteration of the loop and continue to the next one
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue;
//   console.log(jonas[i], typeof jonas[i]);
// }

// // break is used to completely terminate the whole loop
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "number") break;
//   console.log(jonas[i], typeof jonas[i]);
// }

// const measureKelvin = () => {
//   const measurement = {
//     type: "temp",
//     unit: "celcius",
//     value: Number(prompt("Degrees Celcius:")),
//   };

//   console.table(measurement);

//   debugger;
//   const kelvin = measurement.value + 273;
//   // console.warn();
//   // console.error();
//   console.log(typeof kelvin);
//   return kelvin;
// };

// console.log(measureKelvin());

// const cart = ["shoes", "pants", "kurtas"];

// api.createOrder(cart, function () {
//   api.proceedtoPayment(function () {
//     api.showOrderSummary();
//   });
// });

// fetch().then();
let dat = true;
const a = "jonas";
first();
console.log(z);

function first() {
  const b = "hello";

  second();

  if (dat) {
    var z = "sanu";
  }

  console.log(z);

  function second() {
    const c = "hi";
    console.log(c + b);
    console.log(z);
    third();
  }
}

function third() {
  const d = "hey";
  console.log(d + c + b + a);
}
