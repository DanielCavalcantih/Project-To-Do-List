let buttonAdd = document.getElementById('criar-tarefa');
let inputText = document.getElementById('texto-tarefa');
let taskList = document.getElementById('lista-tarefas');


buttonAdd.addEventListener('click', criarTarefa);

function criarTarefa() {
    let itemLista = document.createElement('li');
    itemLista.className = 'list-item'
    itemLista.addEventListener('click', selectItem)
    itemLista.addEventListener('dblclick', completeTask)
    itemLista.innerText = inputText.value;
    taskList.appendChild(itemLista);
    inputText.value = '';
}

function selectItem(event){
    if(document.querySelectorAll('.selected').length > 0){
        let selectedItem = document.querySelector('.selected');
        selectedItem.classList.remove('selected')
    }
    event.target.classList += ' selected';
}

function completeTask(event){
        if(event.target.className.includes('completed')){
            event.target.classList.remove('completed');
        }else if(event.target.className !== 'completed'){
            event.target.classList.add('completed');
        }
}


