# Componenter.js
Uma biblioteca JavaScript que gera componentes e importações para qualquer código HTML. Criada para quem quer os benefícios do React.js (de reaproveitamento de códigos), mas sem pensar absolutamente nada ao projeto.

## Instalação
Para começar a utilizar a biblioteca, basta você fazer um ```git clone https://github.com/anaeljonasgit/componenter-js.git``` no seu prompt de comando e chamar o arquivo ```componenter.js``` dentro do seu HTML principal.

## Configurando o ambiente
1. Uma ```<div id='App'></div>``` na tag ```body``` do seu HTML principal.
2. Uma função ```function App() {  }``` com um ```return()``` dentro do seu ```index.js``` ou ```script.js``` principal.
3. Agora é só usar e pronto.

## Usagem

### Criando um componente
1. Crie uma pasta chamada ```components``` dentro da raiz do seu projeto.
2. Agora, dentro dessa pasta, crie um arquivo ```js``` com o nome do seu componente. Exemplo: ```Navbar.js```.
2.1. Se o seu componente utiliza de estilização (style.css), você pode criar uma pasta com o nome do componente e adicionar o estilo por lá. Exemplo: ```Navbar > index.js style.css```
3. Criando o componente:
```
function Navbar() {
  return `
     <div>
        <h3>Navbar</h3>
     </div>
  `;
}
```
4. Importando o componente no ```index.js``` principal:
```
call('components/Navbar');

function App() {
  return (
     Navbar()
  );
}
```
