"use strict";
const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
function sumNumbers(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(sumNumbers(Number(input1.value), Number(input2.value)));
});
let age;
let userName;
let toggle;
let empty;
let notInitialize;
let callback;
let anything;
let some;
some = "Text";
let str;
if (typeof some === "string") {
    str = some;
}
let person;
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
const page = {
    load: Status.READY,
};
if (page.load === Status.LOADING) {
    console.log("Страница загружается");
}
if (page.load === Status.READY) {
    console.log("Страница загружена");
}
let param;
let specParam;
function showMessaage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
class House {
    constructor(key) {
        this.key = key;
        this.door = false;
        this.tenants = [];
    }
    comeIn(person) {
        if (!this.door) {
            throw new Error("It is not your door");
        }
        this.tenants.push(person);
        console.log("You are in");
    }
}
class Key {
    constructor() {
        this.signature = Math.random();
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
class MyHouse extends House {
    openDoor(key) {
        if (key.getSignature() !== this.key.getSignature()) {
            throw new Error("This key is not allowed");
        }
        return (this.door = true);
    }
}
const doorKey = new Key();
const randomHouse = new MyHouse(doorKey);
const randomPerson = new Person(doorKey);
randomHouse.openDoor(randomPerson.getKey());
randomHouse.comeIn(randomPerson);
//# sourceMappingURL=app.js.map