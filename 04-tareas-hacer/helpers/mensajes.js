require('colors');


const mostrarMenu = () => {

    return new Promise(resolve=>{
    console.clear();
    console.log('=============================='.green);
    console.log('     Seleccione una opcion   '.green);
    console.log('==============================\n'.green);

    console.log(`${ '1.'.green } Crear una tarea`);
    console.log(`${ '2.'.green } Listar tareas`);
    console.log(`${ '3.'.green } Listar tareas completadas`);
    console.log(`${ '4.'.green } Listar tareas pendientes`);
    console.log(`${ '5.'.green } Completar tarea(s)`);
    console.log(`${ '6.'.green } Borrar una tarea`);
    console.log(`${ '0.'.green } Cerrar programa\n`);


    const readline = require('readline').createInterface({
        input: process.stdin, // pausa la aplicacion esperando un input del teclado mas "enter"
        output: process.stdout
    });

    readline.question('Seleccione una opción: ', (opt)=>{// question()se usa con stdout para pedir inputs al usuario
        readline.close();
        resolve(opt);
    });
});

     
}

const pausa = () =>{

    return new Promise(resolve=>{
        const readline = require('readline').createInterface({
            input: process.stdin, // pausa la aplicacion esperando un input del teclado mas "enter"
            output: process.stdout
        });
    
        readline.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt)=>{
            readline.close();
            resolve();
        });
    });
    
}

module.exports = {
    mostrarMenu,
    pausa
}



