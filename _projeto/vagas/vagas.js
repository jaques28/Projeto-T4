
const vagas = new Vue({
    el: "#vagas",
    data: {
        vagas: []
    },
    methods: {
        getVagas() {
            fetch("/api/vagas.json")
                .then(r => r.json())
                .then(r => {
                this.vagas = r;
                })
        },
    },
    created(){
        this.getVagas();
    }
});