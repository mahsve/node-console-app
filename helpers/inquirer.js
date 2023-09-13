import inquirer from 'inquirer'
import colors from 'colors'

const optionsMenu = [
  {
    type: 'list',
    name: 'option',
    message: '¿Que tarea desea realizar?',
    choices: [
      { name: `${'1.'.green} Crear tarea`, value: 1 },
      { name: `${'2.'.green} Listar tareas`, value: 2 },
      { name: `${'3.'.green} Listar tareas completadas`, value: 3 },
      { name: `${'4.'.green} Listar tareas pendientes`, value: 4 },
      { name: `${'5.'.green} completar tarea`, value: 5 },
      { name: `${'6.'.green} Borrar tarea`, value: 6 },
      { name: `${'0.'.green} Salir`, value: 0 },
    ]
  }
]

export const inquirerMenu = async () => {
  console.clear()
  console.log('==========================='.green)
  console.log('   Seleccione una opción'.white)
  console.log('===========================\n'.green)

  const { option } = await inquirer.prompt(optionsMenu)
  return option
}

export const dataInput = async (message) => {
  const inputPrompt = [
    {
      type: 'input',
      name: 'question',
      message: message,
      validate(value) {
        if (value.length === 0) return 'Por favor ingrese un valor'
        return true
      }
    }
  ]

  const { question } = await inquirer.prompt(inputPrompt)
  return question
}

export const pauseMenu = async () => {
  await inquirer.prompt({ name: 'pause', type: 'input', message: `Presione ${'ENTER'.green} para continuar` })
}