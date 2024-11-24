const btnEle = document.querySelector(".btn")
const inputEle = document.querySelector("#input-field")
const taskEle = document.querySelector('.list-item')

btnEle.addEventListener('click',()=>{
    //console.log("clicked...");
   // console.log(inputEle.value);
    
    if (inputEle.value==="") {
        alert("please add your task first")

        
    }else{
        let listEle = document.createElement("li")
        listEle.txtContent = inputEle.value;
        taskEle.appendChild(listEle)
        
        let spanEle = document.createElement("span")
        spanEle.textContent = "\u00d7"
        listEle.appendChild(spanEle)
    }
    inputEle.value = ""
      
})
taskEle.addEventListener("click", (e)=>{
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked")

    }

})