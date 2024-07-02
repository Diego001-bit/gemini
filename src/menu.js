let menuhome=document.getElementById("menuhome")
menuhome.addEventListener("click",hoy)
let elementosmenu=document.getElementById("namenu")
export function hoy(){
    if(elementosmenu.style.display=='flex'){
        elementosmenu.style.display='none'
    }else{
        elementosmenu.style.display='flex'
    }
}