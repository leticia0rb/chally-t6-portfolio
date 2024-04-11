document.addEventListener("DOMContentLoaded", function() {
    const enviarBtn = document.getElementById("enviarBtn");
    const formContato = document.getElementById("formContato");

    formContato.addEventListener("submit", function(event) {
        event.preventDefault();

        let isValid = true;

        // Validação de Nome
        const nome = document.getElementById("nome");
        const erroNome = document.getElementById("erroNome");
        erroNome.textContent = "";
        if (nome.value.trim() === "" || nome.value.length > 50) {
            erroNome.textContent = "O nome é obrigatório e deve ter no máximo 50 caracteres.";
            isValid = false;
        }

        // Validação de E-mail
        const email = document.getElementById("email");
        const erroEmail = document.getElementById("erroEmail");
        erroEmail.textContent = "";
        if (email.value.trim() === "" || !email.value.includes("@")) {
            erroEmail.textContent = "Por favor, insira um e-mail válido.";
            isValid = false;
        }

        // Validação de Assunto
        const assunto = document.getElementById("assunto");
        const erroAssunto = document.getElementById("erroAssunto");
        erroAssunto.textContent = "";
        if (assunto.value.trim() === "" || assunto.value.length > 50) {
            erroAssunto.textContent = "O assunto é obrigatório e deve ter no máximo 50 caracteres.";
            isValid = false;
        }

        // Validação de Mensagem
        const mensagem = document.getElementById("mensagem");
        const erroMensagem = document.getElementById("erroMensagem");
        erroMensagem.textContent = "";
        if (mensagem.value.trim() === "" || mensagem.value.length > 300) {
            erroMensagem.textContent = "A mensagem é obrigatória e deve ter no máximo 300 caracteres.";
            isValid = false;
        }
        
        if (isValid) {
            formContato.submit();
        }
    });

    function verificarCamposPreenchidos() {
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const assunto = document.getElementById("assunto").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();
        const enviarBtn = document.getElementById("enviarBtn");
    
        const emailValido = email.includes("@");
    
        // Verifica se todos os campos estão preenchidos e o e-mail é válido
        if (nome !== "" && assunto !== "" && mensagem !== "" && mensagem.length <= 300) {
            enviarBtn.disabled = false; 
        } else {
            enviarBtn.disabled = true;
        }
    }

    document.getElementById("nome").addEventListener("input", verificarCamposPreenchidos);
    document.getElementById("email").addEventListener("input", verificarCamposPreenchidos);
    document.getElementById("assunto").addEventListener("input", verificarCamposPreenchidos);
    document.getElementById("mensagem").addEventListener("input", verificarCamposPreenchidos);

});

