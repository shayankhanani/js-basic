var i = 0;
var popCities = 'Shanghai';
var genCities = ['London','New York','Karachi', 'Barcelona', 'Shanghai', 'Moscow'];

do{
    if (popCities === genCities[i]){
        console.log(genCities[i] + ": is one of the Most populated city");
    }
    i++
}while(i<=5)