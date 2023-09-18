const accountId=1234
let accountEmail="ayush@gmail.com"
var accountPassword= "12345"
accountCity="jaipur"  //not a good practice
let accountstate      //the log will display undefined as it doesnt contain any value

//accountId=2         // not allowed(const cant be changed)
accountEmail="yush@mail.com"
accountPassword= "45745"
accountCity="bangalore"



console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountstate])