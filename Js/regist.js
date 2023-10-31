
const form = document.querySelector(".member-signup")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    const names=document.querySelector("#username").value
    const email=document.querySelector("#email").value
    const nationalId=document.querySelector("#nation").value
    const nationality=document.querySelector("#nationality").value
    const location=document.querySelector("#location").value
    const yourSkills=document.querySelector("#skills").value
    const yourpassword=document.querySelector("#password").value

    const data={names,email,nationalId,nationality,location,yourSkills,yourpassword}
    const postman={
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }

    fetch(`https://rich-tan-dhole-cap.cyclic.app/rice/member`,postman)
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