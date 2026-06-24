const toggle = document.querySelector('.toggle');
const content = document.querySelector('.abstract');

toggle.addEventListener('click', (e) => {
    content.toggleAttribute('open');
});