const accountId = 1122;
let accountemail = "hasn@gamil.com";
var accountpassword = "2121";
accountCity = "bijp";
let accountState;


// accountId = 2; // not allowed
accountemail = "sasa@gmail.com"
accountpassword = "21";
accountCity = "sa"

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accountemail,accountpassword,accountCity,accountState])