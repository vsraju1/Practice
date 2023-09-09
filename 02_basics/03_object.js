//can be define by literals or constructers

//singleTon

//objects literal //defining an object

const EmpDetails = {
    name: "Raju",
    "full name": "Vasamsette Shanmukha Raju",
    age: 24,
    email: "rajunarayana1248@gmail.com"
    
} 

//accessing objects
//two ways to access the objects
//using dot(.)
console.log(EmpDetails.name) //not a good practice when we have key with spaces

//using square brackets
console.log(EmpDetails["name"]) //so we can include spaces

//changing values
EmpDetails.email = 'raj@google.com'
console.log(EmpDetails)

//freezing //if you want that no one should change
// Object.freeze(EmpDetails)
// EmpDetails.email = 'sadkfjl@saldkj.com'  //it do not show the error but still it has no effect
console.log(EmpDetails)

//adding symbol to the object as a value 

//XXXXXXXXXXXXXXXXXXXXXXXX----- Might ask you in the interview -------------XXXXXXXXXXXXXXXXXXXXXXXXXXXXX

const mySym = Symbol("123") 

// EmpDetails.mySym = "thajdf" 
// console.log( typeof EmpDetails.mySym)  //output is string but it should be symbol

 //correct way to add a symbol

const NewObject = {
    [mySym] : "this is a symbol"
}
console.log(NewObject)

//passing a function in a object
NewObject.greeting = function(){
    console.log("Hi this is V Shanmukha Raju")
}
console.log(NewObject.greeting()) 




