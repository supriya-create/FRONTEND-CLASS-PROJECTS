function greet() {
    console.log("Front End");
}
greet();
function add(a, b, c) {
    return a + b + c;
}
console.log(add(3, 4, 5));
let person = {
    name: "Raj",
    age: 30,
    city: "Phagwara",
};
console.log(person);
let product = {
    productname: "Item1",
    price: 200,
    qty: 2,
};
function calculateTotalPrice(product) {
    return product.price * product.qty;
}
console.log("Total Price: ", calculateTotalPrice(product));
let student = {
    name: "Supriya",
    age: 19,
    city: "darbhanga",
    state: "bihar",
    pin: 64001
};
console.log(student);
export {};
