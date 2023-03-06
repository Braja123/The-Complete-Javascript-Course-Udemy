const airLine = "TAP Air Odisha";
const plane = "A341";

// console.log(plane.length);
// console.log("B564"[0]);

// console.log(airLine.indexOf("r"));
// console.log(airLine.lastIndexOf("i"));
// console.log(airLine.indexOf("Japan"));

// // it returns a new string without changing the original one
// console.log(airLine.slice(4));
// console.log(airLine.slice(4, 7));
// console.log(airLine.slice(0, airLine.indexOf(" ")));
// // As here space included thats why useed +1
// console.log(airLine.slice(airLine.lastIndexOf(" ") + 1));
// // Here "-2" means last two letters
// console.log(airLine.slice(-2));
// console.log(airLine.slice(1, -1));

// const checkMiddleSeat = (seat) => {
//   // B and E are middle seats
//   let s = seat.slice(-1);
//   if (s == "B" || s == "E") {
//     console.log("middle");
//   } else {
//     console.log("not");
//   }
// };
// checkMiddleSeat("11B");
// checkMiddleSeat("1E");
// checkMiddleSeat("10D");

// Thats how JS converts normal strings to string object
// console.log(new String("gopal"));

// // here typeof is object as string converts to a string object
// console.log(typeof new String("gopal"));

// // here typeof is string as the operation is done then the object is converted back to a regular string primitive
// console.log(typeof new String("gopal").slice(1));

// Note: How Strings are accessing to all the methods as only "Objects" such as "arrays" can access all the methods.
// In behind the screen javascript converts the normal "Strings" to "Object String" and then after "Strings" can access the methods.
// Whenever we call a method on a string javascript will automatically behind the scenes convert that string primitive to a  string object with the same content. And then it's on that object where the methods are called .
// And this process is called as "Boxing". Because it basically takes our string and puts it into a box which is the object.
// like this -> console.log(new String("gopal")) -> It will look like object
// And when the operation is done then the object is converted back to a regular string primitive and in fact all string methods return primitives even if called on a string object.

// Split and Join
console.log("a+very+nice+string".split("+"));
console.log("gopal das".split(" "));
const [firstName, lastName] = "gopal das".split(" ");
console.log(firstName, lastName);

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = (name1) => {
  let name = name1.split(" ");
  const namesUpper = [];
  for (let n of name) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join(" "));
};
capitalizeName("gopal das");

// Padding
const message = "Go to gate 23!";
console.log(message.padStart(25, "+").padEnd(35, "+"));
console.log("dipa".padStart(25, "+"));
console.log(message.padEnd(25, "+"));
console.log("dipa".padEnd(25, "+"));

const maskCreditCard = (number) => {
  let str = number + ""; //String(number)
  let last = str.slice(-4);
  return last.padStart(str.length, "*");
};
console.log(maskCreditCard(237586453524467));
console.log(maskCreditCard("23794627847586"));

// Repeat
const message2 = "Bad Weather... All dep delayed...! ";
console.log(message2.repeat(5));

const planesInline = (n) => {
  console.log(`There are ${n} palnes in line ${"=>".repeat(n)}`);
};
planesInline(5);
planesInline(4);
planesInline(3);
