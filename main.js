var app = new Vue (
    {
        el:'#root',
        data: {
            nuovo_todo: '',
            lista_todo: [
                'telefonare marco',
                'andare dal medico',
                'studiare'
                ]
            },
        methods: {
            aggiungiTodo(){
                this.lista_todo.push(this.nuovo_todo)
            }
        }

    }
)
