const btn = document.querySelector('button'); // Selecionando o button.
const div = document.querySelector('.container'); //Selecionando a div.

btn.addEventListener('click', () =>{ // Adicionando um evento que ao clique executará a função createNotification.
    createNotification();
});

function createNotification (){
    const notification = document.createElement('div');
    notification.classList.add('toast');
    notification.innerHTML = 'Please click one more time';

    div.appendChild(notification);

    setTimeout(() =>{
        notification.remove();
    }, 3000);
}

// A função createNotification cria uma div de classe 'toast'. Essa div de classe 'toast' é inserida dentro da primeira div, de classe 'container'.  O método setTimeout faz o seguinte: Você define um cronômetro que executará uma função ou parte de um código especificado assim que o tempo do cronômetro expirar (No caso, 3s após o momento q eu cliquei no botão, a notificação será apagada.). 