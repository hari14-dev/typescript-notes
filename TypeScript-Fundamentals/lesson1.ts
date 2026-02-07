let myName: string = "Bob"
// Primitive Data Types: string, number, boolean
// Challenge: Explicitly type the variables below:

let numberOfWheels: number = 4
let isStudent: boolean = false

// Custom Types
// Ex1
type Food = string
let favoriteFood: Food = "pizza"

// Ex2

// we can use ',' or ';' or '' as separators in type definition
type Person = {
    name: string
    age: number
    isStudent: boolean
}

let person: Person = {
    name: "Joe",
    age: 42,
    isStudent: true
}

let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false
}