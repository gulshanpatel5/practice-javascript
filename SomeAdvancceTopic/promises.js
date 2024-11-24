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
        //Suraj
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
promiseFour.then(function(user){
    console.log(user);
    return user.username
    
}).then(function(username){
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
})
// if error true than out:- Error: Larki nakhre waliii,  haha...