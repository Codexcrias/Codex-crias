const questions = [
    {
        question: "O que é a Internet das Coisas (IoT)?",
        options: ["Conectar dispositivos à internet", "Uma rede social", "Sistema de segurança", "None of the above"],
        correctAnswer: 0
    },
    {
        question: "O que significa a sigla 'SQL'?",
        options: ["Structured Query Language", "Simple Query Language", "Sequential Query Language", "None of the above"],
        correctAnswer: 0
    },
    {
        question: "Qual dessas linguagens é usada para criar páginas web dinâmicas?",
        options: ["PHP", "C++", "Java", "Pascal"],
        correctAnswer: 0
    },
    {
        question: "O que é o 'Big Data'?",
        options: ["Tecnologia para armazenar grandes volumes de dados", "Uma linguagem de programação", "Uma rede social", "Nenhuma das alternativas"],
        correctAnswer: 0
    },
    {
        question: "Qual a principal função do DNS (Domain Name System)?",
        options: ["Converter nomes de domínio em IPs", "Controlar o tráfego da internet", "Armazenar dados na nuvem", "Nenhuma das alternativas"],
        correctAnswer: 0
    },
    {
        question: "O que significa a sigla 'CPU'?",
        options: ["Central Processing Unit", "Central Programming Unit", "Computer Processing Unit", "Central Program Unit"],
        correctAnswer: 0
    },
    {
        question: "O que é um 'Firewall'?",
        options: ["Sistema de segurança para redes de computadores", "Um tipo de banco de dados", "Sistema de backup de dados", "Uma rede social"],
        correctAnswer: 0
    },
    {
        question: "O que é o protocolo HTTP?",
        options: ["Protocolo de comunicação para transferência de páginas web", "Protocolo de transferência de e-mails", "Protocolo de segurança de rede", "Nenhuma das alternativas"],
        correctAnswer: 0
    },
    {
        question: "Qual é a principal função do protocolo TCP/IP?",
        options: ["Permitir a comunicação entre dispositivos na rede", "Armazenar dados", "Codificar arquivos de imagem", "Nenhuma das alternativas"],
        correctAnswer: 0
    },
    {
        question: "O que é 'Cloud Computing'?",
        options: ["Armazenamento e processamento de dados pela internet", "Uma linguagem de programação", "Uma forma de segurança de rede", "Nenhuma das alternativas"],
        correctAnswer: 0
    },
    {
        question: "O que é um 'Algoritmo'?",
        options: ["Sequência de passos para resolver um problema", "Uma linguagem de programação", "Um tipo de banco de dados", "Nenhuma das alternativas"],
        correctAnswer: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").textContent = question.question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = ''; // Limpa as opções anteriores
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsDiv.appendChild(button);
    });
    document.getElementById("next-button").style.display = 'none'; // Esconde o botão "Próxima Pergunta" inicialmente
    document.getElementById("result").style.display = 'none'; // Esconde o resultado
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const resultDiv = document.getElementById("result");

    // Limpar resultados anteriores
    resultDiv.innerHTML = '';

    const resultMessage = document.createElement('p');

    if (selectedIndex === question.correctAnswer) {
        score++;
        resultMessage.textContent = "Resposta correta! 🎉";
        resultMessage.style.color = 'green';
    } else {
        resultMessage.textContent = `Resposta errada! 😔 A resposta correta é: ${question.options[question.correctAnswer]}`;
        resultMessage.style.color = 'red';
    }

    resultDiv.appendChild(resultMessage);
    resultDiv.style.display = 'block'; // Exibe o resultado

    // Exibe o botão para ir para a próxima pergunta
    document.getElementById("next-button").style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showFinalResult();
    }
}

function showFinalResult() {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h3>Resultado Final:</h3><p>Sua pontuação é ${score} de ${questions.length} perguntas.</p>`;
    document.getElementById("next-button").style.display = 'none'; // Esconde o botão "Próxima Pergunta"
}

// Começar o quiz exibindo a primeira pergunta
showQuestion();
