if (dayOfWk ==="Sat" || dayOfWk === "Sun") {
    alert("Whoopee!");
}
else if (dayOfWk === "Fri") {
alert("TGIF!");
}
else {
alert("Shoot me now!");
}

switch(dayOfWk) {
    case "Sat" :
        alert("Weekend to Code!!");
        break;
    case "Sun" :
        alert("Holiday to Code");
        break;
    case "Fri" :
        alert("Thank God, Weekends are back!");
        break;
    default :
        alert("Shoot me now!");
}