//******Type conversion in java script *//
//1. Implicit type conversion -> automatically done by JS engine according to need of given operation during execution time.
// ->  automatically done by JS engine according to need of given operation during execution time.
//** It is also called type coercion */
//example 1
let num = 2 + 3 + 'Apple'
console.log(num);// output :- 5Apple
// here 2+3 are number and Apple is a string and in this case number are automatically converted into string. and the output gives in concat mode.







//2.=> Explicit type conversion
// manually done by programmer or  developed at time of writing the code.

// eg. Explicit type conversion is used to:
//1. Change the data type of a value to match the requirements of a function or operation.
//2. Convert between different numeric types (e.g., integer to floating-point).
 //  Type of explicit:-
//      value to string - // syntax -> String(Value), Value.toString()- these are the two way used to convert value to string.
    // number to string:- example
    // let num1 = 25;
    // let Str = String(num1)
    // let Str2= num1.toString() // output - string 25
    // console.log( typeof Str2, Str2); // output:- string 25
    




//      Value to Numuber - // Syntax -> Number(Value)
    // it"s have two type
//    1.> string to numbers
// let name = 'Apple'
// console.log(name);
// let conv = Number(name)
// console.log(typeof conv);// output:- convert string
//     2.> boolean to number
// let bool = true
// console.log(typeof Number(bool)); // output :- number






//      Value to Boolean- // syntax -> Boolean(value)
// let bool = false
// let con = String(bool)
// console.log(typeof bool)
// console.log(bool);




//  value to boolean
//1.> string to boolean 
// let Name = "gulshan"
// console.log(typeof Boolean(Name)); // output boolean

//2.> number to boolean
// let num1 = 52
// let num2 = Boolean(num1)
// console.log(typeof Boolean(num1)); // boolean
// console.log(num2); // out :- true*



// *truthy and falsely

// here is a concept called truthy and false, 
//hence every string, number, integer gives truthy(true) value expect 0 when it's convert into boolean.
// 0,-0, null, undefine gives falsely value












