import {menu, showMembers, userInput, pause} from './helpers/menu.js'
import { readData, saveData } from './helpers/saveData.js';
import {Members} from './models/Members.js'

const main = async() => {
    let mainOpt;
    const members = new Members()
    const membersDb = readData('./db/members.json')
    
    if (membersDb){
        members.readMembersDB(membersDb)
    }
    
    do {
        
        mainOpt = await menu();    


        switch (mainOpt) {
            case 1:
                // Listar todos los socios
                // [x] abrir nuevo menu para manipular los socios
                // [ ] pagar cuota | modificar | eliminar
                const membersMenu = await showMembers(members.memberArr)
                break;
            case 2:
                //Cargar un nuevo socio
                // [x]pedir datos
                const memberNumber = await userInput('Numero de Socio: ')
                const memberName = await userInput('Nombre: ')
                const memberSurename = await userInput('Apellido: ')

                // [ ]comprobar datos (idea: comprobar los datos en userInput)

                // [x]crear socio
                members.createNewMember(memberNumber,memberName,memberSurename);
                console.log('Socio agregado con exito.');
                break;
            case 3:
                /* pagar una cuota de socio.
                 recibir un numero de socio
                 (socio existe) 
                        ? llevar a pagar la cuota 
                        : avisar que ese socio no existe (crear socio | volver atras)
                */

            // default:
            //     // Mensaje de despedida
            //     console.clear()
            //     console.log('Buen Viaje')
            //     setTimeout(() => {
            //         console.clear();
            //     }, 500);
            //     break;

        }   
        if (mainOpt!== 0) await pause()
        saveData('./db/members.json',members.memberArr);
        
        
    } while(mainOpt !== 0)

}

main()