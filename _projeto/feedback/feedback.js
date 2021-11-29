const feedback = new Vue({
    el: "#feedback",
    data: {
        dadosFeed: {
            nome: "",
            sobrenome: "",
            email: "",
            departamento: "",
            feedback: ""
        },
        mensagem: "Obrigada por seu feedback!"
    },
    methods: {
        jsonConfig(){
            const dados = {
                nome: this.dadosFeed['nome'],
                sobrenonome: this.dadosFeed['sobrenome'],
                email: this.dadosFeed['email'],
                departamento: this.dadosFeed['departamento'],
                feedback: this.dadosFeed['feedback'],
            }
            return JSON.stringify(this.dadosFeed);
        },
        enviar(){
           this.jsonConfig();
            console.log(this.dadosFeed)

            alert("Obrigada por seu feedback!");
        },
        // alerta(mensagem){
        //     this.mensagem = mensagem;
        //     this.mensagemAtiva = true;
        // }
    }
})