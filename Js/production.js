function submit(){
    let Email=document.querySelector(".a").value
    let Age=parseInt(document.querySelector(".e").value)
    if (Age>=21&&Age<=80    ){
        let Fedback=("you are allowed to join us ok log-in")
        document.querySelector(".fedback").innerHTML=Fedback
        document.querySelector(".fedback").style.color="green"
    }
    else if(Age>=80){
        let Fedback=("you are adult there is not permition to join us")
        document.querySelector(".fedback").innerHTML=Fedback
        document.querySelector(".fedback").style.color="yellow"
    }
    else{
         let Fedback=("you are not allowed to join us")
         document.querySelector(".fedback").innerHTML=Fedback
         document.querySelector(".fedback").style.color="red"
        }
}
function Send(){
    let Names=document.getElementById("s").value
     let Age=parseInt(document.getElementById("t").value)
    let message=document.querySelector("#of").value
    const form=document.querySelector("form").value
    if (Age>=21){
        let Fedback=("Message sent")
        document.querySelector(".delived").innerHTML=Fedback
        document.querySelector(".delived").style.color="green"
    }
    else{
         let Fedback=("Message not sent")
         document.querySelector(".delived").innerHTML=Fedback
         document.querySelector(".delived").style.color="red"
        }  
}