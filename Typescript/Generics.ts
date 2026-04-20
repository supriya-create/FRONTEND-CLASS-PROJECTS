export{}
function takeValue<T>(val:T):T{
    return val;
}
let a1 = takeValue("Supriya");
let a2 = takeValue(1);

function takeValue1(val:any):any{
    return val;
}
let a3 = takeValue1("abc");
let a4 = takeValue1(10);


function pairValue<T,Y>(a:T, b:Y):[T,Y]{
    return[a,b];
}
console.log(pairValue(1, "hello"));
console.log(pairValue("hello", 10));

function getValue<T>(arr:T[], index:number):T{
    return arr[index];
}
console.log(getValue([1,2,3,4,5], 2));

interface Demo<T>{
    value:T;
}
let a: Demo<string> = {
    value:"Supriya"
};

