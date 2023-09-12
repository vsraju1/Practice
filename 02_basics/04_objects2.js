//singleton defining objects
const newObject = new Object();
// console.log(newObject)
newObject.name = "raju"
newObject.email = "raju@gmail.com"
newObject.id = "123abc"
newObject.isLoggenIn = false
// console.log(newObject)

//declaring objects within an object
const empDetails = {
    id : "123abc",
    email: "sdf@gmail.com",
    fullName: {
        name:{
            fistName: "raju",
            secondName: "shanmukha"
        }
    }
}

const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = { 4:"a", 5:"b"}
// const obj3 = {obj1, obj2}
// console.log(obj3)
const obj3 = Object.assign(obj1, obj2) //being pushed into obj1 but not to a new object
const obj4 = Object.assign({},obj1,obj2 ) //now it will create a new object
console.log(obj4)
const obj5 = {...obj1,...obj2}
console.log(obj5)

//array with objects 
const array1 = [
    {
        name: "raju",
        id : 12
    },
    {
        name : "raju",
        id: 12
    }
]

console.log(array1[0].name) //accessing elements

//getting key or values as an array
const keys_Values_AsArray = {
    name:"raju",
    id:12345,
    email:"sdfkj@gamil.com",
    address:"alwal"
}
console.log(Object.keys(keys_Values_AsArray)) //gets all keys in the form an array

console.log(Object.values(keys_Values_AsArray)) //gets all the values as an array

console.log(Object.entries(keys_Values_AsArray)) //gets array within array of both keys and values as an array

console.log(keys_Values_AsArray.hasOwnProperty("email")) //gets boolean values if it has that propety true or false


