import Application from '@ioc:Adonis/Core/Application'
import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  /** /api/v1 */
  Route.get('/', () => ({
    jsonapi: {
      version: '1.0',
    },
    meta: {
      hello: 'world',
    },
  }))

  /** /api/v1/app-version */
  Route.get('/app-version', () => ({
    jsonapi: {
      version: '1.0',
    },
    meta: {
      'app-version': Application.version!.toString(),
    },
  }))
}).prefix('/api/v1')
