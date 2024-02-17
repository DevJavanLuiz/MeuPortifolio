const navTheme = document.querySelector('.nav-theme');
const btnColor = document.querySelector('.btn-colors');


btnColor.addEventListener('click', (el) => {
    navTheme.classList.toggle('open');
    
})