const text = 'Luca Clemente dos Santos Cruz' // Criando o texto que se escreverá sozinho.
let index = 0; // Determinando que o index começa no 0.

function writeText (){
    document.body.innerText = text.slice (0, index); 
    index ++; 

    if (index > text.length) {
        index = 0;
    }
}
/*
A função writeText diz que:
O conteúdo do body será o texto que criamos. 
O método slice() extrai uma parte de uma string e a retorna como uma nova string, sem modificar a string original.
Esse código está dizendo que o innerText do body será o texto 'Luca Clemente dos Santos Cruz' que começará na posição 0 ('L') e irá até o index.
No próximo passo nós incrementamos um ao index e criamos um laço condicional que diz que se o index for maior que o tamanho do texto, index é igual a 0, ou seja, volta ao início,
criando um sistema de repetição.

*/
setInterval(writeText,100);

/*
O método setInterval () chama uma função ou avalia uma expressão em intervalos especificados (em milissegundos).
O método setInterval () continuará chamando a função até que clearInterval () seja chamado ou a janela seja fechada.
No caso o intervalo é de 1s e executa a função writeText.
*/
