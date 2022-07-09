import * as Hapi from '@hapi/hapi'
import routes from './routes.js'

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
    routes: {
      cors: true
    }
  })

  server.route(routes)

  await server.start()
  console.log(`server berjalan pada ${server.info.uri}`)
}

init()
