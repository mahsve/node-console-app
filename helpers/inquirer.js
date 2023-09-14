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
      { name: `${'5.'.green} Completar tareas`, value: 5 },
      { name: `${'6.'.green} Borrar tarea`, value: 6 },
      { name: `${'0.'.green} Salir`, value: 0 },
    ]
  }
]

export const mainMenu = async () => {
  console.clear()
  console.log('==========================='.green)
  console.log('   Seleccione una opción'.white)
  console.log('===========================\n'.green)

  const { option } = await inquirer.prompt(optionsMenu)
  return option
}

export const entryTask = async (message) => {
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

export const deleteTask = async (tasks = []) => {
  const choicesTask = tasks.map((task, i) => {
    return { value: task.id, name: `${`${(i + 1)}.`.green} ${task.desc}` }
  })

  choicesTask.push({ value: 0, name: '0.'.green + ' Salir' })

  const deletePrompt = {
    type: 'list',
    name: 'option',
    message: '¿Que tarea desea eliminar?',
    choices: choicesTask
  }

  console.clear()

  const { option } = await inquirer.prompt(deletePrompt)
  return option
}

export const toogleTask = async (tasks = []) => {
  const choicesTask = tasks.map((task, i) => {
    return { value: task.id, name: ` ${`${(i + 1)}.`.green} ${task.desc}`, checked: task.completed !== false }
  })

  const checkboxPrompt = {
    type: 'checkbox',
    name: 'ids',
    message: 'Marcar/Desmarcar tareas',
    choices: choicesTask
  }

  console.clear()

  const { ids } = await inquirer.prompt(checkboxPrompt)
  return ids
}

export const confirmMenu = async (message) => {
  const deletePrompt = {
    type: 'confirm',
    name: 'confirmation',
    message: message
  }

  const { confirmation } = await inquirer.prompt(deletePrompt)
  return confirmation
}

export const pauseMenu = async () => {
  await inquirer.prompt({ name: 'pause', type: 'input', message: `Presione ${'ENTER'.green} para continuar` })
}