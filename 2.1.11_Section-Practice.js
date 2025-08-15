let b1 = true;
let b2 = Boolean(true);
console.log(`${b1} [${typeof b2}]`);

let n1 = 100;
let n2 = Number(200);
console.log(`${n1} [${typeof n2}]`);

let bi1 = 100n;
let bi2 = BigInt(200);
console.log(`${bi1} [${typeof bi2}]`); 

let s1 = "Hello";
let s2 = String("Hello");
console.log(`${s1} [${typeof s2}]`);

let u1 = undefined;
console.log(`${u1} [${typeof u1}]`);

console.log("-------------------------------------------------")

/*
Question 1: Write a code that will create variables and initialize them 
with values of Boolean, Number, BigInt, String, and undefined types using 
(when possible) literals and constructor functions.

Question 2: Print all values and all types of those values using console.log. 
Try to use string interpolation to display the value and type at the same time 
with a single console.log call, e.g. in the following form: 1000 [number].
*/

let b = Boolean( BigInt(Number("1234")));
console.log(`${b} [${typeof b}]`);

console.log("-------------------------------------------------")

/*
Step by Step Long Way:
let s = "1234";
let n = Number(s);
let bi = BigInt(n);
let b = Boolean(bi);
console.log(`${b} [${typeof b}]`);

Question 3: Carry out a chain of conversions: create a Boolean from a BigInt 
created from a Number that was created from a String. Start with the value 
"1234". Is it possible?
*/

let bo = true + false; // -> 1
console.log(`${bo} [${typeof bo}]`);

let nu = 10 + 10;
console.log(`${nu} [${typeof nu}]`);

let bi = 10n + 10n; // -> 20n
console.log(`${bi} [${typeof bi}]`);

let st = "Hello" + " World"; // -> 'Hello World'
console.log(`${st} [${typeof st}]`);

let un = undefined + undefined; // -> NaN
console.log(`${un} [${typeof un}]`);

console.log("-------------------------------------------------")

/*
Question 4: Try adding two values of the same type and check the result type. 
Try it for all primitive types.
*/

let BoNu = true + 10; // -> 11
console.log(`${BoNu} [${typeof BoNu}]`);
let BoSt = true + "World"; // -> 'trueWorld'
console.log(`${BoSt} [${typeof BoSt}]`);
let BoUn = true + undefined; // -> NaN
console.log(`${BoUn} [${typeof BoUn}]`);

// -- TypeError: Cannot mix BigInt and other types -- 

// -- undefined + other type is NaN --

console.log("-------------------------------------------------")

/*
Question 5: Try adding two values of different types and check the results.
*/

const str1 = 44 - "1";
console.log(str1); // -> 43 [number]
// or
const str2 = 42 + +"1";
console.log(str2); // -> 43 [number]

/*
Question 6: Try to modify the line const str1 = 42 + "1"; to get the result 43 (without removing the quotes around 1).
*/