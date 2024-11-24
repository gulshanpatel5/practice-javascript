// Game of date function
// Note: Here is some important point to remember in java script, date is being calculated from jan 01 1970 

let date = new Date() //creation date

// console.log(date);// it shows current date with some additional info. out:- 2024-09-26T13:38:15.063Z */

// console.log(date.toString()); // out :- Thu Sep 26 2024 19:08:15 GMT+0530 (India Standard Time)

console.log(date.toLocaleString()); // out :- 26/9/2024, 7:10:19 pm


/* The code `let d = Date.now()` is creating a new variable `d` and assigning it the value returned by
the `Date.now()` method. This method returns the number of milliseconds elapsed since January 1,
1970, 00:00:00 UTC. The `console.log(d)` statement then prints out this value, which represents the
current timestamp in milliseconds. */
let d= Date.now()
console.log(d);
// output:- 727358284661; it shows the duration since jan 01 1970 to till now in millisecond





