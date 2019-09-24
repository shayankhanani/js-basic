function Plan(name, price, speed, discountMonths){
    this.name = name;
    this.price = price;
    this.speed = speed;
    this.discountMonths = discountMonths;
}

Plan.prototype.annual = 
function(initDiscount) {
    var prc = 0;
    for(var i = 0; i < this.discountMonths.length; i++){
        prc += this.price * initDiscount;
    }
    return (this.price * 12) - prc ;
};

var plan1 = new Plan("Basic", 1000, "2Mbps", [5,8]);
var plan2 = new Plan("Streamer", 1200, "4Mbps", [3,9]);
var plan3 = new Plan("Master", 2000, "10Mbps", [1,7]);

var annualPay = plan3.annual(0.1);
console.log(plan2);
console.log("");
console.log(annualPay);

var checkProp = "annual" in plan3;
console.log("");
console.log(checkProp);

var checkProp = plan3.hasOwnProperty('annual');
console.log("");
console.log(checkProp);



