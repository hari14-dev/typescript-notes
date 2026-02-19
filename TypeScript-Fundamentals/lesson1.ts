type User = {
    id: number
    username: string
    role: "member" | "contributor" | "admin"
}

type UpdatedUser = Partial<User>

let nextUserId = 1

const users: User[] = [
    { id: nextUserId++, username: "john_doe", role: "member" },
    { id: nextUserId++, username: "jane_smith", role: "contributor" }
];

function updateUser(id: number, updates: UpdatedUser) {
    const foundUser = users.find(user => user.id === id)
    if (!foundUser) {
        console.error("User not found!")
        return
    }
    Object.assign(foundUser, updates)
}

// updateUser(1, { username: "new_john_doe" });
// updateUser(4, { role: "contributor" });

// in order to avoid 'any' type here function addNewUser(newUser: any): User {} 
// we can use utility type called Omit
function addNewUser(newUser: Omit<User, 'id'>): User {
    // Create a new variable called `user`, add an `id` property to it
    // and spread in all the properties of the `newUser` object. Think
    // about how you should set the type for this `user` object.
    // Push the new object to the `users` array, and return the object
    // from the function at the end
    const user: User = {
        id: nextUserId++,
        ...newUser
    }
    users.push(user)
    return user
}

// example usage:
// this gives error for missing property of role
// only the id can be omitted when passed to function
// addNewUser({ username: "joe_schmoe" })

// correct one
addNewUser({ username: "joe_schmoe", role: "member" })

// If you want to omit 'username' (omit multiple properties) also, then you can use it as
// Omit<User, 'id' | 'username'>

// ✅ General syntax of Omit in TypeScript
// Omit<Type, Keys>

// 📌 Where:

// Type → the original type

// Keys → the property (or properties) you want to remove
// (must be a union of string literal keys)

console.log(users)