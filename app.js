//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array que armazena os nomes dos amigos adicionados
let amigos = [];

// Função responsável por adicionar um novo amigo à lista
function adicionarAmigo() {
  let nome = document.getElementById("amigo").value; // Obtém o nome digitado no input
  if (nome === "") {
    // Valida se o campo está vazio
    alert("Por favor, insira um nome.");
  } else {
    amigos.push(nome); // Adiciona o nome ao array de amigos
    atualizarLista(); // Atualiza a lista exibida na tela
    document.getElementById("amigo").value = ""; // Limpa o campo de input
  }
}
// Função que atualiza a lista de amigos exibida na tela
function atualizarLista() {
  let lista = document.getElementById("listaAmigos"); // Seleciona o elemento da lista
  lista.innerHTML = ""; // Limpa a lista antes de atualizar
  amigos.forEach(function (amigo) {
    let li = document.createElement("li"); // Cria um item de lista para cada amigo
    li.textContent = amigo;
    lista.appendChild(li); // Adiciona o item à lista
  });
}

// Função que sorteia aleatoriamente um amigo da lista
function sortearAmigo() {
  if (amigos.length === 0) {
    // Verifica se há amigos na lista
    alert("Não há amigos para sortear!");
    return;
  }

  // Gera um índice aleatório baseado no tamanho do array
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio]; // Seleciona o amigo sorteado
  document.getElementById("resultado").innerHTML =
    "Amigo Sorteado: " + amigoSorteado; // Exibe o resultado na tela
}
