let rose  =  70;
let lily = 50;
let tulip = 120;
let roseUnitPrice = 8;
let lilyUnitPrice = 10;
let tulipUnitPrice = 2;
let x = roseUnitPrice * rose;
let y = lilyUnitPrice * lily;
let z = tulipUnitPrice * tulip;

console.log("Rose - unit Price:", roseUnitPrice, ", quantity:", rose, ", value:", roseUnitPrice * rose);
console.log("Lily - unit Price:", lilyUnitPrice, ", quantity:", lily, ", value:", lilyUnitPrice * lily);
console.log("Tulip - unit Price:", tulipUnitPrice, ", quantity:", tulip, ", value:", tulipUnitPrice * tulip);

console.log("Total:", x + y + z);

/* Correct Answer which is more readable, maintainable, and scalable.
let rosePrice = 8;
let lilyPrice = 10;
let tulipPrice = 2;

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
*/