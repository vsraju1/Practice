// date and time has been taken count from 01 jan 1970 utc(the epoch)

//to create a date variable
let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toLocaleDateString())

let newDate = new Date(2023, 0, 1) //year, month, day
let newdate1 = new Date("01-01-2023")
console.log(newDate)
console.log(newdate1)
console.log(myDate.toTimeString())

//time calculated in milliseconds from 01 jan 1970

let anotherDate = Date.now()
console.log(anotherDate) //gives output in milliseconds from 01 jan 1970
console.log(newdate1.getTime()) //gives output from newDate(2023, 0,1)