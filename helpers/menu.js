import inquirer from "inquirer"

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

export const showOpt = async(opt = []) => {
    
    if (opt.length < 1) return true;
    let choices = [
        {
            
        }
    ]


}
