function abrir(id) {
    document.querySelectorAll('.conteudo').forEach(div => {
        div.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});