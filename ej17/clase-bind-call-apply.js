//Nombre y direccion de los parametros que puse en la funcion de abajo
const owner = 'Lucas'
const adress = 'calle 123'

function dogGreeting(owner, adress){
    console.log(`hi, i'm ${this.name} and i live with my friend ${owner}, my adress is ${adress} `)
}

const newHouse = { //Objeto con el cual en this.name pone "lucas"
    name: 'Bruno'

}

dogGreeting.call(newHouse, owner, adress) //llamo a traves de call la funcion con los metodos y el objeto

//Tambien se puede hacer de esta forma:
const necesaryValues = [owner, adress] //Se crea un array con los dos metodos 
dogGreeting.apply(newHouse, necesaryValues)// se llama a necesaryValues y se le pasa los valores de myFriend

const bindingWithBind= dogGreeting.bind(newHouse,owner,adress)
bindingWithBind()











//Quiz
//Objeto
const caricatura ={
    nombre:'cosmo y wanda'
}
//Funcion
function recuerdo (personaje){
    console.log(`${this.nombre} era mi dibujito favorito.
    me encantaba verlo ${personaje}`)
}
//"cosmo y wanda" se remplaza por ${personaje} en el console log porque recuerdo lo recibe como parametro
recuerdo.call(caricatura, 'cosmo')
recuerdo.call(caricatura, 'wanda')