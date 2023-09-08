const number = 123 //one way to define a number //don't know sometimes it can be a string
const newNumber = new Number(123.5978) //another way to define a number //it is difinitely a number

console.log(number.toFixed(2)) //it will have 2 decimals //expected output will 123.00
console.log(newNumber.toExponential()) //The toExponential() method converts a number into an exponential notation:
console.log(newNumber.toPrecision(3)) //it will returns number with 3 digits
console.log(newNumber.toPrecision(4)) //it will returns number having 4 digts and rounds off


// ---------------------------Maths-------------------------------------//

//there are certain operations that are stored as Math object like sqrt, round, floor, ceil, random


console.log(Math.random()) //gets a random number between 0.1 to 0.9
console.log(Math.random() +1) //gets a random number between 1.1 t0 1.9
console.log(Math.round(Math.random() +1)) //round the number 
console.log(Math.floor(Math.random() +1)) //if output is 1.9 it returns 1 as the output since it is floor
console.log(Math.ceil(Math.random() +1)) //if output is 1.1 it returns 2 as the output
console.log(Math.max(1, 5,199,4,7)) //find maximum number in the given inputs or numbers
console.log(Math.abs(-6)) //returns the absolute value if negative then it returns removes it.
