const app = new Vue({
    el: '#app',
    data: {
        toDoInput: "",
        list:[],
        listCompleted:[],
        listTrashed:[]
    },

    methods:{
        addToList(){
            this.list.push(this.toDoInput)
            alert(`Hai aggiunto una task "${this.toDoInput}"`)
            this.toDoInput= "";
        },

        moveToCompleted(i){
            this.move(this.list, this.listCompleted, i )
        },

        returnList(i){
            this.move(this.listCompleted, this.list, i )
        },

        moveTrashed(i){
            this.move(this.list, this.listTrashed, i )
        },

        returnListToTrashed(i){
            this.move(this.listTrashed, this.list, i )
        },

        removeAll(){
            const answer = prompt("Are you sure you want to delete all ? y/n")
            if(answer === "y"){
                this.listTrashed = [];
            }
        },

        move(arrayFrom, arrayTo, index){
            console.log(arrayFrom[index]);
            arrayTo.push(arrayFrom[index])
            arrayFrom.splice(index, 1)    
            console.log(arrayTo);
        }
    }
})