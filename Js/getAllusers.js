
const token=window.localStorage.getItem("token")
const table =document.querySelector(".table-users")
const spinner=document.querySelector(".spinner")
const messageall=document.querySelector(".allmessage-sent")
spinner.style.display="block"



const postman={
    headers:{
        "auth-token":token
    }
}

fetch(`https://rich-tan-dhole-cap.cyclic.app/rice/user/get`,postman)

.then((resp)=>{
    return resp.json()
})
.then((data)=>{
    data.datas.map((user,index)=>{
        spinner.style.display="none"
        messageall.style.display="none"
        table.innerHTML+=`
        <tr>
        <td>${index +1}</td>
        <td>${user.firstname}</td>
        <td>${user.lastname}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
        <td>${user.role}</td>
        <td>${user.signedAt}</td>
        <td><button class="update" style="color:green">Update</button></td>
        <td><button class="delete" style="color:red">Delete</button></td>
        </tr>
        `
    })
})