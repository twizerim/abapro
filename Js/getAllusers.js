
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
        <td><button class="update" id="${user._id}" style="color:green">Update</button></td>
        <td><button class="delete" id="${user._id}" style="color:red">Delete</button></td>
        </tr>
        `
    })

    const buttoselector =document.querySelectorAll(".update")
    const formla=document.querySelector(".form-updata")
    for(let i=0;i<buttoselector.length;i++){
        buttoselector[i].onclick=function(){
            formla.style.display="block"

            let tr=this.parentElement.parentElement
            let td=tr.getElementsByTagName("td")
            let id=buttoselector[i].getAttribute("id")
            role.value=td[5].innerHTML

            formla.addEventListener("submit",()=>{
                const datas={
                    role:role.value
                }
                const postman={
                    method:"PATCH",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(datas)
                }

                fetch(`https://rich-tan-dhole-cap.cyclic.app/rice/user/update/${id}`,postman)

                .then((resp)=>{
                    return resp.json
                })
                .then((datas)=>{
                    alert(datas.message) 
                })
                .catch((err)=>{
                    alert(err) 
                    
                })
            }) 
        }
    }
})