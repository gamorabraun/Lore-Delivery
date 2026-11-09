function cadastrar() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if (nome == "" || email == "" || usuario == "" || senha == "") {

        document.getElementById("mensagem").textContent = "Preencha todos os campos!";

    } else {
        let pessoa = {
            nome: nome,
            email: email,
            usuario: usuario,
            senha: senha
        };

        localStorage.setItem("cadastro", JSON.stringify(pessoa));

        document.getElementById("mensagem").textContent = "Cadastro realizado!";
    }
}

function entrar() {
    let usuario = document.getElementById("loginUsuario").value;
    let senha = document.getElementById("loginSenha").value;
    let dados = JSON.parse(localStorage.getItem("cadastro"));

    if (dados == null) {
        document.getElementById("mensagem").textContent = "Realize seu cadastro primeiro!";

    } else if (usuario == dados.usuario && senha == dados.senha) {
        document.getElementById("mensagem").textContent = "Acesso permitido!";
        document.getElementById("plataforma").style.display = "block";

    } else {
        document.getElementById("mensagem").textContent = "Usuário ou senha incorretos!";
    }
}