import { Task } from './task.js';

export class Tasks {
  list = {};

  get allList() {
    return Object.values(this.list)
  }

  constructor() {
    this.list = {}
  }

  push(task) {
    this.list = task
  }

  create(desc) {
    const task = new Task(desc)
    this.list[task.id] = task
  }

  consult() {
    console.clear()
    console.log('Todas las tareas\n')

    for (let i in this.allList) {
      const { desc, completed } = this.allList[i]
      const statusCompleted = completed ? 'Completada'.green : 'Pendiente'.red

      console.log(`${(parseInt(i) + 1)}.`.green, desc, '::', statusCompleted)
    }
    console.log()
  }

  consultConditional(completedTask = true) {
    console.clear()
    console.log('Tareas', completedTask ? 'completadas' : 'pendientes', '\n')

    let index = 1
    for (let i in this.allList) {
      const { desc, completed } = this.allList[i]
      const statusCompleted = completed ? 'Completada'.green : 'Pendiente'.red
      const dataComplete = completed ? `:: ${completed}` : '';

      if (!completedTask == !completed) {
        console.log(`${index++}.`.green, desc, '::', statusCompleted, dataComplete)
      }
    }
    console.log()
  }

  deleteTask(id) {
    delete this.list[id]
  }
}