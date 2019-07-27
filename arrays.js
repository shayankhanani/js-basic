var citiesCode = ['KHI','LHE','ISB','UET','PEW'];
console.log(citiesCode[0]);
var mixedVal = [1, 'KHI', 'Karachi', 14910352];
console.log(mixedVal[0]+'. '+mixedVal[2]+ ' abbreviated as '
+ mixedVal[1] + ' has total population of ' + mixedVal[3] + ' according to 2017 census.');

//adding elements in existing array after its last element
citiesCode.push('LYP','SKZ','GWD','AAW');
console.log(citiesCode);
console.log("Element added at End of array");

//removing last element in existing array
citiesCode.pop();
console.log(citiesCode);
console.log("Element removed at End of array");
citiesCode.pop();
citiesCode.pop();
citiesCode.pop();
console.log(citiesCode);

//adding elements in existing array after before 1st element element
citiesCode.unshift('HDD');
console.log(citiesCode);
console.log("Element added at Beginning of array");

//removing 1st element in existing array
citiesCode.shift();
console.log(citiesCode);
console.log("Element removed at beginning of array");

