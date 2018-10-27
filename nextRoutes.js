const nextRoutes = require('next-routes');
const routes = (module.exports = nextRoutes());

routes.add('aaa', '/a/:foo(bar|baz)');
routes.add('bbb', '/b/:slug');
