"use strict";
function placeOrder(user, items) {
    let total = 0;
    for (let item of items) {
        total += item.price;
    }
    return {
        username: user.name,
        totalAmount: total,
        status: "Order Placed"
    };
}
const user = { name: "Rahul", age: 22 }; // fixed
const items = [
    { name: "Pizza", price: 200 },
    { name: "Burger", price: 150 } // fixed
];
const order = placeOrder(user, items);
console.log(order.totalAmount.toFixed(2));
