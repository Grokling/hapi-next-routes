const nextRoutes = require('./nextRoutes');

module.exports = function(server, app) {
	const handler = nextRoutes.getRequestHandler(app);

	server.route({
		method: 'GET',
		path: '/static/{p*}' /* serve static assets. */,
		handler: {
			directory: {
				path: './static',
				redirectToSlash: true,
				index: true
			}
		}
	});

	server.route({
		method: 'GET',
		path: '/{p*}' /* catch all route - send anything not yet matched to the next handler. */,
		handler: async ({ raw, url }, h) => {
			await handler(raw.req, raw.res, url);
			return h.close;
		}
	});

	// server.route({
	// 	method: 'GET',
	// 	path: '/_next/{p*}' /* next specific routes */,
	// 	handler: nextHandlerWrapper(app)
	// });
};
