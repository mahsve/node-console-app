import { Task } from './task.js';

export class Tasks {
  list = {};

  get allList() {
    return Object.values(this.list)
    
    // const newList = []
    // Object.keys(this.list).forEach(key => newList.push(this.list[key]))
    // for (let i in this.list) newList.push(this.list[i])
    // return newList
  }

  constructor() {
    this.list = {}
  }

  create(desc) {
    const task = new Task(desc)
    this.list[task.id] = task
  }
}