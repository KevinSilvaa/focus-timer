const toggleButton = document.getElementById('toggle-mode');

let darkMode = true;

toggleButton.addEventListener('click', event => {
    document.documentElement.classList.toggle('light');
    
    const mode = darkMode ? 'Light' : 'Dark';
    event.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`
    darkMode = !darkMode;
})
