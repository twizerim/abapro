
const form = document.querySelector(".message-sent")


form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const names=document.querySelector("#s").value
    const email=document.querySelector("#t").value
    const age =document.querySelector("#p").value
    const message=document.querySelector("#of").value
   

    const data={
        names,email,age,message
    }
    const postman={
        method:"POST",
        headers:{
            "content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }

    fetch(`https://rich-tan-dhole-cap.cyclic.app/rice/message`,postman)
    .then((resp)=>{
        return resp.json()
    })
    .then((data)=>(
        alert(data.message)
    ))
    .catch((err)=>{
        alert(err)
    })
})