const data = {
    "produtos": [
      {
        "id": 1,
        "nome": "Ração Preferida",
        "titulo": "Ração Frango e Arroz.",
        "preco": 189.90,
        "categoria": "Alimentação",
        "imagem": "images/10002310000111_1775767302891.jpg",
        "descricao": "Ração Golden Fórmula para Cães Senior Sabor Frango e Arroz, 15KG.",
        "emEstoque": true
      },
      {
        "id": 2,
        "nome": "Osso para roer e relaxar",
        "titulo": "Osso Fêmur Suíno",
        "preco": 20.00,
        "categoria": "Petiscos",
        "imagem": "images/1694547499205.jpg",
        "descricao": "Osso Spike Fêmur Suíno para Cães",
        "emEstoque": false
      },
       {
        "id": 3,
        "nome": "Para momentos de treino e distração",
        "titulo": "Petisco Bifinho sabor Carne.",
        "preco": 34.90,
        "categoria": "Petiscos",
        "imagem": "images/1701974898933.jpg",
        "descricao": "Petisco Bifinho Selections For Pets Strip Mini para Cães Sabor Carne 500 g.",
        "emEstoque": true
      },
       {
        "id": 4,
        "nome": "Para sonhar bem Cãofortável",
        "titulo": "Cama Lisa em Sarja King Size",
        "preco": 349.90,
        "categoria": "Cama",
        "imagem": "images/1567172360754.jpg",
        "descricao": "Cama Lisa Oval Sarja para Cães Cinza.",
        "emEstoque": true
      },
       {
        "id": 5,
        "nome": "Para ficar quentinho no frio",
        "titulo": "Cobertor fofinho",
        "preco": 79.90,
        "categoria": "Cama",
        "imagem": "images/1655903978691.jpg",
        "descricao": "Cobertor Griff Dog para Cães Quentinho.",
        "emEstoque": true
      },
       {
        "id": 6,
        "nome": "Água sempre fresquinha",
        "titulo":"cerâmica redonda para água e ração",
        "preco": 49.90,
        "categoria": "Comedouro",
        "imagem": "images/1687378750389.jpg",
        "descricao": "Comedouro Chalesco Bowl Cerâmica Magno para Cães",
        "emEstoque": true
      },
       {
        "id": 7,
        "nome": "A melhor hora do dia",
        "titulo": "Coleira Peitoral para passeios e transporte",
        "preco": 149.90,
        "categoria": "Coleiras",
        "imagem": "images/1570459045990.jpg",
        "descricao": "Coleira Peitoral para passeios e transporte em nylon Zee.Dog Skull para Cães G.",
        "emEstoque": true
      },
       {
        "id": 8,
        "nome": "Xô pulgas e carrapatos",
        "titulo": "Antipulgas e Carrapatos em forma de coleira",
        "preco": 199.90,
        "categoria": "Coleiras",
        "imagem": "images/1627415022942.jpg",
        "descricao": "Coleira Antipulgas e Carrapatos Seresto para Cães acima de 8 Kg Elanco.",
        "emEstoque": true
      }
    ]
  }

  // elementos Dom:
const productList = document.getElementById("product-list"); // pega a div dos cards
const productDetails = document.getElementById("product-details"); // pega a div de detalhes
const searchInput = document.querySelector("#search"); // pega o campo de busca
const categorySelect = document.querySelector("#category"); // pega o select de categorias
const btnRender = document.getElementById("btnRender"); // pega o botão Buscar produto

// Formatação do preço"
function formatPrice(preco) {
    return "R$ " + preco.toFixed(2); // toFixed(2) usa 2 casas decimais
}

//criação dos cards de produto

