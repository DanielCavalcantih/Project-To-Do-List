let buttonAdd = document.getElementById('criar-tarefa');
let inputText = document.getElementById('texto-tarefa');
let taskList = document.getElementById('lista-tarefas');

buttonAdd.addEventListener('click', criarTarefa);

function criarTarefa() {
    let itemLista = document.createElement('li');
    itemLista.className = 'list-item'
    itemLista.addEventListener('click', function(){
        itemLista.style.backgroundColor = 'gray';
    })
    itemLista.innerText = inputText.value;
    taskList.appendChild(itemLista);
    inputText.value = '';
}





