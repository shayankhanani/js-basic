// the file shows function in JS and Prompt Function in JS
//prompt allows user to input anything in modal

function prompt_box(){
    var name = prompt("Enter your name please");
    alert(name);
}

function prompt_behaviour(){
    var age = prompt("Enter your age please");
    alert(typeof age); //typeof helps to determine type of variable
}

function prompt_arg(){
    var age = prompt("Enter your age please",18); //second prompt arguments show default value shown in textbox
    alert(typeof age); //typeof helps to determine type of variable
}