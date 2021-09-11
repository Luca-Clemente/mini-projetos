const btn = document.getElementById('btn'); // Selecionando o elemento de id btn.

btn.addEventListener('click', () => {
    document.body.style.background = randomColor();
}); 
/*
Adicionando um evento ao elemento de id 'btn' que ao clicar nele o body do documento será estilizado de acordo com a função randomColor();
*/

 function randomColor () {
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}
/*
O método floor () arredonda um número PARA BAIXO para o inteiro mais próximo e retorna o resultado.

Se o argumento passado for um número inteiro, o valor não será arredondado.

Math.random() retorna um número aleatório entre 0 (inclusivo) e 1 (exclusivo).
Math.random()usado com Math.floor()pode ser usado para retornar inteiros aleatórios.

A função retornará um inteiro de 0 até 359. 

*/