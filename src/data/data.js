const data = [{
        "id": "Router",
        "title": "Router",
        "Descricao": `
        
        <h2></h2>
        <img src='./src/img/router2.png' class='img-descricao'>   
  
        <span>A função 'Router' é responsável por controlar a navegação em um aplicativo web utilizando o conceito de roteamento. Ela recebe um objeto 'Pages' como parâmetro, que contém as definições das páginas do aplicativo.
        
        A função 'Router' possui várias subfunções e é usada para realizar as seguintes tarefas:  </span>
        
        <h2>CUSTOMTAGS</h2><span> Essa função é responsável por processar os elementos HTML personalizados (tags) presentes nas páginas. Ela substitui os elementos personalizados por suas respectivas implementações e adiciona os atributos correspondentes.</span>
        <img src='./src/img/customtag.png' class='img-descricao'  width='550'>  
        <h2>RENDER</h2> <span>Essa função renderiza a página selecionada com base no nome da página fornecido. Ela obtém o HTML e o estado da página selecionada do objeto 'Pages' e chama a função 'customTags' para processar os elementos personalizados, se houver.</span>
        <img src='./src/img/render.png' class='img-descricao' width='550'>  
        <h2>STATEURL</h2> <span>Essa função extrai o nome da página atual da URL e retorna o nome da página correspondente com base no objeto 'Pages'. Se a URL não corresponder a nenhuma página existente, a página de erro será retornada.</span>
        <img src='./src/img/stateurl.png' class='img-descricao' width='550'>  
        <h2>DEBOUNCE</h2> <span>Essa função é um utilitário para criar uma versão "debounce" de uma função, ou seja, ela limita a frequência com que a função é executada, evitando chamadas excessivas.</span>
        <img src='./src/img/debounce.png' class='img-descricao'>  
        <h2>ERRO-PAGE</h2> <span>Essa função gera o conteúdo HTML para exibir a página de erro, caso uma página inválida seja solicitada. Ela cria links para todas as páginas disponíveis no objeto 'Pages'.</span>
        <img src='./src/img/router2.png' class='img-descricao'>  
        <h2>ROUTER-STATE</h2> <span>Essa função é responsável por verificar o estado atual do roteamento e chamar a função 'render' para exibir a página correspondente.</span>
        <img src='./src/img/router2.png' class='img-descricao'>  
        <h2>HANDLECLCK</h2> <span>Essa função lida com os cliques nos links do aplicativo. Ela intercepta o evento de clique, impede o comportamento padrão do link, atualiza a URL utilizando o histórico de navegação e chama a função 'routerState' para renderizar a página correspondente.</span>
        <img src='./src/img/router2.png' class='img-descricao'>  
        <h2>RESUMO</h2> <span>A função 'Router' é configurada para responder aos eventos de popstate (quando ocorre uma alteração no histórico de navegação) e cliques nos links do aplicativo. Ela é chamada inicialmente para configurar o estado inicial do aplicativo com base na URL atual e também é chamada sempre que ocorre uma alteração na URL.
        
       Em resumo, a função 'Router' é responsável por controlar a navegação entre as páginas do aplicativo, atualizando dinamicamente o conteúdo da página com base na URL e nos links clicados pelo usuário.</span>`,
       
        "contribuidores": [{
          "Alifer":"https://github.com/AliferSouza/"
        }]   
      },
      {
        "id": "useApi",
        "title": "useAPI",
        "Descricao": ` <img src='./src/img/router2.png' class='img-descricao'> `,     
        "contribuidores": ["programação", "viagens", "esportes"]    
      }
    ];


    
export { data };
    