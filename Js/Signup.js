
const form = document.querySelector(".form-signup")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    const firstname = document.querySelector("#firstname").value
    const lastname = document.querySelector("#lastname").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    const confirmpassword = document.querySelector("#confrimpassword").value

    const data={
        firstname,lastname,email,password,confirmpassword
    }
    const postman={
        method:"Post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }
    fetch(`https://rich-tan-dhole-cap.cyclic.app/rice/user`,postman)
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