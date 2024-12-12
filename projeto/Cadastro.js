document.addEventListener("DOMContentLoaded", function() {
    const modeIcon = document.getElementById('mode_icon'); // Botão para mudar de modo
    const body = document.body; // Referência ao corpo do documento
    const starsContainer = document.createElement('div'); // Cria um contêiner para as estrelas
    starsContainer.className = 'stars-container'; // Adiciona uma classe para o contêiner
    body.appendChild(starsContainer); // Adiciona o contêiner ao corpo do documento

    // Função para criar estrelas
    function createStars(numStars) {
        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div'); // Cria uma estrela
            star.className = 'star'; // Adiciona a classe de estrela
            star.style.left = `${Math.random() * 100}vw`; // Posição aleatória
            star.style.animationDuration = `${Math.random() * 2 + 3}s`; // Durações aleatórias
            star.style.opacity = Math.random(); // Opacidade aleatória
            starsContainer.appendChild(star); // Adiciona a estrela ao contêiner
        }
    }

    // Adiciona a animação ao ativar o modo escuro
    modeIcon.addEventListener('click', function() {
        body.classList.toggle('dark-mode'); // Alterna a classe dark-mode

        if (body.classList.contains('dark-mode')) {
            modeIcon.classList.remove('fa-moon'); // Muda o ícone para sol
            modeIcon.classList.add('fa-sun');
            starsContainer.style.display = 'block'; // Exibir estrelas
            createStars(100); // Criar 100 estrelas
        } else {
            modeIcon.classList.remove('fa-sun'); // Muda o ícone para lua
            modeIcon.classList.add('fa-moon');
            starsContainer.style.display = 'none'; // Ocultar estrelas
            starsContainer.innerHTML = ''; // Limpar estrelas
        }
    });

    // Inicializa as estrelas no modo noturno se já estiver ativo
    if (body.classList.contains('dark-mode')) {
        starsContainer.style.display = 'block'; // Exibir estrelas
        createStars(100); // Criar 100 estrelas
    }
});
