
const Getmessage=document.querySelector(".mesage-sent")


fetch(`https://rich-tan-dhole-cap.cyclic.app/rice/message`,postman)
.then((resp)=>{
    return resp.json()
})
.then((data)=>{
    data.datas.map((mge)=>{
        Getmessage.innerHTML+=`
        <h2>${mge.sendAt}</h2>
        <p>${mge.email}</p>
        <span>
            <a href="">Read...</a>
        </span>
        `
    })
})
