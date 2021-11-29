const { v4:uuidv4} = require('uuid');
class Tarea {

    id = '';
    desc = '';
    completadoEn = null;

    constructor( desc ){//se ejecuta al crear una nueva instancia de la clase
        this.id = uuidv4();
        this.desc = desc;
        this.completadoEn = null;
    }
}


module.exports = {Tarea}
