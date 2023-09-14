import { inquirerMenu, pauseMenu, dataInput } from './helpers/inquirer.js'
import { Tasks } from './models/tasks.js';
import { saveDB, readDB } from './helpers/saveDB.js'

const main = async () => {
  let opt = ''

  const database = readDB();
  const tasks = new Tasks()
  tasks.push(database)

  do {
    opt = await inquirerMenu()

    switch (opt) {
      case 1:
        const desc = await dataInput('Tarea:')
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
    }
    saveDB(tasks.list)

    if (opt !== 0) await pauseMenu()
  } while (opt !== 0);
}

main();