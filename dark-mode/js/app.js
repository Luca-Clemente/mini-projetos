const toggle = document.getElementById('toggle'); // Selecionando o elemento de id 'toggle'. No caso, o input.

toggle.addEventListener('change', (e) => {
    document.body.classList.toggle('dark', e.target.checked);
});