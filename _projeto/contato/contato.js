const contato = new Vue({
    el: "#contato",
    data: {
        contatos: "tesste"
    },
    methods: {
        getContatos(){
            fetch("/api/contato.json")
            .then(response => response.json())
            .then(response => {
                this.contatos = response;
            })
        }
    },
    created(){
        this.getContatos();
    }
});