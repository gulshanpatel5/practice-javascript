//  java Script have two types of scope.
// Global Scope :- 
    //  1. variable decleard outside any function or block have global scope.

    // 2. They are accessiable throught the entire script.
    


    // it's have also two more scope.
    //*Function Scope:-
    //eg. var - keyword
    //*Block Scope
    // eg. let and cont- keyword

// global Scope- example

var a = 23
function globalscope(){
    console.log(a)

}
globalscope()
console.log(a)// it means that global variable can access form any where in code.

//Local Scope->

// 1. Variable decleard within a function or block have local scope.
// 2.They are only accessible within that specific that specific function or block.
// eg. 
function localScope(){
    let b = 35
    console.log(b)
}
localScope()

// Function Scope:- 
//  1.> variables decleard with 'var' keyword have function scope, meaning they are only accessible within the function where they are defined.
//eg.  
function functionScope(){
    if (true) {
        var d= 89;
        console.log("inner d:- ",d)
    }
    console.log("outer a:- ",d);
    
}
functionScope()

// Block Scope:-

//1. Varibles decleard with 'let and const' have block scope.
//2. they are limited to block (enclosed by curly braces) in which they are defined.
//example with code:-
//
function blockScope(){
    if (true) {
        let f=  57;
        const g = 37;
        console.log("inner f:- ",f);
        console.log("inner g:- ",g);
    }
    //console.log("outer f:- ",f);// in block scope we can't acces the element afterb the block
    console.log("outer g:- ", g );
    
}
blockScope()