export {};
let o = {
    status: "Success",
    products: [
        { id: 1, price: 100 },
        { id: 2, price: 200 }
    ]
};
function APIResponse(a) {
    if (a.status === "Success") {
        if (a.products) {
            a.products.map((p) => {
                console.log(p.id, p.price);
            });
        }
    }
}
APIResponse(o);
async function APICalling() {
    let result = await fetch("https://jsonplaceholder.typicode.com/todos/2");
    let data = await result.json(); // it convert obj to json
    return data;
}
console.log(APICalling());
APICalling().then((d) => {
    console.log(d.completed);
    console.log(d.id);
    console.log(d.title);
    console.log(d.userId);
});
//# sourceMappingURL=apiTask.js.map