const password=document.getElementById('pwd')
const form=document.getElementById('form')
const errorElement=document.getElementById('error')

form.addEventListener('submit',(e)=> {
    let messages=[]
    if(password.value==='' || password.value==null){
        messages.push("**Enter appropriate password")
    }
   
    if(messages.length>0){
        e.preventDefault()
        errorElement.innerText=messages.join('\n')

    }
    
})