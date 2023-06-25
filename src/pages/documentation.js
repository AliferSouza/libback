import { data } from "../data/data.js";

export default async function Dock(props) {
  prix.$("style").innerHTML += `
  span{
    font-family: Arial, Helvetica, sans-serif;
  }
 
  .container-doc{
    width: 100vw;
    height: 100vh;
    display: flex;
    background: #000;
    color: aliceblue;
  }
  .container-doc-lateral{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width:  25%;
    height: 100vh;
    background-color: rgb(252, 252, 252);
    color: #000;
    gap: 5px;


  }
  .container-doc-lateral h4{
  color: #000000;

  }
  .container-doc-lateral h6{
    display: flex;
    align-items: center;
    flex-direction: column;
  
    width: 90%;


  }

  .container-doc-lateral h5{    
    width: 100%;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 5px 15px 5px 5px;
    margin: 0 0 5px 0;
    cursor: pointer;
    font-size: 10px;
    font-family: Arial, Helvetica, sans-serif;

  }



  .container-doc-principal{
    width: 75%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: aliceblue;
    background-color: rgb(0, 0, 0);
  }
  .container-doc-principal div{
    width: 90%;
    height: 85%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    margin: 10px;
    padding: 10px;
    background: #000000;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.2);
    border-radius: 10px;
    color: #888888;
    font-size: 14px;
    overflow-y: auto;

  }
  .container-doc-principal div h2{
    color: #f03a3a;
  }
  .container-doc-principal div span{
    width: 500px;
    background: #000000;
    border-radius: 8px;
    padding: 10px;
    color: #f5f5f5;

  }
  #descrição{
    display: flex;
  }

  .img-descricao{
    width: 500px;
  }

  @media (max-width: 800px) {
  .container-doc-lateral{
    width:20%
  }
  #selectMenu{  
    width: 10vw;
    margin-left: -6vw
  }
  .container-doc-lateral h4{
    width: 10vw;
    font-size: 9px;  
  }
  .container-doc-lateral h6{
    width: 10vw; 
    font-size: 9px;  

  }
  .img-descricao{
    min-width: 200px;
    width: 54vw;
  }
  .container-doc-principal div span{
    min-width: 200px;
    width: 54vw;
  }
}




  `;

  const state = () => {
    prix.$("#selectMenu").addEventListener("click", (e) => {
      const stateValor = e.target.innerHTML;

      var obj = data.find(function (objeto) {
        return objeto.id === stateValor;
      });

      console.log(obj);

      prix.$("#Title", obj.title);
      prix.$("#render", obj.Descricao);
    });
  };

  const html = (stateProps) => {
    const dadosVerificados = stateProps || data[0];
    const html = Object.keys(prix).map(key => `<h5>${key}</h5>`).join("");
      console.log(prix)


    return ` 
    <div class="container-doc">

      <div class="container-doc-lateral"> 
      <div id="selectMenu">
         <h4>Documetação</h4> 
         <h6>${html}</h6>        
        </div>
    </div> 

    <div class="container-doc-principal"> 
    <h1 id="Title">${dadosVerificados.title}</h1>     
      <div id="render">     
          ${dadosVerificados.Descricao}
      </div>
      <h6 id ="Contribuidores">Contribuidores</h6> 
    </div> 

  </div> 

    `;
  };

  return {
    html,
    state,
  };
}
