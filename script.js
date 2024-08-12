

//evento de zoom 
    const items = document.querySelectorAll('.box');

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