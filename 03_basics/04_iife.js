//Immediately Invoked Function Expressions(IIFE)

//Syntax

//named IIFE
(function chai() {
    console.log(`DB CONNECTED`)
})();

//IIFE does not know when to stop its execution so, whenever we use two or more IIFE's we need to put semicolon at the end of the IIFE function, otherwise it will throw error



//unnamed IIFE
((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})("chai")




