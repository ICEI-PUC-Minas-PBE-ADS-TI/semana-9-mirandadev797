const data = {
    "produtos": [
      {
        "id": 1,
        "nome": "Ração Preferida",
        "preco": 189.90,
        "categoria": "Alimentação",
        "imagem": "10002310000111_1775767302891.jpg",
        "descricao": "Golden Fórmula para Cães Senior Sabor Frango e Arroz, 15kg.",
        "emEstoque": true
      },
      {
        "id": 2,
        "nome": "Osso para roer e relaxar",
        "preco": 20.00,
        "categoria": "Petiscos",
        "imagem": "1694547499205.jpg",
        "descricao": "Osso Spike Fêmur Suíno para Cães",
        "emEstoque": false
      },
       {
        "id": 3,
        "nome": "Para momentos de treino e distração",
        "preco": 34.90,
        "categoria": "Petiscos",
        "imagem": "1701974898933.jpg",
        "descricao": "Bifinho Selections For Pets Strip Mini para Cães Sabor Carne 500 g.",
        "emEstoque": true
      },
       {
        "id": 4,
        "nome": "Para sonhar bem Cãofortavel",
        "preco": 349.90,
        "categoria": "Cama",
        "imagem": "1567172360754.jpg",
        "descricao": "Cama Lisa Oval Sarja para Cães Cinza.",
        "emEstoque": true
      },
       {
        "id": 5,
        "nome": "Para ficar quentinho no frio",
        "preco": 79.90,
        "categoria": "Cama",
        "imagem": "1655903978691.jpg",
        "descricao": "Cobertor Griff Dog para Cães Quentinho.",
        "emEstoque": true
      },
       {
        "id": 6,
        "nome": "Água sempre fresquinha",
        "preco": 49.90,
        "categoria": "Comedouro",
        "imagem": "1687378750389.jpg",
        "descricao": "Comedouro Chalesco Bowl Cerâmica Magno para Cães",
        "emEstoque": true
      },
       {
        "id": 7,
        "nome": "A melhor hora do dia",
        "preco": 149.90,
        "categoria": "Coleiras",
        "imagem": "1570459045990.jpg",
        "descricao": "Peitoralem nylon Zee.Dog Skull para Cães G.",
        "emEstoque": true
      },
       {
        "id": 8,
        "nome": "Xô pulgas e carrapatos",
        "preco": 199.90,
        "categoria": "Coleiras",
        "imagem": "1627415022942.jpg",
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

// Formatação do preço
function formatPrice(preco) {
    return "R$ " + preco.toFixed(2); // toFixed(2) usa 2 casas decimais
}


  