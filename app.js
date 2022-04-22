const app = new Vue({
    el: '#app',
    data: {

        todo:{
            text:"",
            done: false
        },
        

        todos: [
            {
                text: "Fare i compiti",
                done: true
            },

            {
                text: "Fare la spesa",
                done: false
            },

            {
                text: "Fare il bucato",
                done: true
            }
        ]
    },

    methods:{
        removeTodo(i){
            this.todos.splice(i, 1)
        },

        addTodo(){
            console.log(this.todo.text)
            this.todos.unshift(this.todo)
            this.todo = {
                text:"",
                done: false
            }   
        },

        barroEsbarro(i){
            if(this.todos[i].done === true){
                this.todos[i].done = false
            }else if(this.todos[i].done === false){
                this.todos[i].done = true
            }
            console.log(this.todos[i].done);
        }
    }
})
