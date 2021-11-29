const inscreva = new Vue({
    el: "#inscreva",
    data: {
        dadosInscricao: {
            nomeCompleta: "",
            dataNascimento: "",
            email: "",
            formacao: "",
            areaAtuacao: "",
            link: ""
        },
    },
    methods: {
        jsonConfig(){
            const dados = {
                nomeCompleta: this.dadosInscricao['nomeCompleta'],
                dataNascimento: this.dadosInscricao['dataNascimento'],
                email: this.dadosInscricao['email'],
                formacao: this.dadosInscricao['formacao'],
                areaAtuacao: this.dadosInscricao['areaAtuacao'],
                link: this.dadosInscricao['link'],
            }
            return JSON.stringify(this.dadosInscricao);
        },
        enviar(){
            this.jsonConfig();
            console.log(this.dadosInscricao);
             alert('Obrigada por sua inscrição!');
        },
    }
});