


let username=document.getElementById("username")
let email=document.getElementById("email")
let password=document.getElementById("password")
let Confrimpassword=document.getElementById("password")
let form=document.querySelector("form")

let users=JSON.parse(localStorage.getItem("users")) || []


form.addEventListener("submit",(e)=>{
    e.preventDefault()

    let user={
        names:username.value,
        email:email.value,
        password:password.value,
        confrimpassword:Confrimpassword.value,
       
    }
    if(users.find((titi)=>titi.email==email.value)){
        alert("user already exist")
    }else{
    users.unshift(user)
    const tipe=JSON.stringify(users)
    localStorage.setItem("users",tipe)
    alert("user successfuly created")
    } 
})