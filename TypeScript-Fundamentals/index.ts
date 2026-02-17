type Pizza = {
    id: number
    name: string
    price: number
}

type Order = {
    id: number
    pizza: Pizza
    status: "ordered" | "completed"
}

const menu: Pizza[] = [
    { id: 1, name: "Pepperoni", price: 10 },
    { id: 2, name: "Margherita", price: 8 },
    { id: 3, name: "Hawaiian", price: 10 },
    { id: 4, name: "Veggie", price: 9 },
]

let cashInRegister = 100
let nextOrderId = 1
const orderQueue: Order[] = []

function addNewPizza(pizzaObj: Pizza) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName: string) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number) {
    const order = orderQueue.find(order => order.id === orderId)
    if(!order) {
       console.error(`${orderId} was not found in the orderQueue`)
       return
       // throw new Error(`${orderId} was not found in the orderQueue`); this alone also works!
    }
    order.status = "completed"
    return order
}

/**
 * Challenge: create a new utility function called getPizzaDetail. It will take
 * a parameter called `identifier`, but there's a twist: we want this identifier
 * to be allowed to either be the string name of the pizza (e.g. "Pepperoni"),
 * OR to be the number ID of the pizza (e.g. 2).
 * 
 * Don't worry about the code inside the function yet, just create the function
 * signature, making sure to teach TS that the `identifier` parameter is allowed
 * to either be a string or a number.
 */

function getPizzaDetail(identifier: string | number) {
    /**
     * Challenge: write the code to check if the parameter is a string
     * or a number, and use the menu.find() method accordingly
     */

    if(typeof identifier === "string") { // this line is called type guard
        // Type Guard
        // A type guard is a check that tells TypeScript what the type of a variable is inside a certain block of code.
        return menu.find((pizza) => pizza.name.toLowerCase() === identifier.toLowerCase())
    }
    else {
        /* if you hover over .toLowerCase() ts says: Property 'toLowerCase' does not exist on type 'number'.
        here ts can understand and helps us that, the 'identifier' can only be string or number and we handled
        string case and when coming to else part ts automatically understands and says it that,
        Property 'toLowerCase' does not exist on type 'number', this is called type narrowing. */
        // eg1.
        // return menu.find((pizza) => pizza.id == identifier.toLowerCase());
        // eg2. 
        // same ts says: This comparison appears to be unintentional because the types 'string' and 'number' have no overlap.
        // return menu.find((pizza) => pizza.name === identifier);
        return menu.find((pizza) => pizza.id === identifier);
    }
}

addNewPizza({ id: 5, name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ id: 6, name: "BBQ Chicken", price: 12 })
addNewPizza({ id: 7, name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(10)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)