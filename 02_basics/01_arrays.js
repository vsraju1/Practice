//declaring arrays
let names = ["raju","kamal","chotu","pavan"]

console.log(names) //prints an array
console.log(names[1]) //prints an element holding 1 indexig(indexing starts at 0)

//another way to creat an array
let classes = new Array('first', "second","third") //no need to use brackets when using this syntax
console.log(classes)

console.log(names.push("shravan")) //add shravan string in the end of the array
console.log(names)
console.log(names.pop()) //delets the last element from the array
console.log(names)
names.unshift("Gowtham") //add an element at start of an array
console.log(names) 
names.shift() //delets the first element of an array
console.log(names)

console.log(names.includes("raju")) //it checks the string raju returns boolean true of false
console.log(names.indexOf("kamal")) //gets the index of string kamal //if it is not there then it returns -1

const array = [1,2,3,4,5,6,7]
console.log("A "+array);
const newArray = array.slice(1,3) //it gets the elements of index from 1-3(not including 3 index)
console.log(newArray)
const newArray1 = array.splice(1,3) //it completely removes the elements of 1-3 index(including 3 index)
console.log(newArray1)
console.log(array)