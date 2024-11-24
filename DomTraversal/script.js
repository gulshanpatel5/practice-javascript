const grandparent = document.querySelector(".grand-parent")

// console.log(grandparent);// it shows all the details about that particular div.
const next = document.getElementById("next")
 
/** traversal  have three types.
 * 
 *   downwards 
 *   upwards
         note:- here upwards and downward means hexarchy. eg. from parents to child and many more.
 *   sideways // and sideways means access from one sibling to another sibling.
 * 
 */
//downward traversal :- means travel from parent to child element. eg.

// console.log(grandparent.children[0]);// array[] helps to get 0ht index of children.
// eg.in this case there are two children of grandparent:- i)parent-1 and ii)parent-2

// and here we get access of parent-1.

// upward:- access parent from their child.

// console.log(child.parentElement); // it gives the parent element.

// console.log(child.parentElement.parentElement);// it gives grand parent by manually.
// console.log(child.closest(".grand-parent"));
console.log(Child.previousElementSibling);




 
