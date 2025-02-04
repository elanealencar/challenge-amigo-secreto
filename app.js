let amigosArray = []; // Array para armazenar os amigos

function adicionarAmigo() {
    const amigoInput = document.getElementById("amigo");
    const amigo = amigoInput.value.trim();

    if (amigo === "") {
        alert("Digite um nome válido!");
        return;
    }

    amigosArray.push(amigo); // Adiciona o nome ao array
    atualizarListaAmigos(); // Atualiza a exibição da lista

    amigoInput.value = ""; // Limpa o campo de input
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpa a lista antes de recriar os itens

    amigosArray.forEach((amigo, index) => {
        const amigoItem = document.createElement("li");
        amigoItem.classList.add("amigo-item");
        amigoItem.textContent = amigo;

        // Criando botão de remover
        const removeButton = document.createElement("button");
        removeButton.textContent = "X";
        removeButton.classList.add("remove-button");
        removeButton.onclick = function () {
            removerAmigo(index);
        };

        amigoItem.appendChild(removeButton);
        listaAmigos.appendChild(amigoItem);
    });
}

function removerAmigo(index) {
    amigosArray.splice(index, 1); // Remove o amigo do array
    atualizarListaAmigos(); // Atualiza a lista exibida
}

function sortearAmigo() {
    if (amigosArray.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }

    const amigoSecreto = amigosArray[Math.floor(Math.random() * amigosArray.length)];
    const resultado = document.getElementById("resultado");
    resultado.textContent = "O amigo secreto é: " + amigoSecreto;
}
