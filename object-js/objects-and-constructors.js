function Plan(name, price, speed, discountMonths){
    this.name = name;
    this.price = price;
    this.speed = speed;
    this.discountMonths = discountMonths;
    this.annual = 
    function(initDiscount) {
        var prc = 0;
        for(var i = 0; i < this.discountMonths.length; i++){
            prc += this.price * initDiscount;
        }
        return (this.price * 12) - prc ;
    };
}

var plan1 = new Plan("Basic", 1000, "2Mbps", [5,8]);
console.log(plan1);
var annualPay = plan1.annual(0.05);
console.log("");
console.log(annualPay);