var pet = ['cat','dog','rabbit','parrot'];
//replace 3rd index element with specified data
pet.splice(3,1,'goat');
console.log(pet);
//adding after last element without removing
pet.splice(4,0,'parrot','cow');
console.log(pet);
//removing last two element
pet.splice(4,2);
console.log(pet);
