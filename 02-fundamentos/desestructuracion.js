const skull ={
    nombre: 'Riuji',
    apellido: 'Sakamoto',
    persona: 'Captain Kidd',
    edad:16,
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.persona}`;
    }
}

function imprime({nombre, apellido, persona, edad =0}){
    console.log(nombre, apellido, persona, edad);
}
//const nombre = skull.nombre;
//const apellido = skull.apellido;
//const persona = skull.persona;
//const {nombre,apellido,persona,edad = 0} = skull; //valor por defecto en desestructuracion

//console.log(nombre, apellido, persona, edad);
//imprime(skull);

const nombres = ['Skull','Queen','Oracle'];

const [,,n3] = nombres;
console.log(n3);