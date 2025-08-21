//3.0.3 Arithmetic operators
const x = 5;
const y = 2;
console.log("addition: ", x + y); // -> 7
console.log("subtraction: ", x - y); // -> 3
console.log("multiplication: ", x * y); // -> 10
console.log("division: ", x / y); // -> 2.5
console.log("division remainder :", x % y); // -> 1
console.log("exponent: ", x ** y); // -> 25

console.log("-------------------------------------------------");

//3.0.4 Unary arithmetic operators
let str = "123";
let n1 = +str;
let n2 = -str;
let n3 = -n2;
let n4 = +"abcd";
 
console.log(`${str} : ${typeof str}`); // -> 123 : string
console.log(`${n1} : ${typeof n1}`); // -> 123 : number
console.log(`${n2} : ${typeof n2}`); // -> -123 : number
console.log(`${n3} : ${typeof n3}`); // -> 123 : number
console.log(`${n4} : ${typeof n4}`); // -> NaN : number

console.log("-------------------------------------------------");

//3.0.5 Unary increment and decrement operators
let m1 = 10;
let m2 = 10;

console.log(m1); // -> 10
console.log(m1++); // -> 10
console.log(m1); // -> 11

console.log(m2); // -> 10
console.log(++m2); // -> 11
console.log(m2); // -> 11

let m3 = 20;
let m4 = 20;

console.log(m3); // -> 20
console.log(m3--); // -> 20
console.log(m3); // -> 19

console.log(m4); // -> 20
console.log(--m4); // -> 19
console.log(m4); // -> 19

console.log("-------------------------------------------------");

//3.0.6 Compound Assignment Operators
let z = 10;
 
z += 2;
console.log(z); // -> 12
z -= 4;
console.log(z); // -> 8
z *= 3;
console.log(z); // -> 24
z /= 6;
console.log(z); // -> 4
z **= 3;
console.log(z); // -> 64
z %= 10;
console.log(z); // -> 4

console.log("-------------------------------------------------");