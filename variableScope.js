// Initialize a global variable
var menu = "Continental";

function transform() {
  // Initialize a local, function-scoped variable
  var menu = "Fast Food";
  console.log(menu);
}

// Log the global and local variable
console.log(menu); //returns continental 
transform(); //returns Fast Food
console.log(menu); //returns continental