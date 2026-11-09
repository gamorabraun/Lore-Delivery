
const formulario = document.getElementById("formEntrega");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    // Gera um código aleatório
    function gerarCodigo() {

        const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let codigo = "";

        const valores = new Uint32Array(8);
        crypto.getRandomValues(valores);

        for (let i = 0; i < 8; i++) {
            codigo += caracteres[valores[i] % caracteres.length];
        }

        return "LOR-" + codigo.slice(0, 4) + "-" + codigo.slice(4, 8);
    }

    const codigo = gerarCodigo();

    // Organiza os dados da entrega
    const entrega = {
        remetente: document.getElementById("nomeEnvio").value,
        telefoneRemetente: document.getElementById("telefoneEnvio").value,
        enderecoRetirada: document.getElementById("enderecoEnvio").value,
        numeroRetirada: document.getElementById("numeroEnvio").value,

        destinatario: document.getElementById("nomeRecebe").value,
        telefoneDestinatario: document.getElementById("telefoneRecebe").value,
        enderecoEntrega: document.getElementById("enderecoRecebe").value,
        numeroEntrega: document.getElementById("numeroRecebe").value,

        codigoRastreio: codigo
    };

    // Salva as solicitações no navegador
    let entregas = JSON.parse(localStorage.getItem("entregasLore")) || [];

    entregas.push(entrega);

    localStorage.setItem("entregasLore", JSON.stringify(entregas));

    // Exibe a confirmação
    document.getElementById("codigoRastreio").textContent = codigo;

    document.getElementById("resultado").hidden = false;

    // Limpa os campos para uma nova solicitação
    formulario.reset();

    // Leva o cliente até a confirmação
    document.getElementById("resultado").scrollIntoView({
        behavior: "smooth"
    });

});
