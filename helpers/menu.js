import inquirer from "inquirer"
import colors from 'colors'

const question = [
    {
        type: 'list',
        name: 'mainOpt',
        message: 'Seleccione una opcion',
        choices: [
            {
                value:1,
                name: '1: Listar Socios'   
            },
            {
                value:2,
                name: '2: Cargar Nuevo Socio'   
            },
            {
                value:3,
                name: '3: Pagar Cuota'   
            },
            {
                value:0,
                name: 'Salir'   
            }
        ]
    }
] 


export const menu = async() => {
    console.clear();
    
    const {mainOpt} = await inquirer.prompt(question)
    return mainOpt;
}

const optMenu = async(type, _name, message, arr, back) => {
    console.clear();
    const choices = arr.concat(
        [
            new inquirer.Separator(),
            {
                value: false,
                name: back.yellow        
            }
        ]
    );
    const answ = {
        type,
        name: _name,
        message,
        choices
    }
    const {name} = await inquirer.prompt(answ)
    return name;
}

export const showMembers = async(membersList = []) => {
    console.clear();
    //console.log(membersList);
    
    if (membersList.length === 0) {
        console.log('Todavia no hay ningun socio cargado'.yellow);
        return 0;
    }

    let memberArr = []

    membersList.forEach(member => {
        const status = (debt) => {
            if (debt > 0){
                return 'Debe: ' + `${member.debt}`.red
            } else if (debt < 0){
                return 'Tiene a favor: ' + `${member.debt}`.green
            } else {
                return 'Esta al dia'.green
            }
        } 

        const choice = {
            value: member.memberNumber,
            name: `[ ${member.memberNumber} ] ::${member.name} ${member.surename} :: ${status()} `
        }
        memberArr.push(choice) 
    })

    const members = await optMenu('list', 'members', 'Lista de Socios',memberArr, 'Volver')

    return members;
}

// mas adelante agregar pedrido como parametro
export const showPayments =  async(paymentList = []) => {
    console.clear();

    if (paymentList.length === 0) {
        console.log('Todavia no hay ningun pago ingresado'.yellow);
        return 0;
    }

    let paymentArr = []

    paymentList.forEach(payment => {
        const value = payment.id;
        const status = (payment.quantity < 0)
                        ? `${payment.quantity}`.red
                        : `${payment.quantity}`.green
        const choice = {
            value,
            name: `${payment.date} :: ${payment.creditor} - ${payment.quantity}`
        }
        paymentArr.push(choice)
    })

    const payments = await optMenu('list','payments', 'Pagos', paymentArr, 'Volver' )
    return payments;
}

// falta validar los tipos
export const userInput = async(message) =>{
    const answ = {
        type: 'input',
        name: 'user_input',
        message,
        validate ( value ) {
            if(value.length === 0) return 'Input necesario';

            return true
        }
    }
    const {user_input} = await inquirer.prompt(answ);
    return user_input;
}

export const pause = async() => {
    
    const {pause} = await inquirer.prompt([
        {
            type: 'input',
            name: 'pause',
            message: 'Precione ' + 'ENTER'.green + ' para continuar'
        }
    ]);

    return pause;
}