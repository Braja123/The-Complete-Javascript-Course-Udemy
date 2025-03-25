const weekdays = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];


const openingHours = {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    [`day-${2+3}`]: {
      open: 0,
      close: 12 + 12,
    },
}

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    
    order(startIndex, mainIndex) {
        return [this.starterMenu[startIndex], this.mainMenu[mainIndex]]
    },
    openingHours
}

for(const day of weekdays) {
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`${day} we open at ${open}`);
}

console.log(restaurant.order?.(1,2));
const properties = Object.keys(openingHours)
let openStr = `we are open ${properties.length} and : `
for(const key of properties) {
    openStr += `${key}, `
    console.log(key);
}
console.log(openStr);

const values = Object.values(openingHours);
const entries = Object.entries(openingHours);

for(const [day, {open, close}] of entries) {
    console.log(day, open, close);
    
}

const italianFoods = new Set(['pasta', 'gnochi', 'tomatos', 'olive oil', 'garlic', 'basil']);
const mexicanFoods = new Set(['tortalis', 'beans', 'rice', 'tomatos', 'avocado', 'garlic'])

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log(commonFoods);
console.log([...commonFoods]);

// union() gives all the available elements inside an array without duplicate
const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log(italianMexicanFusion);

// difference() removes the common elements in both arrays
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log(uniqueItalianFoods);

// symmetricDifference() gives all the elements in both arrays without common element
const uniqueIalianAndMexicanFoods = italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueIalianAndMexicanFoods);

// isDisjointFrom() check one array elements are available in another element
console.log(italianFoods.isDisjointFrom(mexicanFoods));








console.log("---------------");



// // const [first, ,second] = restaurant.categories;

// // const [strter, main] = restaurant.order(2, 0);

// // const nested = [2,4, [5,6]];
// // const [x, y, [z, a], k=10] = nested
// // console.log(x, y, z, a, k);

// // const {name: restaurantName = [], openingHours, categories, menu=60} = restaurant;
// // console.log(name, categories, openingHours, menu);

// // let a = 111;
// // let b = 999;

// // const obj = {a: 23, b: 24, c: 29};

// // ({a, b, c} = obj);
// // console.log(a, b, c);

// // const {fri: {open: das = 87} = 76} = openingHours;

// const [a, b, ...others] = [1,2,3,4,5]
// console.log(a, b, others);

const rest1 = {
    name: 'Capri',
    numGuests: 0
}

const rest2 = {
    name: "la Pizza",
    owner: "gopal"
}

rest1.numGuests ??= 10;
rest2.numGuests = rest2.numGuests || 10;

rest1.owner &&= "<ANO>"
rest2.owner = rest2.owner && "<ANO>"


console.log(rest1);
console.log(rest2);

console.log("-------------------FOR OF----------");

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for(let item of menu) console.log(item);
for(const [item1, item2] of menu.entries()) console.log(`${item1 + 1}: ${item2}`);

console.log(restaurant?.openingHours?.mon?.open);
