const p =document.getElementById('pwd')
const f=document.getElementById('fname')
const l=document.getElementById('lname')
const form=document.getElementById('rform')
const errorElement=document.getElementById('err')

form.addEventListener('submit',(e) =>{
    let messages=[]
    if(p.value==='' || p.value==null){
        messages.push("**Enter valid password ")
    }
    if(l.value==='' || l.value==null){
        messages.push("**Enter valid Last Name")
    }
    if(f.value==='' || f.value==null){
        messages.push("**Enter valid first name ")
    }
    if(messages.length>0){
        e.preventDefault()
        errorElement.innerText=messages.join('\n')

    }

})