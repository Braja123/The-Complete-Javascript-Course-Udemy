"use strict";

// const restaurant = {
//   name: "Gopal Das",
//   location: "hyderabad",
//   categorie: ["Italian", "Pizzaria", "Vegeterian", "Organic"],
//   starterMenu: ["Foca", "Brush", "Garlic Bread", "Carpse"],
//   mainMenu: ["Pizza", "Passta", "Rissoto"],
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// Receive 2 return value from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// Nested Destructuring
// const nested = [2, 4, [5, 6]];
// const [first, , [arr1, arr2]] = nested;
// console.log("first is", first, arr1, arr2);

// Default Values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

const weekdays = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];

const openingHours = {
  // means "thur"
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  /// means "fri"
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  // means "sat"
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 12 + 12,
  },
};
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  // es6 enhanced object literals
  openingHours,

  orderDelivery({ time, address, mainIndex = 0, starterIndex = 1 }) {
    console.log(
      `Order received! ${restaurant.starterMenu[starterIndex]} and ${restaurant.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

// The For-of loop
let menu = [...restaurant.categories, ...restaurant.starterMenu];
// for (const item of menu) {
//   console.log(item);
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i} : ${el}`);
// }

// if (restaurant.openingHours && restaurant.openingHours.fri) {
//   console.log(restaurant.openingHours.fri.open);
// }
// WITH OPTIONAL CHAINING
// console.log(restaurant.openingHours?.mon?.open);
// console.log(restaurant.openingHours.fri?.open);

// Example
const days = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day} we open at ${open}`);
}

// Methods
// console.log(restaurant.order?.[(0, 1)] ?? "Method Does not exist");

// Arrays
// const users = [{ name: "Gopal das", email: "hello@gmail.com" }];
// console.log(users[0]?.name ?? "User array empty");

// LOOPING OBJECTS: Object Keys, Values and Entries
// Property KEYS
const properties = Object.keys(openingHours);
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);

restaurant.orderDelivery({
  time: "22:30",
  address: "Hyderabad, Tel",
  mainIndex: 2,
  starterIndex: 2,
});

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire Object
const entries = Object.entries(openingHours);
// console.log(entries);
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
// Default Values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating Variables
// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// Nested Objects
// const {
//   thu: { close },
// } = restaurant.openingHours;
// console.log(close);

// Spread Operator
const newMenu = [...restaurant.mainMenu, "Goncii"];
// console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// Iterable: arrays, strings, maps, sets. NOT Objects
// const str = "Jonas";
// const letters = [...str, "s"];
// console.log(letters);

// Real world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt(" Ingredient 2?"),
//   prompt(" Ingredient 3?"),
// ];

// restaurant.openingHours.orderPasta(...ingredients);
// console.log(ingredients);

// Objects
// const newRestaurants = { foundIn: 1998, ...restaurant, founder: "Sanu" };
// console.log(newRestaurants);

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(a, b, others);

const [pizza, , rissoto, ...others] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad","Pizza", "Pasta", "Risotto" ]
// console.log(pizza, rissoto, others);

// Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

restaurant.numGuests = 2;

// Nullish: null and undefined(NOT 0 or '')
const guestCrrect = restaurant.numGuests ?? 10;

// console.log(guestCrrect);

const rest1 = {
  name: "Gopal",
  numGuests: 0,
};
const rest2 = {
  name: "Sanu",
  owner: "Giova",
};

// OR assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// NULLISH assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest2.owner = rest2.owner && "<ANNONYMOUS>";

rest1.owner &&= "<ANNONYMOUS>";
rest2.owner &&= "<ANNONYMOUS>";

// console.log(rest1, rest2);
