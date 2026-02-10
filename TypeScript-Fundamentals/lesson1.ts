// Literal Types

// generic type (means, in this eg. it is string type that Ts lets myName to be any string)
let myName = "Bob" // here the type shows as "string" (when you hover it)

// literal type (Because it’s a const, TypeScript infers the string literal type "Bob", not the wider string type.)
const myName2 = "Bob" // here the type shows as "Bob" (when you hover it)

// Practice:
let person: "Bob" = "Bobby" // this gives error, says it must be type "Bob"

const person2: "Bob" = "Bob"


// Unions

type UserRole = "guest" | "member" | "admin"

// let userRole: UserRole = "yttgg" // Type '"yttgg"' is not assignable to type 'UserRole'.
let userRole: UserRole = "member"

// Other egs.
type User = {
    userName: string
    // role: UserRole (or)
    role: "guest" | "member" | "admin"
}