// let myArr = [25, 65, 58, 48 ,55 ]
// console.log(myArr)
// let length = myArr.length
// // indexing .. it is concept where we can give id to a value. it start with 0.
// // eg.
// console.log(myArr[0]);// out 25
// console.log(length);

// console.log(typeof myArr);// out object
// nested array
    let arr = [2,6,['apple','orangs']]
    //console.log(arr)
    console.log(arr[2][1]);// out:- oranges.
    console.log(arr[2][0]);// out :- apple.
    // example :- 
    let class10 = [10,11,'Rahul','anaa','shubham'];
    let class11 = [12,13, 'anjali', 'ankita', 'anayana'];
    
    const allstudent = class10.concat(class11)
    console.log(allstudent);
    
  
    // one more concept is that is used to extract the elements from the array.
    // example
    const all_member = [...class10,...class11]
    console.log(all_member);
// one more concept is used to convert the element of an subarray and make a new single array.
const arr2 = [1,2,3,4,[5,6,[7]],8]
const all = arr2.flat(Infinity)
console.log(all);/* out:- [
    1, 2, 3, 4,
    5, 6, 7, 8
  ]*/
// here is another concept where string converted into array.
const Test = ('apple');
console.log(Test);
const str = Array.from(Test)
console.log(str); // out :- [ 'a', 'p', 'p', 'l', 'e' ]
console.log(str[1]);//out :- p

