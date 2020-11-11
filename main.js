var app = new Vue (
    {
        el:'#root',
        data: {
            posizione_todo: 0,
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
            },
            togliTodo(){
                    this.lista_todo.splice(3, 1)
            }
        }
    }
)
