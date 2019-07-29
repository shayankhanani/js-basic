var input = prompt("Enter your first name", 'Shayan');
var inputLength = input.length;
for(i=0; i<inputLength; i++){
    if(input.slice(i,i+2) === " "){
        alert("No Spaces please");
        break;
    }
}