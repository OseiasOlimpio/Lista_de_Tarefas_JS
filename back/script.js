//pega as informações do input
const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaListadeItens = []



function adicionarTarefa() {
    minhaListadeItens.push({
        tarefa: input.value,
        concluida: false
    }) //adiciona os itens ao array

    input.value = '' //LIMPA O INPUT

    mostrarTarefas() // mostra a tarefa na lista
}

function mostrarTarefas() {
    let novaLi = ''

    minhaListadeItens.forEach((item, index) => {
        novaLi = novaLi + `
            <li class="task ${item.concluida && "done"}"">
                <img  src="./img/checked.png" alt="check" onclick="concluirTarefa(${index})">
                <p>${item.tarefa}</p>
                <img src="./img/trash.png" alt="delete" onclick="deletarItem(${index})">
            </li>
            `
    })
    
    listaCompleta.innerHTML = novaLi
    localStorage.setItem('lista', JSON.stringify(minhaListadeItens))
}



// marca como concluido
function concluirTarefa(index) {
    minhaListadeItens[index].concluida = !minhaListadeItens[index].concluida

    mostrarTarefas()
}

// deleta um item
function deletarItem(index) {
    minhaListadeItens.splice(index, 1)

    mostrarTarefas()
}

function recarregarTarefas() {
    const tarefasLocalStorage = localStorage.getItem('lista')

    if (tarefasLocalStorage) {
        minhaListadeItens = JSON.parse(tarefasLocalStorage)
    }

    mostrarTarefas()
}

recarregarTarefas()

button.addEventListener('click', adicionarTarefa)