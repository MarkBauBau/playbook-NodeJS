// Creación de la clase pokemon
class pokemon{
    //Creación de un constructor
    constructor(name){
        this.name = name
    }
    //Creación de la función sayHello
    sayHello(){
        console.log(`Mi pokemon ${this.name} te saluda!!!`)
    }
    //Creación de la función sayMessage
    sayMessage(message){
        console.log(`Mi pokemon ${this.name} dice: ${message}`)
    }
}

module.exports = pokemon