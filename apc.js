function alert_box(){
    alert("Hi! This is Alert Box")
}
function confirm_box(){
    var r = confirm("Are you want to leave this Page")
    if (r != true){
        alert("Carry On");
    }
    else{
        alert("Ok Bye!!");
    }
}
function prompt_box(){
    var who = prompt("Who are you?", "I am ..");
    if(who != null && who != " " ){
        alert("Yor are welcome " + who);
    }
    else{
        alert("Go Away! Spam.");
    }
}