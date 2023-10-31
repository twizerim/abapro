
const form = document.querySelector(".form-login")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    const data={
        email,password
    }
   
    const postman={
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }

    fetch(`https://rich-tan-dhole-cap.cyclic.app/rice/user/login`,postman)
    .then((resp)=>{
        return resp.json()
    })
    .then((data)=>{
        
        if(data.token){
            const token=data.token
            localStorage.setItem("token",token)
            if(data.data.user.role=="admin"){
            window.location.href="./admin.html"
        }else{
            window.location.href="./user.html"
        }
    }else{
        alert(data.message)
    }
    })
    .catch((err)=>{
        alert(err)
    })


})