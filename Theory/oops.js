// ** OBJECT LITERALS

const user = {
    username: "gulshan",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("we got the details from database");
        // console.log(`username: ${this.username}`); //here 'this' is used to select the current context.
        console.log(this); //  here is the value of current context:- 
       /* {
            username: 'gulshan',
            loginCount: 8,
            signedIn: true,
            getUserDetails: [Function: getUserDetails]
        } */
                
    }

}
console.log(user.username); // this simply select username from user.
console.log(user.getUserDetails()); // if we use the user than it may happen that multiple user will present. hence "this" keyword is used to select that particular context.

//--- Constructor function---// -> it allow to create multiple instances by using single object/object literals.

// const promiseOne = new Promise() // here "new" keyword is a constructor function. and this helps to make new context.
// const date = new Date()
// /e.g
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this

}
const userOne = new User("Gulshan",12, true)
const userTwo = new User("ChaiAurCode",11,false)
console.log(userOne);// it simply show the details in other instance. here this is copy of that function, that's why we use the constructor function.
//  out:-  User { username: 'Gulshan', loginCount: 12, isLoggedIn: true }
 /// note:- eg. it means that constructor function gives every time a new copy of that context and in this context do what ever you want.
 // npte:- some points on new keyword.
/* 1. new keyword create empty object is called instances. eg { } empty object.
 step 2. A constructor function call using new keyword.
 step 3. this keyword aur multiple argument will we injected.
 step 4. display.

 */
