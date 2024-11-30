const output = document.getElementById('output');
const inputField = document.getElementById('input');
const sendButton = document.getElementById('send');

const responses = {
        "olá": "Olá! Como posso ajudar você hoje?",
        "ola": "Olá! Como posso ajudar você hoje?", // sem acento
        "quem é você?": "Eu sou um chatbot simples, criado para simular o ChatGPT.",
        "quem e voce?": "Eu sou um chatbot simples, criado para simular o ChatGPT.", // sem acento
        "qual seu nome?": "Eu ainda não tenho um nome! Quer me dar um?",
        "qual seu nome": "Eu ainda não tenho um nome! Quer me dar um?", // sem acento
        "adeus": "Até mais! Volte sempre.",
        "adeus": "Até mais! Volte sempre.",
        "default": "Desculpe, não entendi isso. Pode reformular sua pergunta?",
        "default": "Desculpe, não entendi isso. Pode reformular sua pergunta?",
    
        // Perguntas sobre programação e desenvolvimento
        "o que é programação?": "Programação é o processo de criar instruções que permitem que um computador execute tarefas específicas.",
        "o que e programacao?": "Programação é o processo de criar instruções que permitem que um computador execute tarefas específicas.", // sem acento
        "qual linguagem de programação devo aprender?": "Depende do seu objetivo. Para web, HTML, CSS e JavaScript são ótimos. Para software, Python e Java são populares.",
        "qual linguagem de programacao devo aprender?": "Depende do seu objetivo. Para web, HTML, CSS e JavaScript são ótimos. Para software, Python e Java são populares.", // sem acento
        "o que é um algoritmo?": "Um algoritmo é uma sequência de passos ou instruções bem definidas para resolver um problema ou realizar uma tarefa.",
        "o que e um algoritmo?": "Um algoritmo é uma sequência de passos ou instruções bem definidas para resolver um problema ou realizar uma tarefa.", // sem acento
        "o que é desenvolvimento web?": "Desenvolvimento web é a criação de websites e aplicações web. Isso envolve programação de frontend (o que o usuário vê) e backend (o que roda no servidor).",
        "o que e desenvolvimento web?": "Desenvolvimento web é a criação de websites e aplicações web. Isso envolve programação de frontend (o que o usuário vê) e backend (o que roda no servidor).", // sem acento
        
        // Perguntas sobre redes
        "o que é uma rede de computadores?": "Uma rede de computadores é um conjunto de computadores interligados para compartilhar recursos e dados.",
        "o que e uma rede de computadores?": "Uma rede de computadores é um conjunto de computadores interligados para compartilhar recursos e dados.", // sem acento
        "o que é ip?": "IP (Internet Protocol) é o endereço único que identifica um dispositivo em uma rede, permitindo a comunicação entre eles.", // minúsculas
        "o que e IP?": "IP (Internet Protocol) é o endereço único que identifica um dispositivo em uma rede, permitindo a comunicação entre eles.", // com maiúsculas
        "o que é vpn?": "VPN (Virtual Private Network) é uma rede privada virtual que oferece segurança e privacidade ao navegar na internet.", // minúsculas
        "o que e VPN?": "VPN (Virtual Private Network) é uma rede privada virtual que oferece segurança e privacidade ao navegar na internet.", // com maiúsculas
        
        // Perguntas sobre segurança
        "o que é um firewall?": "Um firewall é uma barreira de segurança que monitora e controla o tráfego de rede, permitindo ou bloqueando pacotes de dados com base em regras de segurança.",
        "o que e um firewall?": "Um firewall é uma barreira de segurança que monitora e controla o tráfego de rede, permitindo ou bloqueando pacotes de dados com base em regras de segurança.", // sem acento
        "o que é phishing?": "Phishing é uma técnica fraudulenta usada para obter informações sensíveis, como senhas e números de cartão de crédito, geralmente por meio de e-mails falsos.",
        "o que e phishing?": "Phishing é uma técnica fraudulenta usada para obter informações sensíveis, como senhas e números de cartão de crédito, geralmente por meio de e-mails falsos.", // sem acento
        "como posso proteger meu computador contra vírus?": "Para proteger seu computador, use um antivírus atualizado, evite clicar em links desconhecidos e mantenha seu sistema e softwares atualizados.",
        "como posso proteger meu computador contra virus?": "Para proteger seu computador, use um antivírus atualizado, evite clicar em links desconhecidos e mantenha seu sistema e softwares atualizados.", // sem acento
        
        // Perguntas sobre banco de dados
        "o que é um banco de dados?": "Um banco de dados é um sistema que armazena e organiza dados de maneira eficiente para fácil acesso, gerenciamento e atualização.",
        "o que e um banco de dados?": "Um banco de dados é um sistema que armazena e organiza dados de maneira eficiente para fácil acesso, gerenciamento e atualização.", // sem acento
        "o que é sql?": "SQL (Structured Query Language) é uma linguagem de programação usada para gerenciar e consultar dados em bancos de dados relacionais.", // minúsculas
        "o que e SQL?": "SQL (Structured Query Language) é uma linguagem de programação usada para gerenciar e consultar dados em bancos de dados relacionais.", // com maiúsculas
        "o que é normalização de banco de dados?": "A normalização é o processo de organizar os dados em um banco de dados para reduzir a redundância e melhorar a integridade dos dados.",
        "o que e normalizacao de banco de dados?": "A normalização é o processo de organizar os dados em um banco de dados para reduzir a redundância e melhorar a integridade dos dados." // sem acento
    };
    
    


sendButton.addEventListener('click', () => {
    const userMessage = inputField.value.trim().toLowerCase();
    if (userMessage) {
        displayMessage(userMessage, 'user');
        const botResponse = getBotResponse(userMessage);
        setTimeout(() => displayMessage(botResponse, 'bot'), 1000);
    }
    inputField.value = '';
});

inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendButton.click();
});

function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.className = sender === 'user' ? 'user-message' : 'bot-message';
    messageElement.textContent = message;
    output.appendChild(messageElement);
    output.scrollTop = output.scrollHeight;
}

function getBotResponse(message) {
    return responses[message] || responses["default"];
}
