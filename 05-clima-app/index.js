require('dotenv').config()

const {leerInput, inquirerMenu, pausa, listarLugares} = require('./helpers/inquirer');
const Busquedas = require('./models/busqueda');

//console.log(process.env);

const main = async() => {
    

    const busquedas = new Busquedas();
    let opt= '';

    do {
        
        opt = await inquirerMenu();

        //const leer = await leerInput();

        switch (opt) {
            case 1:
                const termino = await leerInput('Ciudad: ');
                const lugares = await busquedas.ciudad(termino);
                const id = await listarLugares(lugares);
               
                if(id=== '0') continue;

                //Guardar en DB.

               

                const lugarSel = lugares.find(l => l.id === id);

                busquedas.agregarHistorial(lugarSel.nombre);

                busquedas.leerDB();

                //console.log(lugarSel);

                console.clear();
                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad:', lugarSel.nombre.green);
                console.log('Latitud:', lugarSel.lat);
                console.log('Longitud:', lugarSel.lng);

            break;

            case 2:
                busquedas.historialCapitalizado.forEach((lugar,i)=>{
                    const idx = `${i + 1}.`.green;
                    console.log(`${idx} ${lugar}`);
                });
            break;            
        }

        if(opt!== 0) await pausa();

    } while (opt!== 0);

}

main();