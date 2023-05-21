var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function sumNumbers(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(sumNumbers(Number(input1.value), Number(input2.value)));
});
var age;
var userName;
var toggle;
var empty;
var notInitialize;
var callback;
var anything;
var some;
some = "Text";
var str;
if (typeof some === "string") {
    str = some;
}
var person;
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
var page = {
    load: Status.READY,
};
if (page.load === Status.LOADING) {
    console.log("Страница загружается");
}
if (page.load === Status.READY) {
    console.log("Страница загружена");
}
var param;
var specParam;
function showMessaage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
