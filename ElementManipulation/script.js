const divEle = document.querySelector(".container")
// console.log(divEle);

const paraEle = document.createElement("p")
paraEle.textContent = "This the example using paragraph"
paraEle.style.fontSize = 50 +"px"
paraEle.classList.add("para")



// divEle.appendChild(paraEle)


/** Way to add Element 
 
 * appnedChild() //  its add the element at the "end". and its take only one element at time

 * append() :- //  it is generally same as the append child, but it take two elements.*/

// divEle.append("cat",paraEle)


/*
 * prepend() // it add element in the div as first child.
 * before()// while it create element before the div.
 * after()
*/
// divEle.prepend("orange")// it's add element in initial line.
// divEle.before(paraEle)// it helps to add paragraph before div.
divEle.after(paraEle)// it create element just after the div.
// paraEle.remove()// it remove the paraEle in a single line.
// divEle.remove()
