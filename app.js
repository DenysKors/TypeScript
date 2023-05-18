var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function sumNumbers(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(sumNumbers(Number(input1.value), Number(input2.value)));
});
