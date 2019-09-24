var internetPlan1 = {
    name: "Basic",
    price: 1000,
    speed: '2Mbps',
    discountMonths: [6, 8]
};

function calcAnnual() {
    var prc = 0;
    for(var i = 0; i < internetPlan1.discountMonths.length; i++){
        prc += internetPlan1.price * 0.2;
    }
    return (internetPlan1.price * 12) - prc ;
}

console.log(calcAnnual());

function calcAnnualWithNewDiscount(initDiscount) {
    var prc = 0;
    for(var i = 0; i < internetPlan1.discountMonths.length; i++){
        prc += internetPlan1.price * initDiscount;
    }
    return (internetPlan1.price * 12) - prc ;
}
console.log("");
console.log(calcAnnualWithNewDiscount(0.1));

var internetPlan2 = {
    name: "Basic",
    price: 1200,
    speed: '4Mbps',
    discountMonths: [9, 11],
    annual: 
    function(initDiscount) {
        var prc = 0;
        for(var i = 0; i < this.discountMonths.length; i++){
            prc += this.price * initDiscount;
        }
        return (this.price * 12) - prc ;
    }
};

console.log("");
console.log(internetPlan2.annual(0.05));
console.log(internetPlan2);
