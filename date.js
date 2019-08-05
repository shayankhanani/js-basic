var rightNow = new Date();
console.log(typeof(rightNow));
var dateString = rightNow.toString();
console.log(dateString);
var theDay = rightNow.getDay();
console.log(theDay);

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var nameDay = dayNames[theDay];
console.log(nameDay);