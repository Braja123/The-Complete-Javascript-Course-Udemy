class Person {
    #birthdate;
    constructor(firstName, lastName, birthDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
    }
    calcAge() {
        console.log(`${2037 - this.birthDate}`);
    }
    static getHello() {
        console.log("Hello static");
        
    }
}

class Student extends Person {
    constructor(firstName, lastName, birthDate) {
    super(firstName, lastName, birthDate)

    }
}

const obj = new Person("gopal", "das", 1996);
const obj1 = new Student("sanu", "das", 1996);
console.log(obj);
console.log(obj1.calcAge());
console.log(Person.getHello());
