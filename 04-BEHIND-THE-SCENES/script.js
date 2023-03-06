// "use strict";

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenia = true;

//       // Creating new variable with same name as outer scope's variable
//       const firstName = "Sanu";

//       // Reassigning outer scope's variable
//       output = "NEW OUTPUT!";
//       const str = `Oh, you are millenial, ${firstName}`;
//       console.log(str);
//     }

//     // Here we can not get the value of "str" as it has defined in "const" which is block scoped.
//     // console.log(str);

//     // Here we can get the "millenia" value as "var" is function scoped.
//     console.log(millenia);

//     console.log(output);

//     function add(a, b) {
//       return a + b;
//     }
//     add(2, 3);
//   }
//   // Here we will get the error as "functions" are also function scoped.
//   // add();

//   printAge();
//   return age;
// }

// const firstName = "Gopal";
// calcAge(1995);

// const jonas = {
//   firstName: "Gopal",
//   year: 1995,
//   calcAge: function () {
//     console.log(2037 - this.year);

//     // Solution 1
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };
//     // isMillenial();

//     // Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
// };

// jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 3, 5, 6);

const addArrow = () => {
  // Get the error as arguments not supported in arrow functions
  console.log(arguments);
  return a + b;
};
addArrow(3, 4, 5);
