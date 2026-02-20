// Generics

const gameScores = [14, 21, 33, 42, 59]
const favoriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper kettles", "warm woolen mittens"];
const voters = [{ name: "Alice", age: 42 }, { name: "Bob", age: 77 }]

/**
 * Challenge: figure out how to explicitly type the return value
 * of the function!
 */

function getLastItem<Type>(array: Type[]): Type | undefined{
    return array[array.length - 1]
}

/**
 * Mini-challenge: call `getLastItem` (and console.log the returned value)
 * on each of the 3 arrays above. Hover over different values to see what the Intellisense
 * says about the types for each one.
 */

console.log(getLastItem(gameScores))
console.log(getLastItem(favoriteThings))
console.log(getLastItem(voters))

/*
Simple definition:

Generics in TypeScript let you write a function, class, or type that works with different data types while still keeping type safety.

👉 In short:
Generics = a way to use a placeholder for a type that is decided later.

One-line example:

function identity<T>(value: T): T {
  return value
}

Here, T is the generic — the actual type (string, number, object, etc.) is provided when the function is used.

Even shorter mental model:

Generics make your code reusable for many types without using any. ✅ 
*/