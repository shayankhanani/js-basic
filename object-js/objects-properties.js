var deal1 = {
    starter : "soup",
    drinks: '250ml Coke',
    price: 800
};
deal1.main = ["Beef Biryani","1 Chicken Tikka","1 paratha"];
deal1.membersOnly = true;
deal1.name = "Launch Fest";
deal1.endDate = undefined;
console.log(deal1);
delete deal1.endDate;
console.log(deal1);
exist = "endDate" in deal1;
console.log(exist);