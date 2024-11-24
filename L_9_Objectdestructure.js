const myDetails = {
    Student_name : "Gulshan Patel",
    course : "CSBS",
    collage_name : "Aot"

}
    //console.log(myDetails.collage_name);

 // syntax of de-structure;

 const {collage_name} = myDetails // if we wants to update the variable name we simply 

 const {collage_name:collage} = myDetails


console.log(collage_name); //out: Aot
console.log(collage);// out :Aot both the values are same.

