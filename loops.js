var popCities = 'Shanghai';
var genCities = ['London','New York','Karachi', 'Barcelona', 'Shanghai', 'Moscow'];

for(i=0; i <= 5; i++){
    if (popCities === genCities[i]){
        console.log(genCities[i] + ": is one of the Most populated city");
    }
}