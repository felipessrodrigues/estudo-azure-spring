document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('title');

    title.addEventListener('click', () => {
        console.log('O título foi clicado!');
        alert('Você clicou no título!');
    });
});
