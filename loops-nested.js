function printASTR(){
    var output = "";
    for(i=1; i<=5; i++){
        for(j=1;j<=i; j++)
        {
            output +='*';
        }
        console.log(output);
        output = "";
    }
}

printASTR();

function NameComb(){
    var fName = ['Ben','John','Ellie','Mark'];
    var lName = ['Khan','Malik','Zai'];
    for(i = 0; i <fName.length; i++){
        for(j = 0; j<lName.length; j++){
            console.log(fName[i] + " " + lName[j]);
        }
        
    }
}

NameComb();