function takeValue(val) {
    return val;
}
let a1 = takeValue("Supriya");
let a2 = takeValue(1);
function takeValue1(val) {
    return val;
}
let a3 = takeValue1("abc");
let a4 = takeValue1(10);
function pairValue(a, b) {
    return [a, b];
}
console.log(pairValue(1, "hello"));
console.log(pairValue("hello", 10));
function getValue(arr, index) {
    return arr[index];
}
console.log(getValue([1, 2, 3, 4, 5], 2));
export {};