function createProductCard(produto){
const card = document.createElement("div"); //cria div do card
card.classList.add("card");
card.setAttribute("data-id", produto.id);
card.style.margin = "10px";

// peenchimento do conteúdo do card com innerHTML
card.innerHTML = `
    <div style="display: flex; gap: 20px; align-items: flex-start;">
        <img src="${produto.imagem}" alt="${produto.nome}" width="200" style="border-radius: 8px;">
        <div>
            <h2>${produto.nome}</h2>
            <p class="card-titulo">${produto.titulo}</p>
            <p class="card-preco">Preço: ${formatPrice(produto.preco)}</p>
            <p class="card-categoria">Categoria: ${produto.categoria}</p>
            <p class="card-estoque">Em estoque: ${produto.emEstoque ? "Sim" : "Não"}</p>
            <button class="btn-detalhes">Ver detalhes</button>
            <button class="btn-destacar">Destacar</button>
        </div>
    </div>
`;
 card.querySelector(".btn-detalhes").addEventListener("click", function() {
    // verifica se já existe uma área de detalhes aberta nesse card
    const detalhesExistentes = card.querySelector(".detalhes-card");
    
    if (detalhesExistentes) {
        detalhesExistentes.remove(); // se já está aberto, fecha ao clicar de novo
    } else {
        const detalhes = document.createElement("div"); // cria a div de detalhes
        detalhes.classList.add("detalhes-card"); // adiciona classe para estilizar
        detalhes.innerHTML = `
            <hr>
            <p><strong>Descrição:</strong> ${produto.descricao}</p>
        `; // mostra só a descrição, pois o resto já está no card
        card.appendChild(detalhes); // adiciona os detalhes dentro do card
    }
});
  //destacar:
  card.querySelector(".btn-destacar").addEventListener("click", function() {
        card.classList.toggle("highlight"); // adiciona classe de destaque visual
    });

    return card; // retorna o card pronto
}

//função que busca todos os cards da página
function renderProducts(produtos){
  productList.innerHTML = "";
  produtos.forEach(function(produto){ //percorre tod array
  const card=createProductCard(produto); //criação do card do produto
  productList.appendChild(card); //add o card na div product-list
  })

const todosCards = document.querySelectorAll(".card");
todosCards.forEach(function(card) {
  console.log("Card renderizado - data-id: ", card.getAttribute("data-id"));
})
}

function renderCategories(){
  const categorias = []; // array vazio para guardar as categorias

  data.produtos.forEach(function(produto) { // percorre todos os produtos
        if (!categorias.includes(produto.categoria)) { // verifica se a categoria já foi adicionada
            categorias.push(produto.categoria); // adiciona a categoria no array se for nova
        }
    });

  categorias.forEach(function(categoria) { // percorre as categorias encontradas
        const option = document.createElement("option"); // cria uma opção do select
        option.value = categoria; // define o valor da opção
        option.innerHTML = categoria; // define o texto visível da opção
        categorySelect.appendChild(option); // adiciona a opção no select
    });
}

//função dos detalhes dos produtos
function showProductDetails(produto) {
    productDetails.innerHTML = `
        <h2>${produto.nome}</h2>
        <p><strong>Preço:</strong> ${formatPrice(produto.preco)}</p>
        <p><strong>Categoria:</strong> ${produto.categoria}</p>
        <p><strong>Em estoque:</strong> ${produto.emEstoque ? "Sim" : "Não"}</p>
        <p><strong>Descrição:</strong> ${produto.descricao}</p>
    `;    // preenche a div product-details com as informações completas do produto
}

//filtrando os produtso
function filterProducts(){
  const textoBusca=searchInput.value.toLowerCase();
  const categoriaSelecionada = categorySelect.value;

  return data.produtos.filter(function(produto)
{
  const bateDescrição = produto.descricao.toLowerCase().includes(textoBusca) || produto.nome.toLowerCase().includes(textoBusca);
  const bateCategoria = categoriaSelecionada ==="Todas" || produto.categoria === categoriaSelecionada;

  return bateDescrição && bateCategoria;
});
}

//Cards com botões e eventos (addEventListener)
searchInput.addEventListener("input", function() { // dispara a cada letra digitada na busca
    const produtosFiltrados = filterProducts(); // filtra os produtos
    renderProducts(produtosFiltrados); // renderiza os filtrados
});

categorySelect.addEventListener("change", function() { // dispara quando muda de categoria
    const produtosFiltrados = filterProducts(); // filtra os produtos
    renderProducts(produtosFiltrados); // renderiza os filtrados
});

btnRender.addEventListener("click", function() { // dispara ao clicar no botão buscar produto
    const produtosFiltrados = filterProducts(); // filtra os produtos
    renderProducts(produtosFiltrados); // renderiza os filtrados
});

 
renderCategories(); // preenche o select de categorias
renderProducts(data.produtos); // carrega todos os produtos de primeira
