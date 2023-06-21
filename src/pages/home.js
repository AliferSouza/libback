import libPrix from '../data/libPrix.json' assert {type: 'json'};
export default async function Home() {


  const state = () => {




  }
  

  const html = () => {
    return ` 
    <div class="container-home"> 
      <h1>${libPrix[0].title}</h1>
      <h4 style="white-space: pre-line; max-width: 350px; width: 80vw; text-align: center;">${libPrix[0].Descricao}</h4>
      <img src="${libPrix[0].img}">
      <a href="${Object.values(libPrix[0].contribuidores[0])}" target="_black">
      <h4>${Object.keys(libPrix[0].contribuidores[0])}</h4>
      </a>
      <div>
      <h4 style="white-space: pre-line;">
       Na imagem você tem acesso global as funções da <span>LIB.</span>
       Dê um <span>console.log(prix)</span> e verá as funções disponíveis...
       Exemplo de uso:  <span>prix.Router</span>
      </h4>
      </div> 
      <a class="ir-doc" style="color: #000" href="/#/doc/">Documetação</a>

   
  </div> 

    `
  }

  return {
    html,
    state,
  }
}
