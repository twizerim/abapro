
const form = document.querySelector(".member-login")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const email=document.querySelector("#email").value
    const yourpassword=document.querySelector("#password").value

    const data={email,yourpassword}

    const postman={
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }

    fetch(`https://rich-tan-dhole-cap.cyclic.app/rice/member/login`,postman)
    .then((resp)=>{
        return resp.json()
    })
    .then((data)=>{
        if(data.token){
            const token=data.token
            localStorage.getItem("token",token)
            if(data.data.member.role=="admin"){
                alert("admin")
                window.location.href="./admin.html"
            }else{
                alert("member")
                window.location.href="./member.html"
            }
        }
        else{
            alert(data.message)
        }
    })
    .catch((err)=>{
        alert(err)
    })
})