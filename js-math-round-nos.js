var sum = 0;
var ages = [19,21,28,25,29,16,13];
for(var i = 0; i<ages.length; i++){
    sum += ages[i];
}
console.log("The sum of ages is: " + sum);
console.log("The average of ages is: " + sum/ages.length);
console.log("Rounding Averge of Age is : "+ Math.round(sum/ages.length)); 
console.log("Rounding Up Averge of Age is : "+ Math.ceil(sum/ages.length)); 
console.log("Rounding Down Averge of Age is : "+ Math.floor(sum/ages.length)); 