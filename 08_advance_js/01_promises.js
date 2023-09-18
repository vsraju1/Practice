
// Promise one
const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    //DB calls, cryptography, networkcall
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})


// Promise two ( without taking variable)
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

// promise 3
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({usernaame: "Raju", emial:"raju@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// Promise three closed

// Primise 4
const promiseFour = new Promise(function(resolve, reject){
   setTimeout(function(){
    let error = true
    if(!error){
        resolve({username: "kiran", password:"12345"})
    } else{
        reject("Error: Something went wrong")
    }
   },1000) 
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch(function(err){
    console.log(err)
})
.finally(() => console.log("The promise is either resolved or rejected!"))


// promise 5
const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javaScript", password: "123"})
        } else{
            reject("ERROR: JS went wrong!!")
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getALLUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error)
//     }
// }

// getALLUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

