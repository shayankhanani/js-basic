var score = 0;
var answer = '';

answer = prompt("What is JS Hoisting");
if (answer === "JS Unique behaviour"){
    score +=10;
    alert("True");
}
else if(answer === "JS Error"){
    score += 0;
    alert("Its not JS Error but a behaviour");
}
else{
    score -= 5;
    alert("Wrong");
}