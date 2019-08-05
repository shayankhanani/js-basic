var d = new Date();
var dob = new Date("September 12, 2019");

var dtime = d.getTime(); 
var dobtime = dob.getTime(); 

var msDiff = dobtime - dtime;
console.log(msDiff);

var dateDiff = msDiff/(1000*60*60*24);
console.log(dateDiff);
dateDiff = Math.floor(dateDiff);
console.log(dateDiff);

