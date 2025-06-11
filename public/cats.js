let produtos = [
    { nome: 'Osso', preco: 9.90, imagem: './animals/dogs/osso.jpeg', categoria: 'dogs' },
    { nome: 'Ratinho de pelucia', preco: 12.90, imagem: './animals/cats/ratinho.jpeg', categoria: 'cats' },
    { nome: 'bebedouro', preco: 89.90, imagem: './animals/others/bebedouro.jpeg', categoria: 'others' },
    { nome: 'Ração para Cachorro', preco: 99.90, imagem: './animals/dogs/dog_food.jpeg', categoria: 'dogs' },
    { nome: 'Ração para Gato', preco: 59.90, imagem: './animals/cats/cat_food.jpeg', categoria: 'cats' },
    { nome: 'Roda', preco: 29.90, imagem: './animals/others/roda.jpeg', categoria: 'others' },
    { nome: 'Gaiola para Pássaros', preco: 99.90, imagem: './animals/birds/gaiola.jpeg', categoria: 'birds' },
    { nome: 'Brinquedo para Pássaros', preco: 19.90, imagem: './animals/birds/bird_toy.jpeg', categoria: 'birds' }
];

if (!localStorage.getItem('produtos')) {
  const produtosFixos = [
    { nome: 'Osso', preco: 9.90, imagem: './animals/dogs/osso.jpeg', categoria: 'dogs' },
    { nome: 'Ratinho de pelucia', preco: 12.90, imagem: './animals/cats/ratinho.jpeg', categoria: 'cats' },
    { nome: 'bebedouro', preco: 89.90, imagem: './animals/others/bebedouro.jpeg', categoria: 'others' },
    { nome: 'Ração para Cachorro', preco: 99.90, imagem: './animals/dogs/dog_food.jpeg', categoria: 'dogs' },
    { nome: 'Ração para Gato', preco: 59.90, imagem: './animals/cats/cat_food.jpeg', categoria: 'cats' },
    { nome: 'Roda', preco: 29.90, imagem: './animals/others/roda.jpeg', categoria: 'others' },
    { nome: 'Gaiola para Pássaros', preco: 99.90, imagem: './animals/birds/gaiola.jpeg', categoria: 'birds' },
    { nome: 'Brinquedo para Pássaros', preco: 19.90, imagem: './animals/birds/bird_toy.jpeg', categoria: 'birds' }
  ];

  localStorage.setItem('produtos', JSON.stringify(produtosFixos));
}
// Função de renderização para páginas por categoria
function renderCategoria(categoria) {
    const container = document.querySelector('.container-animals');
    produtos
        .filter(p => p.categoria === categoria)
        .forEach(produto => {
            container.innerHTML += `
                <div align="center">
                    <p></p>
                    <img class="animal" src="${produto.imagem}">
                    <p></p>
                    <h3>R$ ${produto.preco} </h3>
                    <button class="product" onclick="comprarProduto('${produto.nome}', ${produto.preco}, '${produto.imagem}')">buy</button>
                    <p></p>
                </div>
            `;
        });
}
function renderProdutos(containerId = 'container-produtos') {
  const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';

  produtos.forEach(produto => {
    const div = document.createElement('div');
    div.align = 'center';
    div.innerHTML = `
      <img src="${produto.imagem}">
      <h3>R$ ${produto.preco} </h3>
      <button class="product" onclick="comprarProduto('${produto.nome}', ${produto.preco}, '${produto.imagem}')">buy</button>
    `;
    container.appendChild(div);
  });
}

function comprarProduto(nome, preco, imagem) {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  const itemExistente = carrinho.find(item => item.nome === nome);

  if (itemExistente) {
    itemExistente.quantidade += 1;
  } else {
    carrinho.push({ nome, preco, imagem, quantidade: 1 });
  }

  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  alert(`"${nome}" foi adicionado ao carrinho!`);
}
