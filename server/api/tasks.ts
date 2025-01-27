import fs from 'fs'
import path from 'path'

const filePath = path.resolve('data/tasks.json')

// Чтение данных из JSON-файла
function readData() {
  const rawData = fs.readFileSync(filePath)  
  return JSON.parse(rawData)
}

// Запись данных в JSON-файл
function writeData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
}

export default defineEventHandler(async (event) => {
  // Получаем данные из файла
  let tasks = readData()  
  // Обрабатываем разные HTTP-методы
  if (event.req.method === 'GET') {
    return tasks   
  }


  if (event.req.method === 'POST') {
    const newTask = await readBody(event)
    newTask.id = tasks.length + 2  // Генерация нового id
    tasks.push(newTask)
    writeData(tasks)  // Сохраняем обновленный список в файл
    return newTask
  }

  if (event.req.method === 'PUT') {
    const updatedTask = await readBody(event)
    tasks = tasks.map(task =>
      task.id === updatedTask.id ? { ...task, ...updatedTask } : task
    )
    writeData(tasks)  // Сохраняем изменения в файл
    return updatedTask
  }

  if (event.req.method === 'DELETE') {
    const { id } = await readBody(event)
    tasks = tasks.filter(task => task.id !== id)
    writeData(tasks)  // Обновляем файл после удаления
    return { id }
  }

  return { message: 'Unsupported method' }
})
