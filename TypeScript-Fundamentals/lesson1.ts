let myName: string = "Bob"
// Primitive Data Types: string, number, boolean
// Challenge: Explicitly type the variables below:

let numberOfWheels: number = 4
let isStudent: boolean = false

// Optional properties

type Food = string
let favoriteFood: Food = "pizza"

type Address = {
    street: string
    city: string
    country: string
}

type Person = {
    name: string
    age: number
    isStudent: boolean
    address?: Address // optional properties require extra checks when accessing them (check that displayInfo() function)
}

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
}

let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA"
    }
}

function displayInfo(person: Person) {
    // ofcourse we can solve this by conditional statements, but its just to demonstrate type safety
    // so while using 'Optional properties' just makesure that it will not cause any errors
    
  //  console.log(`${person.name} lives at ${person.address.street}`);

    // can be fixed as,
    console.log(`${person.name} lives at ${person.address?.street}`);
}

displayInfo(person1);