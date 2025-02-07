// Obtém o campo de entrada de busca pelo ID 'busca'
var searchField = document.getElementById('busca');

// Obtém o elemento que contém o texto a ser pesquisado pelo ID 'descricao'
var descriptionObject = document.getElementById('descricao');

// Salva o texto original do elemento para ser usado durante a substituição
var originalText = descriptionObject.innerHTML;

// Função responsável por realizar a busca e destacar o texto correspondente
function realizaBusca(busca) {
    // Limpa qualquer marcação anterior
    descriptionObject.innerHTML = originalText;

    // Se o campo de busca estiver vazio, retorna sem fazer nada
    if (busca.trim() === '') return;

    // Cria uma expressão regular para encontrar o texto buscado
    // 'i' -> busca não diferencia maiúsculas/minúsculas
    // 'g' -> busca todas as ocorrências
    const regex = new RegExp(`(${busca})`, 'ig');

    // Substitui as ocorrências encontradas, adicionando a tag <mark> para destacá-las
    descriptionObject.innerHTML = descriptionObject.innerHTML.replace(regex, '<mark>$1</mark>');
}

// Adiciona um evento ao campo de busca para disparar a função `realizaBusca`
// toda vez que o usuário digitar algo (evento 'input')
searchField.addEventListener('input', (e) => realizaBusca(e.target.value));