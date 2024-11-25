// This is the basic concept of promise.
/*Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. 
It allows you to handle asynchronous code more efficiently by providing methods to handle the result or error once the operation is complete. */

const promiseOne = new Promise (function(resolve, reject){
    //do an async task
    //db call, cryptography, network
    // eg.  here we can run a text using setTimeout function
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()// here this resolve function run after promise one.
    },1000)

})
promiseOne.then(function(){
    console.log("Promise consumed");
    

})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
        
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    

    
})  //here we are not store value in variable. Hence we directly use it.
// output :- Async task is completed
/*Promise consumed
Async task 2
Async 2 resolved*/


// we can also pass the parameter in the resolve we get as output as in resolve.
//eg.
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Lucky", lastname: "Patel"})
    },1000)// it run after 1 second.

})
promiseThree.then(function(user){
    console.log(user);
    
})// out :- { username: 'Lucky', lastname: 'Patel' }

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true // out :- { username: 'Suraj', Girlfriend: 'NAndani' }
        
        if (!error) {
            resolve({username: "Suraj", Girlfriend: "NAndani"})
            
        } else{
            reject('Error: Larki nakhre waliii,  haha...')
        }

    },1000)
})

    // here call back function.
// a term callback hell is created here , & we have to fixed them.

promiseFour.then(function(user){
    console.log(user);
    return user.username
    
}).then(function(username){
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
})
.finally(()=> console.log("promise is either resolved or rejected")); // here we can directly used arrow function which is same as upper one.

// if error true than out:- Error: Larki nakhre waliii,  haha...
// here is the last final concept is used just for a confirmation is the promise is resolve or rejected.

const PromiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true // out :- { username: 'Shubham', Girlfriend: 'Unknown' }
        
        if (!error) {
            resolve({username: "Shubham", Girlfriend: "Unknown"})
            
        } else{
            reject('Error: open book....')
        }

    },1000)

})
// here async concept is used it means that jab tak upper wala kaam nahi ho gaa code uske aahe nahi baddhe gaaa...
/* The comment `// then catch v yahi kaam karta hai...` is written in Hindi and it translates to "then
catch also works the same way". It is explaining that the `catch` method in a Promise chain works
similarly to the `then` method, but it specifically handles errors or rejections that occur in the
Promise chain. If any error occurs in the Promise chain, it will be caught and handled by the
`catch` method. */

// then catch v yahi kaam karta hai...

// async function consumePromiseFive() {
//     const response = await PromiseFive // await means ruko phale upper wala kaam ho gaa phir next kaam ho gaa...
//     console.log(response);
    
    
// }
// consumePromiseFive() // here in this case yaha rejection hua hai than it can't handel because promise five upper ese hi reject hua ha than it considered error code.(out:- Error: open book....) ager ham upper se true kara de ya resolve pass kare than it work fine.

// es problem ko ham log try and catch se solve kate hai ..
// ye same syntax try catch ka sare jagha valid ho gaa...
async function consumePromiseFive() {
    try {
        const response = await PromiseFive // await means ruko, phale upper wala kaam ho gaa phir next kaam ho gaa...
    console.log(response);
        
    } catch (error) {
        console.log(error);
        
        
    }  
    
}
consumePromiseFive()
// output :- Error: open book....
// in this scenario we have two option either we use try catch aur we use .then .catch.


/**now the main thing is started here we can learn ,where is practical use case of what we learn till now and how they implanted in real life.  */
// yaha pai hamlog ese try catch se kar rahe hai.. age ese .then .catch se kyia jaye gaa...
async function getAllusers() {
   try {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    const data =  await response.json() //  here await is used because response ko jab json mai convert karte hai to wo kuch time leta hai eslyie ham us mai await laghte hai taki jab tak upper wala complete nahi hota tum wahi ruko...

    console.log(data);
   } catch (error) {
    console.log("E", error);
    
    
   }
   
}
getAllusers()

// 
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
   return response.json()
})// this is run when code is resolve.
.then((data)=>{     // this then is used to handel upper then kyo ki wo ek value return kar raha hai.
    console.log(data);
    
})

.catch((error)=> console.log(error))// this is run when code is fail.
// here in this case the good thing is that we are free from try catch aur wait karne ka problem khatam kyo ki hame pata hai ki jab tak .then complete nahi ho gaa .catch nahi kamm kare gaa means phale code ko check kyia jaye ga ki ye sahi hai ya nahi ager haa to thik nahi to wo reject hojaye gaa means catch mai jaye gaa...
