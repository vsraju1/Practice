// datatypes
//Prinitive data types => normally 7 types

// 1. "string", 2. number, 3. boolean, 4. symbol, 5. bigInt, 6. undefined and 7. null

//1. "string" //strings are written in betwenn double quotes => "something"
var name = "raju" // var is a variable to hold some text or number or boolean or undefined or null
const email = "r@gmail.com" //const is same as variable, we connot change it once defined.

//2. number it has no quotes just have to type the number
var age = 24 

//3. boolean true or false
var havingAccount = true 

//4. symbol
var newName = Symbol('123');
const numbersOftime = Symbol('12345'); 
console.log(newName == numbersOftime); 

//5. bigInt  //java script accepts only certain range of number if it is biiger number then use n at last of number
const newNumber = 123823447834987200n

//6. undefined //we can just create a variable and set its to value to undefined to assign the value later
let city;

//7. null 
let disease = null //when console.log it it returns object as datatype


//reference(non-primitive) datatypes
//1. array,2. object,3. function

//1. array //it holds multiple types of data defined by square brackets []
let names = ['raju', 24, 'alwal']

//2. object //it holds keys and values
let empName = {
    emp1 : 'raju',
    age : 24,
    city : 'alwal'
}

//3.function //set of instruction or code
 function addition(a,b){
    return a+b;
 }



