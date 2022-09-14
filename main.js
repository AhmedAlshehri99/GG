// CommonJs
const fastify = require('fastify')({
  logger: true
})


const resturant = ["Mac", "KFC", "BK"]
const cars = ["GMC", "Toyota", "BMW"]
const teams = ["Alhilal", "Alnasr", "Albaten"]

fastify.get('/', async (request, reply) => {
  return { hello: 'search for restaurants or cars or teams after the port number' }
})
fastify.get('/resturant', async (request, reply) => {
  return resturant;
})
fastify.post('/resturant', async (request, reply) => {
  resturant.push(request.body)
  return resturant;
})
fastify.delete('/resturant', async (request, reply) => {
  resturant.pop()
  return resturant;
})

fastify.get('/cars', async (request, reply) => {
  return cars;
})
fastify.post('/cars', async (request, reply) => {
  cars.push(request.body)
  return cars;
})
fastify.delete('/cars', async (request, reply) => {
  cars.pop();
  return cars;
})
fastify.get('/teams', async (request, reply) => {
  return teams;
})
fastify.post('/teams', async (request, reply) => {
  teams.push(request.body)
  return teams;
})
fastify.delete('/teams', async (request, reply) => {
  teams.pop();
  return teams;
})

const host = process.env.NODE_ENV === 'production' ? '0.0.0.0' : '127.1';
const port = process.env.$PORT || process.env.PORT || 3000;
/**
 * Run the server!
 */

const start = async () => {
  try {
    await fastify.listen({
      port: port,
      host: host
    })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()