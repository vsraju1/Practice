//Imedietely invoked function expressions

(function chai(){ //direct function

    //named IIFE
    console.log('This is an IIFE1')
})();

( (name)=>{ //arrow function
    console.log(`${name} , this is IIFE2`)
})("raju")