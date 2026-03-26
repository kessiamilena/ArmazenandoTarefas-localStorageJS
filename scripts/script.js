const inputTarefa = document.getElementById("input-tarefa");
const botaoAdicionar = document.getElementById("botao-adicionar");
const listaTarefas = document.getElementById("lista-tarefas");

// criando lista vazia
let tarefas = [];

// função para salvar tarefas
function salvarTarefas() {
    /*
        localStorage -> armazenamento local do navegador
        setItem -> salva no armazenamento o conteúdo recebido
        JSON.stringify(tarefas) -> pega a lista de tarefas, converte para texto (string) e armazena esse texto.
    */
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

// função para mostrar tarefas na tela
function mostrarTarefas() {
    listaTarefas.innerHTML = "";

    for(let i = 0; i < tarefas.length; i++) {

        const li = document.createElement("li");
        li.innerText = tarefas[i]

        const botaoRemover = document.createElement("button");
        botaoRemover.innerText = "🗑️";
        botaoRemover.className = "botao-remover";

        botaoRemover.addEventListener("click", () => {
            removerTarefas(i);
        })

        li.appendChild(botaoRemover);
        listaTarefas.appendChild(li);
    }
}

function removerTarefas(posicaoTarefa) {

    // splice -> (posicaoInicial, qtde_itens)
    tarefas.splice(posicaoTarefa, 1);

    //depois de remover, chamo a função de salvar no localStorage
    salvarTarefas();

    // mostra as tarefas atualizadas, sem as que foram removidas.
    mostrarTarefas();
}

// função para adicionar tarefas
function adicionarTarefas() {
    const valorTarefa = inputTarefa.value;

    if(valorTarefa === "") {
        alert("Digite uma tarefa!");
        return; // não deixa que a tarefa vazia apareça na tela
    }

    tarefas.push(valorTarefa); // adiciona a tarefa digitada dentro do array.
    inputTarefa.value = "";

    salvarTarefas();
    mostrarTarefas();
}

// função para carregar tarefas salvas no localStorage
function carregarTarefas() {
    // pega as tarefas e armazena na variavel 'tarefasSalvas'
    const tarefasSalvas = localStorage.getItem("tarefas");

    // se existir alguma coisa dentro de tarefas salvas
    // então converte a tarefa e mostra na tela.
    if(tarefasSalvas) {
        // transforma o texto em array novamente
        tarefas = JSON.parse(tarefasSalvas);
        mostrarTarefas();
    }
}

botaoAdicionar.addEventListener("click", adicionarTarefas);
carregarTarefas();
















/*
let listaTeste = ["Fernanda", "Guilherme", "Lucas"]; // tamanho 3

// let i = 0 -> o valor inicial da repetição vai iniciar em zero
// i < listaTeste.length -> validar se o i é menor que tamanho da lista

for(let i = 0; i < listaTeste.length; i++) {
    console.log(listaTeste[i]);
}
*/