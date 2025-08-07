const rosePrice = 8;
const lilyPrice = 10;
const tulipPrice = 2;

let numberOfRoses = 70;
let numberOfLilies = 50;
let numberOfTulips = 120;

let rosesValue = rosePrice * numberOfRoses;
let liliesValue = lilyPrice * numberOfLilies;
let tulipsValue = tulipPrice * numberOfTulips;

let total = rosesValue + liliesValue + tulipsValue;
console.log("Rose – unit price:", rosePrice, ", quantity:", numberOfRoses, ", value:", rosesValue);
console.log("Lily – unit price:", lilyPrice, ", quantity:", numberOfLilies, ", value:", liliesValue);
console.log("Tulip – unit price:", tulipPrice, ", quantity:", numberOfTulips, ", value:", tulipsValue);
console.log("Total: ", total);

numberOfRoses = numberOfRoses - 20;
numberOfLilies = numberOfLilies - 30;

rosesValue = rosePrice * numberOfRoses;
liliesValue = lilyPrice * numberOfLilies;
tulipsValue = tulipPrice * numberOfTulips;

total = rosesValue + liliesValue + tulipsValue;

console.log("Rose – unit price:", rosePrice, ", quantity:", numberOfRoses, ", value:", rosesValue);
console.log("Lily – unit price:", lilyPrice, ", quantity:", numberOfLilies, ", value:", liliesValue);
console.log("Tulip – unit price:", tulipPrice, ", quantity:", numberOfTulips, ", value:", tulipsValue);
console.log("Total: ", total);

/* 
Question 2: Modify the code from the previous example.

Assume that the prices of flowers will be constant (they will not change). 
Declare and initialize the remaining variables in the same way as in the previous example. 
Display all the gathered information in the console. Now decrease the number of roses by 20 and lilies by 30.

Display all the collected information in the console again.
*/