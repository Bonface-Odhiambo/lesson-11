const todoList = [{
    name: 'make dinner', 
    dueDate: '2022-12-22'},
    {name: 'wash dishes',
    dueDate: '2022-12-22'}
];

renderTodoList();

function renderTodoList () {
    let todoListHTML = '';

for (let i=0; i< todoList.length; i++) {
    const todoObject = todoList [i];
    const name = todoObject.name;
    const dueDate= todoObject.dueDate;

    const HTML = <p>
        ${name} ${dueDate}
        <button onclick= "todoList.splice (${i}, 1);
        rendertodoList();"
        Delete></button>
    </p>;
}
}

function addTodo () {
    const inputElement = document.querySelector ('.js-name-input');
    const name = inputElement.value;

    todoList.push(name);
    console.log(todoList);

    inputElement.value= '';

    renderTodoList ();
}
