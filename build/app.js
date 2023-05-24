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
let arrNum;
//# sourceMappingURL=app.js.map