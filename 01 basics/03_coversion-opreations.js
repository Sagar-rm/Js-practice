let score = undefined

console.log(typeof score);
console.log(typeof (score))

let valueInNumner = Number(score);
console.log(typeof valueInNumner)
console.log(valueInNumner)

// "32" => 32
// "32as" => NaN
// true => 1 false => 0
// undefined => NaN

let isLoggedIn = null
let booleanIsLogged = Boolean(isLoggedIn );
console.log(booleanIsLogged)

// 1 => true 0 => false
// "" => false
// "Sagar" => true

let someNumber = 2;
let stringNumber = String(someNumber);
console.log(stringNumber)
console.log(typeof stringNumber)