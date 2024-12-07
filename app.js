const collectionEl = document.querySelector('.collection')
const textInputEl = document.querySelector('.text')
const formEl = document.querySelector('.form')

const TODOS = JSON.parse(localStorage.getItem("todos")) ||  [
    {
        id: 1,
        title: 'Erta turish',
        status: false
    },
    {
        id: 2,
        title: 'Yuz yuvish',
        status: false
    },
    {
        id: 3,
        title: 'Nonushta qilish',
        status: false
    },
]

function createTodo(data){
    while(collectionEl.firstChild){
        collectionEl.firstChild.remove()
    }
    data.forEach(item => {
        const liEl = document.createElement("li")
        liEl.className = 'list'        
        liEl.innerHTML = `
            <input ${item.status && 'checked'} type="checkbox">
            <span>${item.title}</span>
        `
        collectionEl.appendChild(liEl)
    });
}

window.addEventListener("load", ()=> {
    createTodo(TODOS)
})

formEl.addEventListener("submit", e => {
    e.preventDefault()
    console.log(textInputEl.value);
    let newTodo = {
        id: new Date().getTime(),
        title: textInputEl.value,
        status: false
    }

    TODOS.push(newTodo)
    localStorage.setItem("todos", JSON.stringify(TODOS))
    createTodo(TODOS)
    textInputEl.value = ''
})