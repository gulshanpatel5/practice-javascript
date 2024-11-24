// example of object.
// let obj ={ 
//     key : 34,
//     key2: 45
    
// }
// console.log(obj);


//Example of Object
let myDetails = {
    name: "Gulshan",
    // here is concept of nested object
    stream: {

        course: "csbs",
        Batch: 2021

    },
    duration : 4,
    rollNo: 42
}
console.log(myDetails);


/*how to Access the object*/
// dot notation (.)
// bracket notation([" "])
// eg.
console.log(myDetails.name) // output ::- Gulshan
console.log(myDetails["duration"]); // out:- 4 
// updating 

myDetails.rollNo = 43
console.log(myDetails.rollNo);
// addition in the object
myDetails.LastName = "Patel" // here we enter the new key in the object.
console.log(myDetails);

// deletion 

delete myDetails.duration;
console.log(myDetails); // output:-  { name: 'Gulshan', stream: 'CSBS', rollNo: 43, LastName: 'Patel' }

// for Accessing the nested object keys
console.log( myDetails.stream.Batch);// output:- 2021



// decleration of object

const Apple = new Object();// singleton object -  when we make object through constructor,
const oranges = {} //  non singleton object - made from literals


console.log(Apple); // out :- {}
console.log(oranges) // out :- {}
// both are the declaration of object.

// adding two values os objects by using object spread.
 
const obj1 = {1:'a',2: 'b'}
 const obj2 = {2:'c',3:'d'}

const z = {obj1,obj2} 

console.log(z); //out - { obj1: { '1': 'a', '2': 'b' }, obj2: { '2': 'c', '3': 'd' } } here we face the problem 
// hence we used the object spreading
const obj3 = {...obj1,...obj2} //  it used the simply spread all values than after add all of them.

console.log(); // out:-  { '1': 'a', '2': 'c', '3': 'd' } output without any drama.












