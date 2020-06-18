const app = new Vue({
    el: '#app',
    data: {
        title: 'Todo List of Hen',
        newTodo: '',
        todoArray: []
    },
    methods: {
        addTodo(){
            this.todoArray.push({
                title: this.newTodo,
                done: false
            });
            this.newTodo = '';
        },
        removeTodo(todo){
            const todoIndex = this.todoArray.todoIndex(todo);
            this.todoArray.splice(todoIndex, 1);
        },
        allDone(){
            this.todoArray.forEach(todo => {
                todo.done = true;
            });
        }
    }
 });