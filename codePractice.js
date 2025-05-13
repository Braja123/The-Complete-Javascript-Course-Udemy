let a = [
  {
    name: "apple",
    color: "red",
  },

  {
    name: "grapes",

    color: "green",
  },

  {
    name: "orange",

    color: "orange",
  },
];

let b = [
  {
    name: "apple",

    brand: "abc",
  },
  {
    name: "grapes",

    brand: "xyz",
  },
];

const mergeArr = (a, b) => {
  return a.map((item) => {
    
    // The find() method is used to search through an array and return the first element that satisfies a given condition (test function).
    // If no element matches, it returns undefined.
    let match = b.find((key) => item.name === key.name);
    if (match) {
      return { ...item, ...match };
    }
    return item;
  });
};

console.log(mergeArr(a, b));
