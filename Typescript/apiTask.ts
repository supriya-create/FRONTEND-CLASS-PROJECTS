export {};
type Product = {
    id : number;
    price: number;
}
type APIType = {
    status: string;
    products: Product[]
}

let o:APIType={
    status: "Success",
    products: [
        {id: 1, price: 100},
        {id: 2, price: 200}
    ]
}

function APIResponse(a:APIType){
    if(a.status === "Success"){
        if(a.products){
            a.products.map((p)=>{
                console.log(p.id, p.price);
            })
        }
    }
}
APIResponse(o);

type apitype2 = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

async function APICalling(){
    let result = await fetch("https://jsonplaceholder.typicode.com/todos/2");
    let data = await result.json(); // it convert obj to json
    return data;
}

console.log(APICalling());
APICalling().then((d)=>{
    console.log(d.completed);
    console.log(d.id);
    console.log(d.title);
    console.log(d.userId);
})
