import * as fs from 'fs'

const fileName = './db/database.json'

export const saveDB = (data) => {
  fs.writeFileSync(fileName, JSON.stringify(data))
}

export const readDB = () => {
  if (!fs.existsSync(fileName)) return false

  return JSON.parse(fs.readFileSync(fileName, { encoding: 'utf-8' }))
}