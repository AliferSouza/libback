const data = [
  {
    id: "Router",
    title: "Router",
    Descricao: `
        
        <h2></h2>
        <img src='/src/img/router2.png' class='img-descricao'>   
  
        <span>A função 'Router' é responsável por controlar a navegação em um aplicativo web utilizando o conceito de roteamento. Ela recebe um objeto 'Pages' como parâmetro, que contém as definições das páginas do aplicativo.
        
        A função 'Router' possui várias subfunções e é usada para realizar as seguintes tarefas:  </span>
        
        <h2>CUSTOMTAGS</h2><span> Essa função é responsável por processar os elementos HTML personalizados (tags) presentes nas páginas. Ela substitui os elementos personalizados por suas respectivas implementações e adiciona os atributos correspondentes.</span>
        <img src='/src/img/customtag.png' class='img-descricao'  >  
        <h2>RENDER</h2> <span>Essa função renderiza a página selecionada com base no nome da página fornecido. Ela obtém o HTML e o estado da página selecionada do objeto 'Pages' e chama a função 'customTags' para processar os elementos personalizados, se houver.</span>
        <img src='/src/img/render.png' class='img-descricao' >  
        <h2>STATEURL</h2> <span>Essa função extrai o nome da página atual da URL e retorna o nome da página correspondente com base no objeto 'Pages'. Se a URL não corresponder a nenhuma página existente, a página de erro será retornada.</span>
        <img src='/src/img/stateurl.png' class='img-descricao' >  
        <h2>DEBOUNCE</h2> <span>Essa função é um utilitário para criar uma versão "debounce" de uma função, ou seja, ela limita a frequência com que a função é executada, evitando chamadas excessivas.</span>
        <img src='/src/img/debounce.png' class='img-descricao'  >  
        <h2>ERRO-PAGE</h2> <span>Essa função gera o conteúdo HTML para exibir a página de erro, caso uma página inválida seja solicitada. Ela cria links para todas as páginas disponíveis no objeto 'Pages'.</span>
        <img src='/src/img/erropage.png' class='img-descricao'  >  
        <h2>ROUTER-STATE</h2> <span>Essa função é responsável por verificar o estado atual do roteamento e chamar a função 'render' para exibir a página correspondente.</span>
        <img src='/src/img/routerState.png' class='img-descricao'  >  
        <h2>HANDLECLCK</h2> <span>Essa função lida com os cliques nos links do aplicativo. Ela intercepta o evento de clique, impede o comportamento padrão do link, atualiza a URL utilizando o histórico de navegação e chama a função 'routerState' para renderizar a página correspondente.</span>
        <img src='/src/img/handleClick.png' class='img-descricao' >  
        <h2>RESUMO</h2> <span>A função 'Router' é configurada para responder aos eventos de popstate (quando ocorre uma alteração no histórico de navegação) e cliques nos links do aplicativo. Ela é chamada inicialmente para configurar o estado inicial do aplicativo com base na URL atual e também é chamada sempre que ocorre uma alteração na URL.
        
       Em resumo, a função 'Router' é responsável por controlar a navegação entre as páginas do aplicativo, atualizando dinamicamente o conteúdo da página com base na URL e nos links clicados pelo usuário.</span>`,

    contribuidores: [
      {
        Alifer: "https://github.com/AliferSouza/",
      },
    ],
  },
  {
    id: "useApi",
    title: "useAPI",
    Descricao: `
      <span> A função 'useApi' é uma função assíncrona que recebe dois parâmetros: 'url' e 'method'. Ela utiliza a API Fetch para fazer uma requisição assíncrona para a URL especificada, utilizando o método HTTP especificado.
      Aqui está uma descrição passo a passo do que acontece dentro da função 'useApi': </span>

      <span>1. A função é declarada como assíncrona, o que permite o uso do operador 'await' dentro dela.</span>

      <span> 2. É feita uma chamada à função 'fetch' passando a 'url' e o 'method' como argumentos. O 'fetch' retorna uma Promise que representa a resposta HTTP.</span>

      <span>3. A resposta HTTP é armazenada na variável 'res'.</span>

      <span> 4. É chamado o método 'json()' na resposta HTTP ('res.json()'), que retorna outra Promise que representa os dados da resposta em formato JSON.</span>

      <span>5. Os dados JSON são armazenados na variável 'data'.</span>

      <span>  6.Em seguida, os dados são armazenados na variável 'valorDta'. No entanto, esse passo parece ser desnecessário, pois 'valorDta' é definido como 'await data', o que basicamente mantém os dados inalterados.</span>

      <span>7. Finalmente, o valor de 'valorDta' é retornado como resultado da função.</span>

      <span> 8. Se ocorrer algum erro durante o processo (por exemplo, um erro na requisição ou uma falha ao converter os dados JSON), o bloco 'catch' será executado e a função retornará 'null'.</span> 

      <span> função 'useApi' é projetada para facilitar a utilização da API Fetch para fazer requisições assíncronas e obter dados em formato JSON. No entanto, é importante ressaltar que o uso correto dessa função depende da correta utilização dos parâmetros 'url' e 'method' ao chamá-la
      Certifique-se de passar a URL correta para a API desejada e um método HTTP adequado, como ''GET'', ''POST'', ''PUT'', ''DELETE'', etc. Além disso, tenha em mente que essa função retorna uma Promise, então você pode usar o 'await' ao chamá-la ou tratá-la como uma Promise com 'then()' e 'catch()' para manipular o resultado ou lidar com erros. </span>
      <img src='/src/img/useapi.png' class='img-descricao'>
         `,
    contribuidores: [
      {
        Alifer: "https://github.com/AliferSouza/",
      },
    ],
  },
  {
    id: "useLocation",
    title: "useLocation",
    Descricao: `
       <span> A função'useLocation' é uma função assíncrona que retorna a latitude e a longitude do usuário, utilizando a API de Geolocalização do navegador.
        Aqui está uma descrição passo a passo do que acontece dentro da função'useLocation':</span>

        <span>1. A função'useLocation' é declarada como uma função assíncrona.</span>

        <span>2. Dentro da função'useLocation', há outra função assíncrona chamada'getLocation'. Essa função retorna uma nova Promise que envolve a obtenção da localização atual do usuário.</span>

        <span>3. Dentro da Promise, é verificado se o navegador suporta a geolocalização usando'navigator.geolocation'.</span>

        <span>4. Se o suporte à geolocalização estiver disponível,'navigator.geolocation.getCurrentPosition' é chamado para obter a posição atual do usuário.</span>

        <span>5. Quando a posição é obtida com sucesso, os valores de latitude e longitude são extraídos do objeto'position.coords' e são resolvidos na Promise usando'resolve({ latitude, longitude })'.</span>

        <span>6. Se ocorrer um erro ao obter a posição, o erro é rejeitado na Promise usando'reject(error)'</span>

        <span>7. Se o navegador não suportar a geolocalização, um novo erro é criado usando'new Error("Geolocation is not supported by this browser.")' e é rejeitado na Promise usando'reject(error)'.</span>

        <span>8. De volta à função'useLocation', é feito um'try' para executar o código dentro dele</span>

        <span>9. A função'getLocation' é chamada usando'await' para aguardar a resolução da Promise.</span>

        <span>10. A partir do resultado obtido, a latitude e a longitude são extraídas usando a desestruturação e são retornadas em um array'[latitude, longitude]'.</span>

        <span>11. Se ocorrer algum erro durante o processo (por exemplo, o navegador não suporta a geolocalização ou houve um erro ao obter a posição), o bloco'catch' será executado. Nesse caso, o erro é capturado, e a mensagem de erro é exibida no console usando'console.log', e'[null, null]' é retornado para indicar que a localização não pôde ser obtida.</span>

        <span>Essa função'useLocation' pode ser usada para obter a localização atual do usuário. No entanto, é importante notar que o sucesso da obtenção da localização depende do consentimento do usuário e das configurações de privacidade do navegador. Além disso, essa função retorna uma Promise, então você pode usar o'await' ao chamá-la ou tratá-la como uma Promise com'then()' e'catch()' para manipular o resultado ou lidar com erros.</span>
        <img src='/src/img/uselocation.png' class='img-descricao'>
                `,
    contribuidores: [
      {
        Alifer: "https://github.com/AliferSouza/",
      },
    ],
  },
  {
    id: "useSearch",
    title: "useSearch",
    Descricao: `
      <span>  A função useSearch parece ser uma função simples que recebe um parâmetro props e retorna um valor relacionado à URL de pesquisa (query string).
        Aqui está uma descrição do que a função faz:</span>
        
        <span> A função useSearch é declarada sem o uso da palavra-chave async, o que indica que é uma função síncrona.</span>
        
        <span> Dentro da função, a variável location é atribuída ao objeto window.location, que contém informações sobre a URL atual.</span>
        
        <span> Em seguida, a variável prop é definida como location[props]. Isso indica que a função espera receber uma string como argumento props para acessar uma propriedade específica da URL de pesquisa.</span>
        
        <span> É feito um retorno usando decodeURIComponent(prop) || location. Aqui, a função decodeURIComponent() é usada para decodificar o valor da propriedade obtida da URL de pesquisa, caso exista. Se o valor decodificado for um valor vazio ou falso, é retornado o próprio objeto location.</span>
        
        <span> Se ocorrer algum erro durante o processo, o bloco catch será executado e o erro será lançado novamente usando throw error.</span>
        
        <span> Essa função parece ter como objetivo fornecer um método conveniente para acessar os valores da URL de pesquisa, decodificando-os se necessário. No entanto, é importante notar que o código fornecido é sucinto e não lida com todas as possíveis situações de erro ou validações necessárias ao acessar as propriedades da URL de pesquisa.</span>
        
        <span>  Recomenda-se verificar a documentação e considerar a implementação de validações adicionais, manipulação de erros e garantia de que as propriedades da URL de pesquisa estejam corretamente tratadas para atender aos requisitos do seu projeto.</span>
                 
    
       <img src='/src/img/usesearch.png' class='img-descricao'>
                `,
    contribuidores: [
      {
        Alifer: "https://github.com/AliferSouza/",
      },
    ],
  },
  {
    id: "useNavigate",
    title: "useNavigate",
    Descricao: `
    <span>The code you provided seems to be defining an asynchronous function called 'useNavigate' that takes a parameter 'rota'. Here's a breakdown of what the code does: </span>

    <span>1. It calls the 'useGetModules' function, passing '"../pages/index.js"' as an argument. The 'await' keyword indicates that the function call will wait for the promise returned by 'useGetModules' to resolve before proceeding.</span>
    
    <span> 2. Once the promise from 'useGetModules' is resolved, the result is assigned to the variable 'Pages'. The 'await' keyword ensures that the execution of the function pauses until the promise is resolved.</span>
    
    <span>3. The 'history.pushState(null, null, rota)' line updates the browser's history state by pushing a new entry with the specified 'rota' value. This allows for manipulating the browser's history without triggering a full page reload.</span>
    
    <span>4. Finally, the 'Router' function is called, passing the 'Pages' variable as an argument. The purpose of this function is not clear from the provided code snippet.</span>
    
    <span> It's worth noting that this code assumes the existence of the 'useGetModules' and 'Router' functions, which are not defined in the provided code. Additionally, the code snippet appears to be using JavaScript with modern syntax, such as 'async/await' and 'history.pushState', so it should be executed in an environment that supports these features (e.g., a modern web browser).</span>
       <img src='/src/img/usenavigate.png' class='img-descricao'>
                `,
    contribuidores: [
      {
        Alifer: "https://github.com/AliferSouza/",
      },
    ],
  },
  {
    id: "$",
    title: "$",
    Descricao: `
    <span>A função '$util' é uma função versátil que combina as funcionalidades das funções '$', '$$' e '$$$' em uma única função. Ela permite selecionar elementos do DOM, definir atributos e conteúdo HTML nesses elementos e retornar os elementos selecionados.
        Aqui está uma descrição do que a função faz:</span>

          <span>1. Se o primeiro argumento ('arg1') for uma string:
          - Verifica se o segundo argumento ('arg2') está presente.
          - Se 'arg2' estiver presente, define o conteúdo HTML do elemento selecionado pelo seletor 'arg1' para o valor de 'arg2' usando 'document.querySelector(arg1).innerHTML = arg2'.
          - Retorna o elemento selecionado pelo seletor 'arg1' usando 'document.querySelector(arg1)'.</span>

          <span>2. Se o primeiro argumento ('arg1') for um array:
          - Itera sobre cada objeto 'element' no array 'arg1'.
          - Extrai o seletor e os atributos do objeto 'element'.
          - Seleciona o elemento alvo no DOM usando 'document.querySelector(selector)'.
          - Se o elemento alvo não for encontrado, passa para o próximo elemento.
          - Para cada par chave-valor nos atributos do elemento, atualiza o elemento alvo adequadamente.</span>

          <span>3. Se o primeiro argumento ('arg1') e o segundo argumento ('arg2') forem strings:
          - Seleciona todos os elementos no DOM que correspondem ao seletor 'arg1' usando 'document.querySelectorAll(arg1)'.
          - Se 'arg2' estiver presente, concatena o valor de 'arg2' ao conteúdo HTML de cada elemento selecionado.</span>

          <span>  Em resumo, a função '$util' permite selecionar elementos do DOM, definir atributos e conteúdo HTML nesses elementos e retornar os elementos selecionados. Ela é capaz de lidar com diferentes tipos de argumentos e operar de forma flexível, dependendo dos argumentos fornecidos, tornando-a uma função útil para manipulação e interação com o DOM.</span>
          <img src='/src/img/$util.png' class='img-descricao'>
                        `,
    contribuidores: [
      {
        Alifer: "https://github.com/AliferSouza/",
      },
    ],
  },
  {
    id: "$$",
    title: "$$",
    Descricao: `
        <span>A função '$$' é uma função personalizada que recebe um array de objetos 'options'. Cada objeto no array 'options' contém um seletor CSS como chave e um conjunto de atributos como valor. A função itera sobre cada objeto 'element' em 'options' e aplica os atributos ao elemento correspondente no DOM.</span>

        Aqui está uma descrição do que a função faz:

        <span> 1. Itera sobre cada objeto 'element' no array 'options' usando o método 'forEach()'.</span>
        <span>2. Extrai o seletor CSS e os atributos do objeto 'element' usando 'Object.keys(element)[0]' e 'Object.values(element)[0]', respectivamente.</span>
        <span> 3. Seleciona o elemento alvo no DOM usando 'document.querySelector(selector)', onde 'selector' é o seletor CSS extraído.</span>
        <span>4. Se o elemento alvo não for encontrado (ou seja, 'targetElement' é 'null'), a função retorna e passa para o próximo elemento.</span>
        <span> 5. Para cada par chave-valor nos atributos do elemento, iterados usando 'Object.entries(attributes)', a função verifica se a chave é "innerHTML". Se for, o conteúdo HTML do elemento é definido para o valor correspondente usando 'targetElement.innerHTML = value'. Caso contrário, o atributo é definido usando 'targetElement.setAttribute(attribute, value)'.</span>

        <span>Em resumo, a função '$$' permite definir atributos e conteúdo HTML para elementos do DOM com base nos seletores CSS e nos atributos fornecidos no array 'options'.</span>
        <img src='/src/img/$$.png' class='img-descricao'>
                `,
    contribuidores: [
      {
        Alifer: "https://github.com/AliferSouza/",
      },
    ],
  },
  {
    id: "$$$",
    title: "$$$",
    Descricao: `
    <span>A função '$$$' é uma função personalizada que recebe um seletor CSS como primeiro argumento ('props') e um valor para renderizar como segundo argumento ('valorArederizar'). A função seleciona todos os elementos no DOM que correspondem ao seletor CSS fornecido usando 'document.querySelectorAll(props)'.

    Aqui está uma descrição do que a função faz:</span>
    
    <span> 1. Utiliza 'document.querySelectorAll(props)' para selecionar todos os elementos no DOM que correspondem ao seletor CSS fornecido e armazena-os no array 'elements'.:</span>
    <span>2. Verifica se 'valorArederizar' está presente e é avaliado como verdadeiro.:</span>
    <span> 3. Se 'valorArederizar' for verdadeiro, a função itera sobre cada elemento no array 'elements' usando 'elements.forEach((element) => {})'.:</span>
    <span>4. Dentro do loop, o conteúdo HTML de cada elemento é concatenado com o valor de 'valorArederizar' usando 'element.innerHTML += valorArederizar'.:</span>
    <span> 5. A função retorna o array 'elements', que contém todos os elementos selecionados.:</span>
    
    <span>Em resumo, essa função permite selecionar vários elementos no DOM com base em um seletor CSS e, opcionalmente, adicionar um valor ao conteúdo HTML desses elementos. Ela retorna um array contendo os elementos selecionados.Em resumo, a função '$$' permite definir atributos e conteúdo HTML para elementos do DOM com base nos seletores CSS e nos atributos fornecidos no array 'options'.:</span>
        <img src='/src/img/$$$.png' class='img-descricao'>
                `,
    contribuidores: [
      {
        Alifer: "https://github.com/AliferSouza/",
      },
    ],
  },
  {
    id: "useLocalStorage",
    title: "useLocalStorage",
    Descricao: `
    <span>A função 'useLocalStorage' é uma função que permite realizar operações de leitura e gravação de dados no armazenamento local do navegador, também conhecido como localStorage. Ela oferece três operações distintas: 'getItem', 'setItem' e 'setItems'.</span>

    <span><h3 style="color: red">1. getItem:</h3>
   - Descrição: Retorna o valor de um item específico armazenado no localStorage.
   - Parâmetros:
     - 'name' (string): O nome do item a ser recuperado.
   - Retorno:
     - O valor do item do localStorage correspondente ao nome fornecido, convertido de volta para seu tipo de dado original usando JSON.parse().</span>

     <span><h3 style="color: red">2. setItem:</h3>
   - Descrição: Define o valor de um item específico no localStorage.
   - Parâmetros:
     - 'name' (string): O nome do item a ser definido.
     - 'props' (qualquer tipo de dado): O valor a ser armazenado no item.
   - Retorno:
     - Nenhum retorno explícito.</span>

     <span><h3 style="color: red">3. setItems:</h3>
   - Descrição: Adiciona um valor a um array armazenado no localStorage.
   - Parâmetros:
     - 'name' (string): O nome do array a ser atualizado.
     - 'props' (qualquer tipo de dado): O valor a ser adicionado ao array.
   - Retorno:
     - Nenhum retorno explícito.</span>

     <span>A função 'useLocalStorage' permite manipular os dados no localStorage de forma flexível, dependendo da operação selecionada. Ela pode ser usada para obter valores específicos, definir valores ou adicionar valores a arrays armazenados localmente.</span>
<img src='/src/img/useLocalStorage.png' class='img-descricao'>
                `,
    contribuidores: [
      {
        Alifer: "https://github.com/AliferSouza/",
      },
    ],
  },
];

export { data };
