const btnToggle = document.getElementById('burger');
const navBar = document.querySelector('.holder');

btnToggle.addEventListener('click', () => {
    navBar.classList.toggle('active');
});