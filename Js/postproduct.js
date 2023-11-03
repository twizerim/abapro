
const form = document.querySelector(".post")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    const productname=document.querySelector("#name").value
    const productimage=document.querySelector("#image").value
    const produceAt=document.querySelector("#proAt").value
    const epiresAt=document.querySelector("#expAt").value

    const data={ productname,productimage,produceAt,epiresAt}
    
    const postman={
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "auth-token":token
        },
        body:JSON.stringify(data)
    }

    fetch(`https://rich-tan-dhole-cap.cyclic.app/rice/product`,postman)
    .then((resp)=>{
        return resp.json()
    })
    .then((data)=>{
        alert(data.message)
    })
    .catch((err)=>{
        alert(err)
    })
})