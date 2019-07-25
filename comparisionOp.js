function equalityOp(){
    var a = 9;
    var b = "9";
    if(a===b){
        console.log("Condition True");
    }
    else{
        console.log("Data Mismatch");
    }
}
function less_than_Op(){
    var a = 9;
    var b = 88;
    if(a < b){
        console.log("Condition True");
    }
    else{
        console.log("Data Mismatch");
    }
}

function greater_than_Op(){
    var a = 9;
    var b = 10;
    if(a > b){
        console.log("Condition True");
    }
    else{
        console.log("Data Mismatch");
    }
}

function less_thanEq_Op(){
    var a = 9;
    var b = 9;
    if(a<=b){
        console.log("Condition True");
    }
    else{
        console.log("Data Mismatch");
    }
}
function greater_thanEq_Op(){
    var a = 9;
    var b = 18;
    if(a >= b){
        console.log("Condition True");
    }
    else{
        console.log("Data Mismatch");
    }
}

//calling functions
equalityOp(); // Return Data Mismatch
less_than_Op(); // Return Condition True
less_thanEq_Op(); // Return Condition True
greater_than_Op(); // Return Data Mismatch
greater_thanEq_Op(); // Return Data Mismatch
