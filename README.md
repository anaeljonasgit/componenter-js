# Componenter.js
Uma biblioteca JavaScript que gera componentes e importações para qualquer código HTML. Criada para quem quer os benefícios do React.js (de reaproveitamento de códigos), mas sem pesar absolutamente nada ao projeto.

## Instalação
Para começar a utilizar a biblioteca, basta você fazer um ```git clone https://github.com/anaeljonasgit/componenter-js.git``` no seu prompt de comando e chamar o arquivo ```componenter.js``` dentro do seu HTML principal.

## Configurando o ambiente
1. Crie uma div ```<div id='App'></div>``` na tag ```body``` do seu HTML principal.
2. Crie uma função ```function App() {  }``` com um ```return()``` dentro do seu ```index.js``` ou ```script.js``` principal.
3. Agora é só usar e pronto.

# Como usar

### Criando um componente
1. Crie uma pasta chamada ```components``` dentro da raiz do seu projeto.
```
components
```
2. Agora, dentro dessa pasta, crie um arquivo ```js``` com o nome do seu componente. Exemplo: ```Navbar.js```.
```
components
  Navbar.js
```
3. Se o seu componente utiliza de estilização (style.css), você pode criar uma pasta com o nome do componente e adicionar o estilo por lá. Exemplo:
```
components
  Navbar
    - index.js
    - style.css
```
4. Criando o componente:
```
function Navbar() {
  return `
     <div>
        <h3>Navbar</h3>
     </div>
  `;
}
```
5. Importando o componente no ```index.js``` principal:
```
call('components/Navbar');

function App() {
  return (
     Navbar()
  );
}
```
6. Um outro detalhe é que, todas as vezes que você for adicionar um novo componente, você precisa colocar um sinal de ```+``` entre as conexões, com exceção do último componente:
```
call('components/Navbar');

function App() {
  return (
     Navbar()+
     Navbar()+
     Navbar()+
     Navbar()
  );
}
```

### Adicionando estilos a um componente
1. Para adicionarmos estilos aos nossos componentes, precisamos cria-los em formato de pastas:
```
components
  Navbar
    - index.js
    - style.css
```
2. Logo depois, dentro do no ```index.js``` do nosso componente, chamamos o nosso ```style.css``` pela função ```style()```. Obs: o caminho precisa ser exatamente o mesmo do componente importado lá pela ```index.js``` principal do nosso projeto:
```
style('components/Navbar');

function Navbar() {
  return `
     <div>
        <h3>Navbar</h3>
     </div>
  `;
}
```

### Componentes de lógica
Os componentes com lógica são um pouco diferentes dos componentes comuns do ```Componenter.js```. Veja abaixo o exemplo de um contador:
```
function Counter() {
   count = 0;
   
   Add = () => {
      count = count + 1;
      Render('#Counter', Component());
   }
   
   Component = () => {
      return `
         <div id='Counter'>
	    <h1>${count}</h1>
	    <button onclick='Add()'>Add</button>
	 </div>
      `;
   }
   
   return Component();
}
```
Perceba que o nosso componente precisa está dentro de uma outra função chamada ```Component()```. Fizemos isso para podermos atualizar o lado visual do nosso componente através da nossa outra função ```Render()```. Em componentes de lógica, precisamos sempre adicionar um ```id``` à div com o nome do nosso componente - só assim o ```Componenter.js``` irá identificar o componente em questão e atualizar o seu visual em tela toda vez que um algoritmo lógico do seu código for ativado dentro do componente.

#### Criado por Anael Jonas (anaeljonas@outlook.com).
