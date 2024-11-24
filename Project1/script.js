const button = document.querySelectorAll('.box')
const body = document.querySelector("body")

button.forEach(function(box) {
    box.addEventListener('click' ,function(color){
        if(color.target.id === 'box1'){
            body.style.backgroundColor = '#131842'

        }
        if(color.target.id === 'box2')
        {
            body.style.backgroundColor = '#E68369'

        }
        if(color.target.id === 'box3')
            {
                body.style.backgroundColor = '#ECCEAE'
    
            }
            if(color.target.id === 'box4')
                {
                    body.style.backgroundColor = '#FBF6E2'
        
                }
                if(color.target.id === 'box5')
                    {
                        body.style.backgroundColor = '#EF5A6F'
            
                    }
    })
    
})