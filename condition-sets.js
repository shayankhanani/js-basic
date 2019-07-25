var age;
var country;

age = parseInt(prompt("What is your age", 18));
country = prompt("From where you belong", 'Pakistan');

if (age >= 18 && country === "Pakistan"){
    alert("You are Welcome!");
}
else if(age <= 18 || country === "Pakistan"){
    alert("Welcome Kiddo!")
}
else{
    alert("Additional confirmation required!");
}