// Creación de la clase pokemon haciendo uso de export default para exportarla
// mediante EcmaScript Modules
export default class pokemon{
    //Creación del constructor
    constructor(name){
        this.name = name
    }
    //Creación de la función sayHello
    sayHello(){
        console.log(`Mi pokemon ${this.name} te saluda!!!`)
    }
}