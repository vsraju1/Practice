//object destructuring

//we cannot always use dot to access keys so..

const ddestructuring = {
    name: "raju",
    id: 12345,
    emial: "raju@gmail.com",
    belongsToCity: "hyderabd"
}

//accessing a value in a normal way
console.log(ddestructuring.name)

//accesing a value after destructuring
const {name} = ddestructuring //destructuring syntax
console.log(name)

//renaming with destructuring
const {belongsToCity: city} = ddestructuring //belongToCity is being replaced with city
console.log(city)