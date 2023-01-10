import fs from 'fs'
import path from 'path'
import Route from '@ioc:Adonis/Core/Route'

Route.get('/v1/api-doc', async ({ response }) => {
  const filepath = path.join(__dirname, '../../resources/views/api-doc.html')
  const html = fs.readFileSync(filepath, 'utf8')

  return response.send(html)
})
