import { hoy } from "./src/menu.js";
import { escreva,escreva2,escreva3,escreva4,tudoAqui} from "./src/vejac.js";

tudoAqui[0].addEventListener("click",escreva)
tudoAqui[1].addEventListener("click",escreva2)
tudoAqui[2].addEventListener("click",escreva3)
tudoAqui[3].addEventListener("click",escreva4)
hoy()
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("meuTitulo").style.color= "black";
    document.getElementById("meuTitulo").style.left="0px";
  });