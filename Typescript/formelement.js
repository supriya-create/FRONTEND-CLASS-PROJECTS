let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    let t1 = document.getElementById("text1");
    console.log(t1.value);
    alert("Welcome!!");
});
function order(p) {
    console.log(`I have ordered a pizza of size ${p.size} and price ${p.price}`);
}
order({ size: "Large", price: 15.99 });
export {};
//# sourceMappingURL=formelement.js.map