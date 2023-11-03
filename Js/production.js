function submit(){
    let Email=document.querySelector(".a").value
    let Age=parseInt(document.querySelector(".e").value)
    let click=document.querySelector(".akabuto")
    if (Age>=21&&Age<=80){
        let Fedback=("you are allowed to join us click button")
        document.querySelector(".fedback").innerHTML=Fedback
        document.querySelector(".fedback").style.color="green"
        click.style.display="block"
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
function mess(){
    const messageall=document.querySelector(".allmessage-sent").style.display="block"
}
function product(){
    const Produt=document.querySelector(".post-product").style.display="block"
}