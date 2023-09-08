let name = "raju"
let age = 24
let email = "raju@google.com" //in the past strings typed in this way
console.log("Hello my name is "+name +" and my age is "+ age+"." ) //this is not a modern way to use strings
console.log(`Hello mu name is ${name} and my age is ${age}. `) //modern way to use strings //but both are same

let name1 = new String('v shanmukha raju') //string are going to like object or an array
console.log(name1.charAt(0)); //so we can get indexes //by using methods we can fetch a character at certain position
console.log(name1.includes('sh')); //checking whether 'sh' is in name1 or not
console.log(name1.length) //gets the legnth of the name1
console.log(name1.split(" ")) //gets name1 in an array form, splits by space passes in method
console.log(name1.slice(2)) //gets the ramaining text after the 2 index position //it can take negative indexing
console.log(name1.substring(2,11)) //gets the substring from specified indexes //it doesn't takes negative indexing


let name2 = new String("     ss raju      ")
console.log(name2.trim()) //remove extra spaces or we trim by passing parameters
console.log(name2.replace('ss', 'vs')) //replaces ss with vs
console.log(name2.replace('ss', 'vs').trim()) //replcess ss with vs and also does remove spaces(trim)