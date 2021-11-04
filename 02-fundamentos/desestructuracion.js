
const deadpool={
    nombre: 'Wade',
    apellido:'Winston',
    poder: 'Regeneracion',
    //edad: 50,
    getNombre: function(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

//const nombre = deadpool.nombre;
//const apellido = deadpool.apellido;
//const poder = deadpool.poder;

function imprimeHeroe({nombre, apellido, poder, edad=0}){
    console.log(nombre,apellido, poder, edad);
}

//const {nombre, apellido, poder, edad=0} = deadpool;
//console.log(nombre,apellido, poder, edad);

imprimeHeroe(deadpool);