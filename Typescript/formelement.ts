let btn = document.getElementById("btn") as HTMLButtonElement;

btn.addEventListener("click", ()=>{
    let t1 = document.getElementById("text1") as HTMLInputElement;
    console.log(t1.value);
    alert("Welcome!!");
});

type PizzaOrder = {
    size: string,
    price: number
}

function order(p:PizzaOrder){
    console.log(`I have ordered a pizza of size ${p.size} and price ${p.price}`);
}
order({size: "Large", price: 15.99});