document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const tipo = document.querySelector('input[name="tipo"]:checked').value;  // Obtendo o tipo de usuário (doador ou empresa)

    const usuario = {
        nome: nome,
        email: email,
        senha: senha,
        tipo: tipo  
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    alert("Cadastro realizado com sucesso!");
    location.href = "login.html";
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (usuario && usuario.email === username && usuario.senha === password) {
        alert("Login bem-sucedido!");

        
        if (usuario.tipo === 'doador') {
            location.href = "doador.html"; 
        } else if (usuario.tipo === 'empresa') {
            location.href = "empresa.html";  
        }
    } else {
        alert("Credenciais inválidas!");
    }
});

document.getElementById("cupomForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const codigo = document.getElementById("codigo").value;
    const descricao = document.getElementById("descricao").value;
    const usuarioId = document.getElementById("usuario").value;

    const cupom = {
        codigo: codigo,
        descricao: descricao,
        usuarioId: usuarioId
    };

    let cupons = JSON.parse(localStorage.getItem("cupons")) || [];
    cupons.push(cupom);

    localStorage.setItem("cupons", JSON.stringify(cupons));

    alert("Cupom cadastrado com sucesso!");
});
