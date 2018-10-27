const next = require('next');
const Hapi = require('hapi');
const routes = require('./hapiRoutes');

const port = parseInt(process.env.PORT, 10) || 3030;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const server = new Hapi.Server({
	port
});

app.prepare().then(async () => {
	try {
		await server.register({ plugin: require('h2o2') });
		await server.register({ plugin: require('inert') });
		routes(server, app);
		await server.start();
		console.log(`> Ready on http://localhost:${port}`);
	} catch (error) {
		console.log('Error starting server');
		console.log(error);
	}
});
