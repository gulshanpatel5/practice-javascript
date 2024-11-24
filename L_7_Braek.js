// break statement
// for( let i = 0; i<=10;i++){
//     if (i === 4) {
//         break;
//     }
//     console.log(i);
    
// }
// hence output is :- 0123

// eg. Break Statement is used to exit the code permanently. Jumps out of a loop.

// continue statement
// for(let i = 0; i<=10;i++){
//     if (i===5) {
//         continue;
//     }
//     console.log(i);
    
// }
// here 5 will be skip because continue statement is executed.
// continue:- helps to skip that particular condition 

//continue used to skip the current iteration and continues the code from the next iteration. Jumps over a iteration in loop.
// example with nested for loop
for(let i = 1; i<= 3;i++){
    for(let j = 1; j <= 3; j++){
        if (i==j) {
            continue;//  this continue helps to remove the equal value without any matha-pachi:
            
        }
        console.log(i,j);
        
    }
}