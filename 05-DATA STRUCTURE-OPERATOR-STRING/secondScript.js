const openingHours = {
  thur: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 12 + 12,
  },
};
// Sets
const orderSet = new Set(["Pasta", "Pasta", "Rissoto", "Pizza"]);
// console.log(orderSet);

// console.log(new Set());
// console.log(new Set("gopal"));
// // "size" is similar to array length
// console.log(orderSet.size);
// // has() method is similar to array includes()
// console.log(orderSet.has("Pasta"));
// console.log(orderSet.has("Jilapi"));
// orderSet.add("Garlic Bread");
// orderSet.add("Garlic Bread");
// orderSet.delete("Rissoto");
// orderSet.clear();
// console.log(orderSet);
// for (const order of orderSet) console.log(order);
// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
// Here we used spread operator to change from Sets to Array
const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//   new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
// );
// console.log(new Set("gopaldas").size);

// Map
const rest = new Map();
// Same as "add" inside Set()
rest.set("name", "gopal das");
rest.set(1, "India, Balasore");
console.log(rest.set(2, "Lisbon, Protugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are open: D")
  .set(false, "we are closed:");

// console.log(rest.get("name"));
// console.log(rest.get(true));

const time = 8;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
// console.log(rest.has("categories"));
// console.log(rest.delete(2));
// console.log(rest.clear());
let arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector("h1"), "Heading");
// console.log(rest);
// console.log(rest.size);
// // previously [1,2] is not worked directly as whta we define in set() is not the same key
// console.log(rest.get(arr));

const question = new Map([
  ["question", "what is the best programming language in the world"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again!"],
]);

console.log(question);

// Convert object to Map
console.log(Object.entries(openingHours));
const hours = new Map(Object.entries(openingHours));
console.log(hours);

// Quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt("'Your answer"));
// if (answer) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }
// console.log(answer);

// console.log(question.get(question.get("correct") === answer));

// Convert Map to array
// console.log([...question]);
// console.log([question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);
