import libPrix from '../data/libPrix.json' assert {type: 'json'};
export default async function Home() {
  prix.$("style").innerHTML += `
  .container-home{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    background-color: rgb(255, 0, 183);
    color: aliceblue;
  }
  .container-home img{
    max-width: 400px;;
    width: 80vw ;
    border-radius: 10px;
    border: 1px solid #fff;
    padding: 1px;
  }
  .container-home a{
    color: #fff;
    text-decoration: none;
  }
  .container-home div{
    max-width: 350px;;
    width: 80vw ;
    background: #fff;
    color: #000;
    padding: 10px;
    text-align: center;
    border-radius: 10px;
    font-size: 12px;
  }
  .ir-doc{
    background: #fff;
    color: #04040a;
    font-size: 20px;
    border-radius: 10px;
    padding: 10px;
  }
  .container-home div span{
    color: rgb(231, 79, 68);
  }






  `;



  const state = async () => {

    const a = await  prix.useApi("../../db/db.json")


  }
  

  const html =  () => {
    return` 
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

    `}
    return {
    state,
    html
    }
  


}
