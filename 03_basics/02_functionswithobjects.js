//passing object as a parameter

const newObject = {
    name:"raju",
    id: 12345,
    email: "raju@gmail.com"
}

function getDetails(someObject){
    return `name is ${someObject.name}, id is ${someObject.id} and emial is ${someObject.email}`
}

console.log(getDetails(newObject))

//directly passing a object as an argument

function fetchDetails(anyObject){
    return `user name is ${anyObject.username} user since ${anyObject.year}`
}

console.log(fetchDetails({
    username:"raju",
    year: 2023
})) //directly passing an object


//passing arrays in functions
const newArray = [1,2,3,4,5]

function fetchArrayDetails(anyarray){
    return `the first number is ${anyarray[0]} and the last number is ${anyarray[anyarray.length -1]}`
}

console.log(fetchArrayDetails(newArray)) //passing an array as an argument //or we can directly pass an array