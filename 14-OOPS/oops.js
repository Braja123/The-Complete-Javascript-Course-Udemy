// Abstraction
// Ignoring or hiding details that don't matter, allowing us to get an overview perspective of the thing we are implementing, instead of messing with details that don't really matter to our implementation.
// Ex: when we use any event listner inside code we do not need to go through what is there behind the scenes of the event listner.

// Encapsulation
// Keeping properties and methods private inside the class, so they are not accessable from outside the class. Some methods can be exposed as public interface(API)

// Inheritance
// Making all properties and methods of a certain class available to a child class, forming a hierarchical relationship between classes. This allows us to reuse common logic and to model real-world relationships.

// Polymorphism
// The word 'polymorphism'  is coming from Greek.
// A child class can overwrite a method it inherited from a parent class.

// Prototypal inheritance
// The prototype contains methods (behavior) that are accessable to all the objects linked to that prototype.

// The difference between a normal function and a contructor function is that at the time of call a Constructor function we need to use "new" keyword.
// Arrow functions doesn't work in Constructor function as "this" keyword is not there in arrow function and we need this keyword in constructor function.

"use strict";

const Person = function (firstName, birthYear) {
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   Never do this
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person("Gopal", 1996);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype        // it means this -> jonas.__proto__
// 4. function automatically return empty object

const san = new Person("Sanu", 1995);

// console.log(san instanceof Person);

// console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// This type is known as Static Methods, so they can not be inherited by any objects which created from Person constructor function.
Person.hey = function () {
  console.log("Hey There");
  console.log(this);
};

Person.hey();
// jonas.hey(); // can not access by objects

jonas.calcAge();

console.log(
  "jonas.__proto__ === Person.prototype",
  jonas.__proto__ === Person.prototype
);
// Person.prototype is not the prototype of Person it is the prototype of all the objects that are created with the Person constructor functions.

// console.log(Person.prototype.isPrototypeOf(jonas)); //true
// console.log(Person.prototype.isPrototypeOf(Person)); //false

Person.prototype.location = "hyd";

// console.log(jonas.hasOwnProperty("firstName")); // true
// console.log(jonas.hasOwnProperty("location")); // false

// console.log(jonas.__proto__);

// Prototype chain - When any object tries to find any key inside that then if it doesn't find then it will go inside "__proto__" then from there it will check. That is know as prototype chain same as scope chain but here we are checking inside prototype and there they checked inside functions.

// console.log(jonas.__proto__.__proto__);

const arr = [1, 2, 3, 4, 5, 6];

// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

// console.log([1, 2, 3, 4, 32, 3, 4, 1, 6].unique());

function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function () {
  console.log(this.speed + 10);
};

Car.prototype.break = function () {
  console.log(this.speed - 5);
};

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

car1.accelerate();
car2.accelerate();
// ----------------------------------------------------------------

// 1. Classes are not hoisted
// 2. Class are first-class Citizen(pass inside any function and return inside any function)
// classes are like special type of function behind the scenes
// 3. Classes are executed in strict mode

// class expression
// const PersonalCl = class{}

// class definition
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Protected Properties
    // anything that is started with "_" treated as protected property/methods. and after "_" also we can access outside of the class. That is only the convention that all the developers follow.
    this._loc = [];
  }

  // Protected method
  _checkNum() {}

  // Instance Methods
  // Method will be added to .prototype property
  calcAge() {
    console.log(`Age is : ${2037 - this.birthYear}`);
  }

  greet = function () {
    console.log(`Hello ${this.firstName}`);
  };

  get age() {
    return 2037 - this.birthYear;
  }

  // set a property that already exists
  set firstName(name) {
    if (name.includes(" ")) return (this._firstName = name);
    else alert(`${name} is not full name`);
  }

  get firstName() {
    return this._firstName;
  }

  // Static Methods
  static hey() {
    console.log("Hey There! from class");
    console.log(this);
  }
}

PersonCl.hey();

const gopal = new PersonCl("braja gopal", 1996);
// gopal.calcAge();
// console.log("age", gopal.age);
console.log("gopal", gopal);

// PersonCl.prototype.greet = function () {
//   console.log(`Hello ${this.firstName}`);
// };

gopal.greet();

const account = {
  owner: "san",
  movements: [200, 540, 120, 300],
  get latest1() {
    return this.movements.slice(-1).pop();
  },

  set latest(val) {
    return this.movements.push(val);
  },
};

console.log("account.latest1", account.latest1);
account.latest = 111;
console.log(account);
// setter and getter are very usefull for validations

// Object.create
const PersonPrto = {
  calcAge() {
    console.log(`Age is : ${2037 - this.birthYear}`);
  },

  // this you can use or not, used only for optimize purpose
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// by using Object.create we skip prototypal inheritance and directly add methods;
// Object.create() create a new object and the prototype of the object that object that we passed in.
const steve = Object.create(PersonPrto);
console.log(steve);
steve.name = "Sanu";
steve.birthYear = 1995;
steve.calcAge();
console.log(steve.__proto__);

const sarah = Object.create(PersonPrto);
sarah.init("Subha", 1994);
console.log(sarah);

class CarFord {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    console.log(this.speed + 10);
  }
  break() {
    console.log(this.speed - 5);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarFord("BMW", 120);
console.log("ford.speedUS", ford.speedUS);
ford.speedUS = 300;
console.log(ford);

// Inheritance between Constructor Functions
const Person1 = function (firstName, birthYear) {
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person1.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // inherit from Person1 fn
  Person1.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person1.prototype);

Student.prototype.introduce = function () {
  return `My name is ${this.firstName} and I stydy is ${this.course}`;
};

const mike = new Student("Subhashree", 1994, "Physics");
console.log(mike);
console.log("mike", mike.introduce());
mike.calcAge();

// Inherit from Class
class StudentCl extends PersonCl {
  constructor(firstName, birthYear, course) {
    // super is a constructor function of parent class
    // Always needs to happen first
    super(firstName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.firstName} and I stydy is ${this.course}`);
  }
}

// if you do not need any properties in child class then no need to write constructor function

const martha = new StudentCl("Dipa Das", 1992, "Chemistry");
console.log(martha);
martha.introduce();
martha.calcAge();

class Account {
  // 1. Public fields
  // As it is public still it is behave like properties inside constructor function
  location = "";

  // 2. Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // if we wanted to add "pin" inside constructor then first define outside of constructor function then can use here
    this.#pin = pin;
  }

  // Public methods
  getMovements() {
    console.log("inside getMovements");
    // return this.#movements;
    return this;
  }

  // private methods
  #approvedLoan() {
    return true;
  }

  requestLoan() {
    if (this.#approvedLoan()) {
      console.log("Loan Approved");
    }
    return this;
  }

  static helper() {
    console.log("inside static");
  }
}

const acct = new Account("sanu", "$", 123);
console.log(acct.requestLoan());
// console.log(acct.#approvedLoan()); // gives us error as we are trying to access private field outside of class
console.log(acct.getMovements());
console.log(acct);
Account.helper();
console.log("----------------------------------------------------------------");
// method chaining
acct.getMovements().requestLoan();

// Getter method is basically so that we can get a value out of an object by simply writing a property instead of writing a method

// Setter is to set a new value to property
// If you have a setter for a property that is already define in the constructor then you need to create a new property with the underscore infront of it.(underscore is just a convention)
