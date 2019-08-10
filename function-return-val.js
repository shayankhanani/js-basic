function calcTot(merchTot) {
    var orderTot;
    if (merchTot >= 100) {
        orderTot = merchTot;
    }
    else if (merchTot < 50.01) {
        orderTot = merchTot + 5;
    }
    else {
        orderTot = merchTot + 5 + (.03 * (merchTot - 50));
    }
    return orderTot;
}
var merchTotal = 125;
var merch= calcTot(merchTotal);
console.log("Order Total of " + merchTotal + " Merchandise is: "+merch);

merchTotal = 25; 
merch = calcTot(merchTotal);
console.log("Order Total of " + merchTotal + " Merchandise is: "+merch);

merchTotal = 75; 
merch = calcTot(merchTotal);
console.log("Order Total of " + merchTotal + " Merchandise is: "+merch);