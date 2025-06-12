

//evento de zoom 
    const items = document.querySelectorAll('.box');
    const items1 = document.querySelectorAll('.box1');


// Função para aumentar o quadro
function enlargeItem(event) {
    event.currentTarget.style.transform = 'scale(1.1)';
    event.currentTarget.style.boxShadow = '0 8px 8px rgba(0, 0, 0, 0.2)';
}

// Função para restaurar o tamanho original
function resetItem(event) {
    event.currentTarget.style.transform = 'scale(1)';
    event.currentTarget.style.boxShadow = '4px 2px 8px rgba(0, 0, 0, 0.463)';
}

// Adiciona os event listeners para cada item
items.forEach(item => {
    item.addEventListener('mouseenter', enlargeItem);
    item.addEventListener('mouseleave', resetItem);
});

items1.forEach(item => {
    item.addEventListener('mouseenter', enlargeItem);
    item.addEventListener('mouseleave', resetItem);
});


// evento de abas
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Esconder todo o conteúdo das abas
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remover a classe 'active' de todos os botões
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostrar a aba atual e adicionar a classe 'active' ao botão clicado
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Mostrar a primeira aba por padrão ao carregar a página
document.getElementsByClassName("tablinks")[0].click();

//login ou nao

const loggedIn = localStorage.getItem('loggedIn') === 'true';
const username = localStorage.getItem('username');

const icon = document.getElementById('profile-icon');
const text = document.getElementById('user-text');
const link = document.getElementById('user-link');
const logoutBtn = document.getElementById('logout-btn');
const cartIcon = document.getElementById('img-cart');

if (icon && text && link && logoutBtn) {
  if (loggedIn && username) {
    icon.src = './img_geral/perfil.png';
    text.textContent = `Olá, ${username}`;

    if (username.toLowerCase() === 'admin') {
      link.href = 'admin.html';  // Admin vai para página admin
      cartIcon.style.display = 'none'; // Esconde o carrinho para admin
    } else {
      link.href = 'user.html';   // Usuário comum
      cartIcon.style.display = 'inline-block'; // Mostra carrinho para usuário comum
    }

    logoutBtn.style.display = 'inline-block';
    text.classList.add('text-style');
    text.classList.remove('login-style');

  } else {
    icon.src = './img_geral/perfil.png';
    text.textContent = 'Login';
    link.href = 'user_login.html';
    logoutBtn.style.display = 'none';
    cartIcon.style.display = 'none';

    text.classList.add('login-style');
    text.classList.remove('text-style');
  }
}



function logout() {
  localStorage.removeItem('loggedIn');
  localStorage.removeItem('username');
  window.location.href = 'user_login.html';
}

//compra
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

