Vue.config.devtools = true;

const app = new Vue ({
    el: "#root",
    data: {
        newToDo: "",
        toDos: [
            {
                titolo: "Fare i compiti",
                fatto: false
            },
            {
                titolo: "Fare la spesa",
                fatto: false
            },
            {
                titolo: "Fare il bucato",
                fatto: false
            },
        ],
    },
    methods: {
        addToDo() {
            if (this.newToDo != ""){
                this.toDos.push({titolo: this.newToDo, fatto: false});
                this.newToDo = "";
            }
        },
        removeToDo(index) {
            this.toDos.splice(index, 1);
        },
        done(index) {
            this.toDos[index].fatto = !this.toDos[index].fatto;
            console.log(this.toDos);
        }
    }
});