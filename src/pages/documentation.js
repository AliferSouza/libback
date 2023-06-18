import { data } from "../data/data.js"
import {$, $$, useApi} from '../lib/index.js';


export default async function Dock() {
  const a = await useApi("https://libback.vercel.app/api")
  console.log(a)
  const state = () => {
    $(".container-home-lateral").addEventListener('click', e=>{
      const stateValor = e.target.innerHTML
      var obj = data.find(function(objeto) {
        return objeto.id === stateValor
    });


    $$({"#Title": obj.title,
     "#Descrição": obj.Descricao,
     "#Contribuidores": obj.contribuidores})
    })

  }
  const html = () => {
    return ` 
    <div class="container-doc"> 
      <div class="container-home-lateral"> 
      <div>
         <h4>Documetação</h4>
          <h6>Router</h6>
          <h6>useLocation</h6>
          <h6>useSearch</h6>
          <h6>useNavigate</h6>
          <h6>useLocation</h6>
          <h6>useApi</h6>  
      
        </div>
    </div> 

    <div class="container-home-principal"> 
     <h1 id="Title">Title</h1>
     <h5 id="Descrição">Descrição</h5>
     <img>
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
