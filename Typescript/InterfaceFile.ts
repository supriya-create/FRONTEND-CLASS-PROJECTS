//Interface
//1)Interface creates structure only for objects
//2)Extends, implements
//3)Two same name interface can be created

//Type
//1)Type creates structure for objects, primitive and literals
//2)Union, Intersection
//3)Two same types can not be merged 
export{}
interface Laptop{

    readonly lid:number;  //cant update
    brand: string;
    color: string
    //processor?:string //optimal to add processor 
}

interface Laptopspecs{
    ram:string;
    ssd:string;
}

interface LaptopCombine extends Laptop, Laptopspecs{}

let laptopObject:LaptopCombine={
    lid:1,
    brand: "Dell",
    color: "grey",
    ram: "16",
    ssd: "512GB"
}
console.log(laptopObject);

class LaptopClass implements LaptopCombine{
    lid:number;
    brand: string;
    color: string
    //processor?:string
    ram:string;
    ssd:string;

    constructor(lid:number, brand:string, color:string, ram:string, ssd:string){
        this.lid = lid;
        this.brand = brand;
        this.color = color;
        this.ram = ram;
        this.ssd = ssd;
    }
    info(){
        console.log("I have a laptop of " +this.brand +" with model "+this.brand +" and colour "+this.color);
    }
}

let u = new LaptopClass(1, "mac", "grey", "16GB", "512");
u.info();


