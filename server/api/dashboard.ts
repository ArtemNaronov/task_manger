import fs from 'fs'
import path from 'path'

const filePath = path.resolve('data/tasks.json')
type dashboardTasks = {
    completed: Number,
    notcompleted: Number
}
// Чтение данных из JSON-файла
function readData() {
  const rawData = fs.readFileSync(filePath)  
  return JSON.parse(rawData)
}

function getDashboardTasks() {
    let tasks = readData()

    let dashboardTasks = {
        completed: 0,
        notcompleted: 0
    }

    tasks.forEach((el: dashboardTasks) => el.completed ? dashboardTasks.completed = ++dashboardTasks.completed : dashboardTasks.notcompleted = ++dashboardTasks.notcompleted);

    return dashboardTasks

}

export default defineEventHandler(async (event) => {
  // Получаем данные из файла
  if(event.req.method === 'GET') {    
    return {
        dashboardTasks: getDashboardTasks(),
    }
  }
  
  
  return { message: 'Unsupported method' }
})
