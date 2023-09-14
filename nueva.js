import { mainMenu, pauseMenu, entryTask, deleteTask, toogleTask, confirmMenu } from './helpers/inquirer.js'
import { Tasks } from './models/tasks.js';
import { saveDB, readDB } from './helpers/saveDB.js'

const main = async () => {
  let opt = ''

  const database = readDB();
  const tasks = new Tasks()
  tasks.push(database)

  do {
    opt = await mainMenu()

    switch (opt) {
      case 1:
        const desc = await entryTask('Ingrese la tarea:')
        tasks.create(desc)
        break;

      case 2:
        tasks.consult()
        break;

      case 3:
        tasks.consultConditional(true)
        break;

      case 4:
        tasks.consultConditional(false)
        break;

      case 5:
        const ids = await toogleTask(tasks.allList)
        tasks.toggleTask(ids)
        break;

      case 6:
        const id = await deleteTask(tasks.allList)
        if (id !== 0) {
          const ok = await confirmMenu('¿Segudo desea eliminar esta tarea?')
          if (ok) tasks.deleteTask(id)
        }
        break;
    }
    saveDB(tasks.list)

    if (opt !== 0) await pauseMenu()
  } while (opt !== 0);
}

main();