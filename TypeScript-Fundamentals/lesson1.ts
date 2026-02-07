let myName: string = "Bob"
// Primitive Data Types: string, number, boolean
// Challenge: Explicitly type the variables below:

let numberOfWheels: number = 4
let isStudent: boolean = false

// Custom Types

type Food = string
let favoriteFood: Food = "pizza"

// we can use ',' or ';' or '' as separators in type definition

// Nested Object Types

// Challenge: try to figure out how to move the nested address object type
// into a separate type definition. When done correctly, there should be no more
// red errors in the editor

type Address = {
    street: string
    city: string
    country: string
}

type Person = {
    name: string
    age: number
    isStudent: boolean
    address: Address
}

let person: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA" 
    }
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