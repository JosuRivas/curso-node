/*
setTimeout(() => {
    console.log('Hola mundo');
}, 1000);*/

//callback es una funcion que se manda como argunmento
const getUsuarioById = (id, callback) =>{
    const usuario ={
        id, //id:id es lo mismo
        nombre: 'Cesar',

    }
    setTimeout(() => {
        callback(usuario);
    }, 1500);
}

getUsuarioById(10, (usuario) =>{
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});