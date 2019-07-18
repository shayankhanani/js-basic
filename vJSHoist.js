function scene1(){
    x = 5;
    console.log(x);
    var x;
}
function scene12(){
    var x;
    x = 5;
    console.log(x);
}

function scene123(){
    var a = 3;
    var c = 9;
    console.log(a * c);    
}

function scene1234(){
    var a = 3;
    console.log(a * c); 
    var c = 9;
}

scene1(); 
/*function shows hoisting behaviour of JS
during variable declaration the result is 5*/
scene12();
/*function shows same result althoygh there is
very little differnce the result is same as above*/
scene123();
/*function shows non hoisting behaviour of JS
during variable initializing the result is 27*/
scene1234();
/*function shows non hoisting behaviour of JS during
variable initializing the result is NaN as interpreter
doesnt recognize befor initializing*/

