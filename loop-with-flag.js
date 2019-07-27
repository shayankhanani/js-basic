var popCities = 'Islamabad';
var genCities = ['London','New York','Karachi', 'Barcelona', 'Shanghai', 'Moscow'];

var found = false;

for(i=0; i <= genCities.length; i++){
    if (popCities === genCities[i]){
        found = true;
        console.log(genCities[i] + ": is one of the Most populated city");
        break;
    }
}
if(found === false){
    console.log("No one is the Most populated city");
}