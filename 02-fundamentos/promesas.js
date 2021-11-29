const empleados = [
    {
        id:1,
        nombre:'cesar'
    },
    {
        id:2,
        nombre:'rodrigo'
    },
    {
        id:3,
        nombre:'josue'
    },
];

const salarios = [
    {
        id:1,
        salario:1000
    },
    {
        id:2,
        salario:2000
    }
];

const getEmpleado = (id) => {
    
    return new Promise((resolve,reject)=>{ //reject se ejecuta cuando sucede un error, resolve es un callback que se ejecuta cuando todo funciona correctamente
        const empleado = empleados.find((e)=>e.id ===id)?.nombre;
        
        (empleado)
            ? resolve(empleado)
            : reject(`No empleado con id: ${id}`);
    });

}

const getSalario = (id) => {

    return new Promise((resolve,reject)=>{
        const salario = salarios.find((s)=>s.id == id)?.salario;

        (salario)
            ? resolve(salario)
            : reject(`No hay salario para el id: ${id}`);
    });
}

const id=3;
/*
getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err)); // si se resuelve la promesa, se ejecuta then(), de lo contrario, el error se captura en catch()

getSalario(id)
    .then(salario => console.log(salario))
    .catch(err => console.log(err));
    */

//promesas en cadena

let nombre;

getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id);
    })
    .then(salario => console.log(`El empleado ${nombre} tiene un salario de: ${salario}`))
    .catch(err => console.log(err));
