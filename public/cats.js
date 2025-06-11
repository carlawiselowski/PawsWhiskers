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
