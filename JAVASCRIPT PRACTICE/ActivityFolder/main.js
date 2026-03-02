
// import { average, avg, max } from "./logic.js";
// console.log(avg(1,2,3,4,5));
// console.log(max([8,3,6,8,9]));

import { average, bigger } from "./logic.js";
let student = {
    name1: "Supriya",
    rollno: 1,
    course: "React"
}

const {name1, rollno, course} = student;

console.log(name1, rollno, course);

let arr1 = [2,3,4,5,6]
console.log(average(...arr1));   //use of spread operator

console.log(bigger(3,6,7,9,1));



