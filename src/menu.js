let menuhome=document.getElementById("menuhome")
menuhome.addEventListener("click",hoy)
let elementosmenu=document.getElementById("namenu")
export function hoy(){
    if(elementosmenu.style.display=='none'){
        elementosmenu.style.display='flex'
    }else{
        elementosmenu.style.display='none'
    }
}