// Typing arrays

let ages: number[] = [100, 101] // ts allows only array of numbers
// ages.push(true); this will cause an error

// let ages = [100, 101]; ts can also understand implicitly that, array should only be numbers.

type Person = {
    name: string
    age: number
    isStudent: boolean
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
}

/**
 * Challenge: create an array of people objects and
 * manually type it as an array of Person types
 */

let people: Person[] = [person1, person2]
// other way: let people: Array<Person> = [person1, person2]