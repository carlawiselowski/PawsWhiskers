

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