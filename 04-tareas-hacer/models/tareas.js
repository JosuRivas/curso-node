const { Tarea } = require("./tarea");


class Tareas{

    _listado = {};

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach( key=>{
            const tarea = this._listado[key]
            listado.push(tarea);
        })

        return listado;
    }

    constructor(){
        this._listado = {};

    }

    borrarTarea(id = ''){
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }

    cargarTareasFromArray(tareas = []){
        tareas.forEach(tarea => {
            this._listado[tarea.id]  = tarea;
        })
    }

    crearTarea (desc = ''){
        const tarea  = new Tarea(desc);
        this._listado[tarea.id] = tarea;

    }

    listadoCompleto(){
         this.listadoArr.forEach((tarea, i)=>{
             const index = `${i+1}`.green;
             const {desc , completadoEn} = tarea;
             let estado = completadoEn == null ? 'Pendiente'.red: 'Completada'.green;
             console.log(`${index} ${desc} :: ${estado}`);
         })
        //1. desc :: completada | pendiente
    }

    listarPendientesCompletadas(completadas = true){
        let contador = 0; 
        this.listadoArr.forEach(tarea =>{
            
            const {desc, completadoEn} = tarea;
            let estado = completadoEn == null ? 'Pendiente'.red: 'Completada'.green;

            if (completadas) {
                if (completadoEn) {
                    contador+=1;
                    console.log(`${contador.toString().green}. ${desc} :: ${completadoEn.green}`); 
                }
            }else{
                if (!completadoEn) {
                    contador+=1;
                    console.log(`${contador.toString().green}. ${desc} :: ${estado}`);   
                }
            }
        });
    }

    toggleCompletadas(ids = []){
        ids.forEach(id =>{
            const tarea = this._listado[id];
            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this.listadoArr.forEach(tarea=>{

            if (!ids.includes(tarea.id)) {
                this._listado[tarea.id].completadoEn = null;
            }

        })
    }
}


module.exports = Tareas;