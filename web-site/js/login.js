document.addEventListener("DOMContentLoaded", function() {
    // Captura o formulário e o botão de login
    const form = document.getElementById("loginForm");
    const cpfInput = document.getElementById("cpf");
    const senhaInput = document.getElementById("senha");

    // Função de validação de CPF (simples)
    function validarCPF(cpf) {
        const regex = /^\d{11}$/;  // Verifica se o CPF tem 11 dígitos
        return regex.test(cpf);
    }

    // Função de validação de senha (exemplo simples)
    function validarSenha(senha) {
        return senha.length >= 6;  // Senha deve ter pelo menos 6 caracteres
    }

    // Função de login (simulada)
    function realizarLogin(cpf, senha) {
        const usuarios = [
            { cpf: "12345678900", senha: "senha123" },  // Exemplo de usuário
            { cpf: "98765432100", senha: "senha456" }
        ];

        // Verifica se o CPF e a senha correspondem a algum usuário
        const usuarioEncontrado = usuarios.find(user => user.cpf === cpf && user.senha === senha);
        
        if (usuarioEncontrado) {
            alert("Login bem-sucedido!");
            // Redireciona ou realiza outras ações
            window.location.href = "logado.html";  // Exemplo de redirecionamento
        } else {
            alert("CPF ou senha inválidos.");
        }
    }

    // Evento de submit do formulário
    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Impede o envio do formulário tradicional

        const cpf = cpfInput.value.trim();
        const senha = senhaInput.value.trim();

        // Valida CPF e Senha
        if (!validarCPF(cpf)) {
            alert("CPF inválido. O CPF deve conter 11 dígitos.");
            return;
        }

        if (!validarSenha(senha)) {
            alert("A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        // Realiza o login
        realizarLogin(cpf, senha);
    });
});
