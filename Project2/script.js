const imgcontainer = document.querySelector(".img-container")

const btnE1 = document.querySelector(".btn")

btnE1.addEventListener("click", ()=>{
    imgnum = 10
    updateImg()
    
})

function updateImg() {
    for(let i =1; i< imgnum; i++){
        const image = document.createElement("img")
    image.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*1000)}`
    imgcontainer.appendChild(image)
    } 
}
