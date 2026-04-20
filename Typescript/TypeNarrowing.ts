//type narrowing means reducing a broad type into a more specific type based on condition

//type of narrowing

//1)typeof narrowing
function takeInput(val:string|number){
    if(typeof val==="string"){
        return val.toUpperCase();
    }
    return val*4;
}
console.log(takeInput(11));
console.log(takeInput("Supriya"));


//2)instanceof narrowing
class Reading{
    read(){
        console.log("I am reading a book");
    }
}
class Playing{
    play(){
        console.log("I am playing chess");
    }
}
function chooseHobby(hobby:Reading|Playing){
    if(hobby instanceof Reading){
        hobby.read();
    }else{
        hobby.play();
    }
}
let h1 = new Reading();
chooseHobby(h1);

//3)Truthiness Narrowing
function takeNullValue(val:string|null){
    if(!val){
        console.log("Please enter a string");
    }else{
        console.log(val);
    }
}
takeNullValue("");

//4)toOperator Narrowing
type Reading1={
    read():string
}
type Playing1={
    play():void
}
function checkType(o:Reading1|Playing1){
    if("read" in o){
        o.read();
    }else{
        o.play();
    }
}
let r1:Reading1={
    read(){
        return "I am reading a journal";
    }
}
let p1:Playing1={
    play() {
        return "I am playing chess";   
    }
}
console.log(p1);


//tsconfig.json - where all dependencies are stored
//1)How to create
// tsc --init
// tsc - this will compile all the files together
// tsc --watch: will see the changes automatically that you will make to your code
