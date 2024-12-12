const chatbotButton = document.getElementById('chatbot-button');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotBody = document.getElementById('chatbot-body');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');

// Alternar visibilidade do chatbot
chatbotButton.addEventListener('click', () => {
    chatbotWindow.style.display = chatbotWindow.style.display === 'none' ? 'block' : 'none';
});

// Enviar mensagem
chatbotSend.addEventListener('click', sendMessage);

// Função para enviar mensagem
function sendMessage() {
    const userMessage = chatbotInput.value.trim();
    if (userMessage) {
        appendMessage(userMessage, 'user-message');
        chatbotInput.value = '';
        botResponse(userMessage);
    }
}

// Função para adicionar mensagem na tela
function appendMessage(message, className) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${className}`;
    messageElement.textContent = message;
    chatbotBody.appendChild(messageElement);
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
}

// Respostas básicas do chatbot
function botResponse(userMessage) {
    let botMessage = "Desculpe, não entendi. Pode reformular?";

    if (userMessage.includes('ajuda')) {
        botMessage = "Estou aqui para ajudar! Sobre o que você precisa de ajuda?";
    } else if (userMessage.includes('eventos')) {
        botMessage = "Para saber sobre os eventos, visite a página de 'Eventos' no nosso site!";
    } else if (userMessage.includes('localização')) {
        botMessage = "Você pode nos encontrar em Belo Horizonte. Consulte o mapa na página 'Sobre Nós'.";
    }
    

    setTimeout(() => appendMessage(botMessage, 'bot-message'), 1000);
}