const user = {
    name: "Isaque",
    message: function (){
        //console.log(`Eu te amo ${user.name}`)
        console.log(`Eu te amo ${this.name}`)
    }
}
user.message()