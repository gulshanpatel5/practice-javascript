const btnEle = document.querySelector(".btn")
const bodyEle = document.querySelector("body")

const divEle = document.querySelector(".intro")




// bodyEle.style.backgroundColor = "pink"
//console.log(btnEle);

// btnEle.style.backgroundColor = "yellow" 
// btnEle.style.Color = " red"
// btnEle.style.borderRadius = 10 + "px"

// classList

// here we can able apply all the proprieties which can we written in in css part// all proprieties can we access using classList

btnEle.classList.add("btn1")// multiple class can else written in this case.

/** here some important concept.
 * innerHTML 
 * outerHTML
 * textContent
 * innerText
 */

//innerHTML :-
console.log(divEle.innerHTML);
console.log(divEle.outerHTML);
console.log(divEle.textContent);
console.log(divEle.innerText);


// Attributes
/**
 * getAttribute
 * setAttribute
 * hasAttribute
 * removeAttribute
 
 */

let att = divEle.getAttribute("class")// gitattributes is used to get the elements of divEle and stored in a attribute.
// And it helps to manipulate by using variable att...
// console.log(att);

divEle.setAttribute(" id " , " intro2 ")// it's help to set the value

let att2 = divEle.hasAttribute("class")
console.log(att2);// its help to checked is there any attribute class is present or not.

divEle.removeAttribute("class")// it is used to remove the attribute class.




















