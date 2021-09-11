const open = document.getElementById('open'); // Selecionando o elemento de id 'open'.
const close = document.getElementById('close'); // Selecionando o elemento de id 'close'.
const container = document.getElementById('container'); // Selecionando o elemento de id 'container'.

open.addEventListener('click', () => {
    container.classList.add('active');
});
/*
Adicionando um evento ao elemento de id 'open' que ao clicar nele será adicionado uma classe de nome 'active' ao elemento de id 'container'.
*/
close.addEventListener('click', () => {
    container.classList.remove('active');
});
/*
Adicionando um evento ao elemento de id 'close' que ao clicar nele será removida uma classe de nome 'active' no elemento de id 'container'
*/