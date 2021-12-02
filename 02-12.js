const requestAllTodos = () => {
    const ajax = new XMLHttpRequest()

    ajax.onreadystatechange = () => {
        let state = ajax.readyState
        if (state === 4) {
            if (ajax.status === 200) {
                const todoList = JSON.parse(ajax.responseText)
                displayToDoListInTable(todoList)
            }
        }
    }
    
    ajax.open("GET", "https://jsonplaceholder.typicode.com/todos")
    ajax.send()

}
const displayToDoListInTable = (todoList) => {
    const todoTableBody = document.getElementById("todo-table-body")
    let tableRows = ''
    for (let todoElement of todoList) {

        if (todoElement.id === 1) {
            tableRows += `
                    <tr>
                        <td>${todoElement.title}</td>
                        <td>${todoElement.userId}</td>
                        <td>${todoElement.completed}</td>
                    </tr>
                    `
        }
    }
    todoTableBody.innerHTML = tableRows
}