// "use strict";

// const bookings = [];

// const createBookings = function (flightNum, numPassengers = 20, price = 23888) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);

//   bookings.push(booking)
// };
// createBookings("LH123")
// createBookings("LH123", undefined, 34)

// const oneWord = function(str) {
//     return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function(str) {
//     const [first, ...others] = str.split(" ");
//     return [first.toUpperCase(), ...others].join(" ")
// }

// // Higher-Order Function
// const transformer = function(str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);
//     console.log(`Transformed by: ${fn.name}`);

// }
// transformer("Javascript is the best", upperFirstWord);
// transformer("Javascript is the best", oneWord);

// // JS uses callbacks all the time
// const high5 = function() {
//     console.log("👏");

// }

// document.body.addEventListener("click", high5);
// ['gopal', 'sanu', 'dipa'].forEach(high5)

// const greet = function (greetings) {
//   return function (name) {
//     console.log(`${greetings}: ${name}`);
//   };
// };

// // by using arrow function
// // const greet = (greetings) => (name) => console.log(`${greetings}: ${name}`);

// const greeterHey = greet("Hello");
// greeterHey("dipa");
// greeterHey("gopal");
// greet("Hello")("sanu");

// call method
const luftanza = {
  airline: "Luftanza",
  itataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.itataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.itataCode}${flightNum}`, name });
  },
};

luftanza.book(239, "Gopal Das");
luftanza.book(669, "Sanu Das");
console.log(luftanza);

const eurowings = {
  airline: "Euroings",
  itataCode: "EW",
  bookings: [],
};

const book = luftanza.book;
// Does not work
// book(276, "Subha Das")

book.call(eurowings, 565, "John Doe");
console.log(eurowings);

// apply method
const swiss = {
  airline: "Ind",
  itataCode: "EW",
  bookings: [],
};

const flightData = [583, "Cooper Das"];
book.apply(swiss, flightData);

book.call(swiss, ...flightData);
console.log(swiss);

// bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(eurowings);
const bookLX = book.bind(eurowings);

bookEW(76, "Gop Das");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("B Gopal Das");
bookEW23("Subhashree Das");

const addTax = (rate, value) => value + value * rate;

// when we don't need this keyword in bind menthod then use "null"
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log("Extra", addVAT2(100));

// IIFE
// for data encapsulation we use IIFE, 
// to keep our data private we use IIFE
(function () {
  console.log("This will never run again");
})();

(() => console.log("This will also never run again"))
();


// Closures
//  We can say a closure makes a function remember all the variables that exist at the functions birthplace
// A function always has access to the variable environment of the execution context in which it was created even after the execution context is gone. 

let f;

const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2);
    }
}
const h = function() {
    const b = 777;
    f = function() {
        console.log(b * 2);
    }
}
g();
f();

// Re-assigning f function
h();
f();


