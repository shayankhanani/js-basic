function tellTime(){
    var current = new Date();
    var theHour = current.getHours();
    var themin = current.getMinutes();
    console.log("The Time is: " + theHour + ":" + themin);
}

tellTime();
tellTime();