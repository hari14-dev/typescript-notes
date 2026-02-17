type UserRole = "guest" | "member" | "admin"

type User = {
    username: string
    role: UserRole
}

const users: User[] = [
    { username: "john_doe", role: "member" },
    { username: "jane_doe", role: "admin" },
    { username: "guest_user", role: "guest" }
];

// function return type:
// always be explicit whenever you can, here we added type User to this function, so later in the future
// when someone tries to change the return type like 'user.username' ts warns or tells that this function is
// supposed to return User object. 
// This helps in avoiding unnecessary errors in our codebase, if this function is used somewhere else

// other definitions:
// Always prefer explicit return types for exported / shared functions.
// It prevents accidental return type changes and improves maintainability.

function fetchUserDetails(username: string): User {
    const user = users.find(user => user.username === username)
    if (!user) {
        throw new Error(`User with username ${username} not found`)
    }
    return user
}
