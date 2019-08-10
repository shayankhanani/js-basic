var a = 9

function sum() {
    var b = 9 + a;
}

console.log(a); //global scope of variable a will allow to access its value
console.log(sum); 
//console.log(b); not defined error because of local scope inide function sum

// var theSum = 1000;
// function addNumbers() {
//     var theSum = 2 + 2;
// }
// console.log(addNumbers());

// var theSum = addNumbers();
// function addNumbers() {
//     var theSum = 2 + 2;
// }