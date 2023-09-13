import { inquirerMenu, pauseMenu, dataInput } from './helpers/inquirer.js'
import { Tasks } from './models/tasks.js';

const main = async () => {
  let opt = ''

  const tasks = new Tasks()

  do {
    opt = await inquirerMenu()
    
    switch (opt) {
      case 1:
        const desc = await dataInput('Tarea:')
        tasks.create(desc)
      break;

      case 2:
        console.log(tasks.allList)
      break;
    }

    if (opt !== 0) await pauseMenu()
  } while (opt !== 0);
}

main();