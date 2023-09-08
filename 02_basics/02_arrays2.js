//combining two arrays into an array

let mcu_heroes = ["thor","Iron man","Captain America","Ant-man"]

let dc_heroes = ["Batman","superman","Wonder Woman"]

//lets try push method
let all_heroes = mcu_heroes.push(dc_heroes)
console.log(mcu_heroes) // given out put an array inside an array

//lets try concat method
let new_heroes = mcu_heroes.concat(dc_heroes)
console.log(new_heroes) //works 

//lets try spread method 
let all_new_heroes = [...mcu_heroes,...dc_heroes] //you can give as many arrays you want after (...)
console.log(all_new_heroes)

//array inside an array within an array 
let array = [1,2,3,4,5,[1,2,3],4,5,6,7,[1,2,3,[1,2,3]]]
console.log(array.flat())

let name = 'raju'

//finding whether it is an array
console.log(Array.isArray(name)) //output is false becuase it is not an array

//converting to an array
let new_name = Array.from(name)
console.log(Array.isArray(new_name))
console.log(new_name)

//converting set of elements to an array
let num1 = 100
let num2 = 200
let num3 = 300
let all_Nums = Array.of(num1, num2, num3)
console.log(all_Nums)