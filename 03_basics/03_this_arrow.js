//this refers to current object or function

const newobject ={
    name: "Raju",
    email: "raju@gmail.com",
    welcomeMsg: function (){
       console.log(`${this.name} , welcome to javascript`)
    }
}

// newobject.welcomeMsg()
// newobject.name = "Pavan"
// newobject.welcomeMsg()

// function chai(){
//     console.log(this)
// }

// chai()

// const chai = function (){
//     let username = "raju"
//     console.log(this.username)
// }

// const chai = () => {
//     let username = "raju"
//     console.log(this)
// } //in the arrow function you cannot use this word

// chai()

// const addTwo = (num1,num2) => { //explicit return when we use carly braces
//     return num1+num2
// }

const addTwo = (num1,num2) => (num1 + num2) //implicit return when dont use return word //use  round brackets

console.log(addTwo(2,3))