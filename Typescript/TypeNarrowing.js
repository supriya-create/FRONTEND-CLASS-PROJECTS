"use strict";
//type narrowing means reducing a broad type into a more specific type based on condition
//type of narrowing
//1)typeof narrowing
function takeInput(val) {
    if (typeof val === "string") {
        return val.toUpperCase();
    }
    return val * 4;
}
console.log(takeInput(11));
console.log(takeInput("Supriya"));
//2)instanceof narrowing
class Reading {
    read() {
        console.log("I am reading a book");
    }
}
class Playing {
    play() {
        console.log("I am playing chess");
    }
}
function chooseHobby(hobby) {
    if (hobby instanceof Reading) {
        hobby.read();
    }
    else {
        hobby.play();
    }
}
let h1 = new Reading();
chooseHobby(h1);
//3)Truthiness Narrowing
function takeNullValue(val) {
    if (!val) {
        console.log("Please enter a string");
    }
    else {
        console.log(val);
    }
}
takeNullValue("");
