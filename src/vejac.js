export let tudoAqui=[document.getElementById("sobre-home"),document.getElementById("funcionalidades-home"),document.getElementById("beneficios-home"),document.getElementById("contato-home")]
let escreverAqui = document.getElementById("esc-aqui")


export function escreva(){
  escreverAqui.innerHTML=` `
    escreverAqui.innerHTML=`    
    <section id="sobres">
    <div class="container">
      <h2>O que é a IA Gemini?</h2>
      <p id="textop">A IA Gemini é uma plataforma de inteligência artificial poderosa e acessível que permite que você automatize tarefas, otimize processos e tome decisões mais inteligentes.
        Com recursos avançados de aprendizado de máquina e processamento de linguagem natural, a IA Gemini pode ser aplicada a diversos setores,
        desde marketing e vendas até finanças e manufatura.</p>
    </div>
  </section>`;
  let sobre=document.getElementById("sobre");
  let puxando = document.getElementById("textop")
  function apareca(){
    sobre.style.backgroundColor="#052159"
    sobre.style.boxShadow="4px 4px 12px var(--cor2)"
    }
    function puxa(){
      puxando.style.left="0px"
      puxando.style.color="black"
    }
    setTimeout(apareca,300)
    setTimeout(puxa,300)

}
export function escreva2(){
  escreverAqui.innerHTML=` `
    escreverAqui.innerHTML=`    
    <section id="funcionalidades">
      <div class="container">
        <h2>Funcionalidades</h2>
        <ul id="listinha">
          <li>Análise de dados e geração de relatórios</li>
          <li>Automação de tarefas repetitivas</li>
          <li>Chatbots e atendimento ao cliente</li>
          <li>Reconhecimento de imagem e vídeo</li>
          <li>Previsão e análise de tendências</li>
          <li>E muito mais!</li>
        </ul>
      </div>
    </section>`;
  let sobre=document.getElementById("funcionalidades");
  let puxand= document.getElementById("listinha")
  function apareca(){
    sobre.style.backgroundColor="#052159"
    sobre.style.boxShadow="4px 4px 12px var(--cor2)"
  }
  function puxarei(){
    puxand.style.left="0px"
    puxand.style.color="black"
  }
  setTimeout(apareca,300)
  setTimeout(puxarei,600)
}
export function escreva3(){
  escreverAqui.innerHTML=` `
    escreverAqui.innerHTML=`    
    <section id="beneficios">
      <div class="container">
        <h2>Benefícios</h2>
        <ul id="lista">
          <li>Aumento da produtividade</li>
          <li>Redução de custos</li>
          <li>Melhoria na tomada de decisões</li>
          <li>Novos insights de negócios</li>
          <li>Vantagem competitiva</li>
        </ul>
      </div>
    </section>`;
  let sobre=document.getElementById("beneficios");
  let puxand=document.getElementById("lista")
  function apareca(){
    sobre.style.backgroundColor="#052159"
    sobre.style.boxShadow="4px 4px 12px var(--cor2)"
  }
  function puxarei(){
    puxand.style.left="0px"
    puxand.style.color="black"
  }
  setTimeout(apareca,300)
  setTimeout(puxarei,600)
}

export function escreva4(){
  escreverAqui.innerHTML=` `
    escreverAqui.innerHTML=`    
    <section id="contato">
    <div class="container">
      <h2>Entre em contato</h2>
      
      <p>Converse com nossos especialistas e saiba como a IA Gemini pode transformar seu negócio.</p>
      <form action="#">
        <input type="text" placeholder="Nome">
        <input type="email" placeholder="Email">
        <textarea placeholder="Mensagem"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  </section>`;
  let sobre=document.getElementById("contato");
  
  function apareca(){
    sobre.style.backgroundColor="#052159"
    sobre.style.boxShadow="4px 4px 12px var(--cor2)"
    }
    setTimeout(apareca,300) 
}
