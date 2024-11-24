// recursion means function call in the same function. eg.
// function recursive(){
//     console.log("This is an example of recursion");
//     recursive()
// }
// recursive()
// base condition
/*
function-> function ->function-> function ->function-> function ->function-> function ->function-> */
// Example of recursion
// note:- recursion and loop are almost same. they all are use in scenario based condition.

// function coding(num){
//     if(num === 0){
//         console.log("coding done");// here 0 is valid for 1 time, hence it's print coding done only 1 time.
//         return
//     }else{
//         console.log("coding not done.");
//         coding(num-1) // here 9 to 1 all are not valid
        
//     }
// }
// coding(9)


// here we understand by the example of factorial eg.//
function factorial(n){
    // base condition
    if(n===1){
        return 1
    }
    let fact = n*factorial(n-1)
    return fact
}
console.log(factorial(5));
/*here we know some conditions of 5!
 5*4! = 5!
 4*3! = 4!
 3*2! = 3!
 2*1! = 2!
 1*0! = 1! 



*/