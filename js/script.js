console.log('vue ok', Vue)

const {createApp} = Vue

const app = createApp({
    data(){
        return {
            tasks,
            newTaskText: ''

        }
    },
    methods: {
        deleteTask(id){
            const newTasks = this.tasks.filter( task => id !== task.id)
            this.tasks = newTasks
        },

        addTask(){
            const newTask = {
                id: new Date().toISOString(),
                done: false,
                text: this.newTaskText
            }
            this.tasks.push(newTask)
            this.newTaskText = ''
        },

        deleteAllTask(){
            this.tasks = []
        },

        setADoneValue(value){
            this.tasks.forEach(task => task.done = value)
        }
    }
})

app.mount('#root')