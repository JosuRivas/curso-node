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

const getInfoUsuario = async(id) =>{ //async transforma una funcion para que retorne una promesa
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado ${empleado} es de: ${salario}`;  //return llama al resolve de la funcion asincrona
    } catch (err) {
        throw err; //throw llama al rejecto de la promesa
    }
    


}

getInfoUsuario(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));