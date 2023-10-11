# Demo Inicial Tint-Epoca

Para rodar essa demo:
`npm install && npm start`

Este é um site básico em React para mostrar as mudanças necessárias para o projeto já existente do site da Época.

1. A pasta `public\widget` contem o elemento html do widget da Tint. Ela precisa ir na pasta public do projeto React (tem que estar no mesmo lugar que o index.html)

2. Dentro do index.html, inserir dentro da tag `<header>` (linha 12 do exemplo)
    ```html
    <script type="module" src="widget/widget.js"></script>
    ```

3. Dentro do index.html, inserir a tag do widget `<tint-vto>` fora da `div#root` que é o entrypoint do react. Isso causa o widget estar presente no site todo, porém ele só é aberto quando invocado pelo JS. Os tokens também estão direto no html no momento, estamos confirmando com o pessoal da Banuba se é isso mesmo a implementação (a documentação sugere o uso direto no html)

4. Dentro da aplicação do React eu inseri:
    * O botão que irá ativar o widget `div#root > button#tint-bttn` (linha 45). O importante aqui é a função de OnClick, essa função que procura o elemento ```<tint-vto>``` e abre o widget. Tem uma lógica para desabilitar o botão enquanto o widget estiver aberto.

    * A funçao ```tintToCart``` que é a função intermediária entre o Widget e o sistema interno de carrinho, a lógica disso vamos definir melhor mais pra frente.

    * Vai existir uma necessidade de definir umas outras funções assim pois tem o botão de adicionar o item para o carrinho e de adicionar o carrinho inteiro do widget para o carrinho interno.
