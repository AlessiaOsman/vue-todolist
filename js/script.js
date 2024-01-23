console.log('vue ok', Vue)

const {createApp} = Vue

const app = createApp({
    data(){
        return {
            tasks,

        }
    },
    methods: {
        deleteTask(id){
            const newTasks = this.tasks.filter( task => id !== task.id)
            this.tasks = newTasks
        }
    }
})

app.mount('#root')