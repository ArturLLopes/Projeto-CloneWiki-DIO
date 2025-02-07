# Wikipedia Clone - BEM

Este projeto é um clone simples de uma página interna da Wikipedia, desenvolvido para demonstrar a aplicação da metodologia BEM (Block, Element, Modifier) na organização e nomenclatura de classes CSS. O objetivo é fornecer uma estrutura clara e reutilizável para o desenvolvimento de interfaces web.

<p align="center">
<img 
    src="https://github.com/user-attachments/assets/bf00aa5e-9caf-4bde-8dd7-3a1bf50deb88"
    width="502"
  </p>

Desafio feito para enceramento do curso de Formação HTML Web Developer da DIO.me. Neste desafio consiste em treinar a relação com estrutura do site, e também aplicar conhecimentos adquiridos sobre semântica e acessibilidade, agregando no desafio foi feito um layout no figma, ampliação de imagens e usado um ferramenta de marcação de texto e o código usado foi pensado para melhorar a acessibilidade das pessoas com deficiências..
  
## Estrutura do Projeto

O projeto está organizado da seguinte forma:<br>
wikipedia-clone-bem/
│<br>
├── src/<br>
│ ├── assets/<br>
│ │ ├── favicon/<br>
│ │ │ └── favicon.ico<br>
│ │ ├── img/<br>
│ │ │ ├── bemCss-logo.png<br>
│ │ │ ├── exemplo-1.png<br>
│ │ │ └── logo.png<br>
│ │ └── logo_footer/<br>
│ │ └── logo.png<br>
│ ├── css/<br>
│ │ ├── reset.css<br>
│ │ ├── style.css<br>
│ │ └── variable.css<br>
│ └── js/<br>
│ ├── ampliar.js<br>
│ └── script.js<br>
│<br>
├── index.html<br>
└── README.md<br>


## Tecnologias Utilizadas

- **HTML5**: Estruturação do conteúdo da página.
- **CSS3**: Estilização da página, utilizando a metodologia BEM para organização das classes.
- **JavaScript**: Funcionalidades interativas, como a ampliação de imagens.

## Metodologia BEM

BEM (Block, Element, Modifier) é uma convenção de nomenclatura para classes CSS que ajuda a criar componentes reutilizáveis e manter um código mais organizado. A estrutura básica do BEM é:

- **Bloco (`block`)**: Um componente independente que pode ser reutilizado em diferentes partes da aplicação.
- **Elemento (`block__element`)**: Uma parte de um bloco que não tem significado fora dele.
- **Modificador (`block--modifier` ou `block__element--modifier`)**: Uma variação de um bloco ou elemento, usada para alterar sua aparência ou comportamento.

### Exemplo de Uso no Projeto

```html
<header class="header">
    <figure class="header__logo">
        <img src="./src/assets/img/logo.png" alt="Logo Wikipedia">
    </figure>
    <div class="header__search">
        <input type="text" placeholder="Pesquise no texto" id="busca">
    </div>
</header>
