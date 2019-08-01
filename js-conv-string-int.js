var currentAge = prompt("Enter your age.", 18);
var yearsEligibleToVote = currentAge - 18;
alert(yearsEligibleToVote);
alert(typeof(yearsEligibleToVote)); //will show number as JS has converted it to number
alert(parseInt(yearsEligibleToVote));
alert(typeof(yearsEligibleToVote)); //will show number as JS has converted it to number

var profit = "190" - "130";
alert(profit);
alert(typeof(profit)); //will show number as JS has converted it to number

profit = "190" - "seventy";
alert(profit);
alert(typeof(profit)); //will show number a Not A Number

var result = "200" + 150;
alert(result);
alert(typeof(result)); //will show string as JS treating it string and concatenates two literals

