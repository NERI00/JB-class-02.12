const requestAllTodos = () => {
    const ajax = new XMLHttpRequest()

    //1. what to do with the data
    ajax.onreadystatechange = () => {
        console.log(ajax.readyState)
        let state = ajax.readyState
        let status = 0
        // state 4 is compleate
        if(state === 4){
            // status 200 is OK
            if(ajax.status === 200){
               const todoList = JSON.parse(ajax.responseText)

               console.log(todoList)
            }
            
        }
    }
    //2. the adress (url)
    ajax.open("GET","https://jsonplaceholder.typicode.com/todos")
    //3. send the request
    ajax.send()

}