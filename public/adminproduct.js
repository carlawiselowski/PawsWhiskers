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

function renderProdutos() {
    const container = document.querySelector('.container-animals');
    container.innerHTML = '';

    produtos.forEach(produto => {
        container.innerHTML += `
            <div align="center">
                <img src="${produto.imagem}">
                <button class="product" onclick="comprarProduto('${produto.nome}', ${produto.preco}, '${produto.imagem}')">buy</button>
                <button class="product">info</button>
            </div>
        `;
    });
}

// Adicionar produto
function adicionarProduto() {
    const nome = prompt("Nome do produto:");
    const preco = parseFloat(prompt("Preço:"));
    const imagem = prompt("Caminho da imagem:");
    const categoria = prompt("Categoria (cats, dogs, birds, others):");

    produtos.push({ nome, preco, imagem, categoria });
    renderProdutos();
}

// Atualizar produto
function atualizarProduto() {
    const nomeAntigo = prompt("Nome do produto a atualizar:");
    const produto = produtos.find(p => p.nome === nomeAntigo);

    if (!produto) return alert("Produto não encontrado.");

    produto.nome = prompt("Novo nome:", produto.nome);
    produto.preco = parseFloat(prompt("Novo preço:", produto.preco));
    produto.imagem = prompt("Novo caminho da imagem:", produto.imagem);
    produto.categoria = prompt("Nova categoria:", produto.categoria);

    renderProdutos();
}

// Deletar produto
function deletarProduto() {
    const nome = prompt("Nome do produto a deletar:");
    const index = produtos.findIndex(p => p.nome === nome);
    if (index === -1) return alert("Produto não encontrado.");

    produtos.splice(index, 1);
    renderProdutos();
}

