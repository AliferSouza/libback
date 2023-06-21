import { data } from "../data/data.js"

export default async function Dock(props) {
  const state = () => {
    prix.$("#selectMenu").addEventListener('click', e =>{     
      const stateValor = e.target.innerHTML  
      console.log(stateValor)
      var obj = data.find(function(objeto) {
        return objeto.id === stateValor
    });


     prix.$("#Title", obj.title)
     prix.$("#render", obj.Descricao)


      

    })


  }


  
  const html = (stateProps) => {
    const dadosVerificados = stateProps || data[0]

    return ` 
    <div class="container-doc">

      <div class="container-doc-lateral"> 
      <div id="selectMenu">
         <h4>Documetação</h4>
          <h6>Router</h6>
          <h6>useLocation</h6>
          <h6>useSearch</h6>
          <h6>useNavigate</h6>
          <h6>useLocation</h6>
          <h6>useApi</h6>        
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

    `
  }

  return {
    html,
    state,
  }
}
