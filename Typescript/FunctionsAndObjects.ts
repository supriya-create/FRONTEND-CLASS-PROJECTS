export{}
function greet():void{
    console.log("Front End");
}
greet();

function add(a:number,b:number,c:number):number{
    return a+b+c;
}
console.log(add(3,4,5));

// let person:{
//     name: string;
//     age:number;
// } = {
//     name: "Raj",
//     age: 30,
// }

//type aliasing 
type PersonType={
    name:string;
    age:number;
    city:string;
}

let person:PersonType = {
    name: "Raj",
    age: 30,
    city:"Phagwara",
}
console.log(person);

type ProductType={
    productname: string;
    price: number;
    qty: number;
}

let product:ProductType={
    productname: "Item1",
    price: 200,
    qty: 2,
}

function calculateTotalPrice(product:ProductType):number{
    return product.price*product.qty;
}
console.log("Total Price: ", calculateTotalPrice(product));

//Interface
//1) Generally works classes
//2) Involves extends and implements

//Type Alias
//1) Functions
//2) It works with Union and Intersection

type stu={
    name: string;
    age: number;
}

type stuAdd={
    city: string;
    state: string;
    pin: number
}

//type stuCombine = stu | stuAdd;  atleast one type should be fully displayed
type stuCombine = stu&stuAdd;   //both type should be fully displayed
let student:stuCombine={
    name:"Supriya",
    age:19,
    city: "darbhanga",
    state: "bihar",
    pin: 64001
}
console.log(student);