import {menu} from './helpers/menu.js'

const main = async() => {
    let mainOpt;
    let socios = []

    do {
        
        mainOpt = await menu();    
        switch (mainOpt) {
            case 1:
                // Listar todos los socios
                // abrir nuevo menu para manipular los socios
                // pagar cuota | modificar | eliminar

                break;
            case 2:
                //Cargar un nuevo socio
                // pedir datos
                // comprobar datos
                // crear socio
                // mensaje de exito
            
                break;
            case 3:
                /* pagar una cuota de socio.
                 recibir un numero de socio
                 (socio existe) 
                        ? llevar a pagar la cuota 
                        : avisar que ese socio no existe (crear socio | volver atras)
                */

            default:
                // Mensaje de despedida
                console.clear()
                console.log('Buen Viaje')
                setTimeout(() => {
                    console.clear();
                }, 500);
                break;

        }

    } while(mainOpt !== 0)

}

main()