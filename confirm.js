//this file shows JS Function and Confirm Function

function confirm_box(){
    confirm("This is JS confirm box"); //confirm box provide two options ok/cancel
}

function confirm_box_behaviour(){
    var ret = confirm("Are you sure you want to leave");
    alert(typeof ret); // confirm box return boolean value.
}