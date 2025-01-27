export default defineEventHandler(async (event) => {
  let sidebar = [
    {
      id: 1,
      name: 'Главная',
      link: '/'
    },
    {
      id: 2,
      name: 'Задачи',
      link: '/tasks'
    },
  ];

  if (event.req.method === 'GET') {
    return sidebar   
  }

  return { message: 'Unsupported method' }
})
