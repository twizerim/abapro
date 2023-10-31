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

function show(){
    const usersTable=document.querySelector(".get-users").style.display="block"
}