require('colors');

const { showMenu, pauseMenu } = require('./helpers/messages.js')

const main = async () => {
  let opt = '';

  do {
    opt = await showMenu()
    if (opt !== '0') await pauseMenu() 
  } while (opt !== '0');
}

main();