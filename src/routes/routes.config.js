const proxy = require('express-http-proxy');
const logger = require('../lib/logger');
const createError = require('../lib/errors');

exports.routesConfig = (app, { endpoints, proxies }) => {
	const proxyAddress = ({ domain, port }) => domain + ':' + port;
	const errorHandler = () => createError('Service unavailable', 502);
	app.use(
		endpoints.bookings,
		proxy(proxyAddress(proxies.bookings), {
			proxyReqPathResolver: (req) => req.originalUrl,
			proxyErrorHandler: (err, res, next) => next(errorHandler())
		})
	);
	app.use(
		endpoints.recovery,
		proxy(proxyAddress(proxies.recovery), {
			proxyReqPathResolver: (req) => req.originalUrl,
			proxyErrorHandler: (err, res, next) => next(errorHandler())
		})
	);

	app.use(
		endpoints.activation,
		proxy(proxyAddress(proxies.activation), {
			proxyReqPathResolver: (req) => req.originalUrl,
			proxyErrorHandler: (err, res, next) => next(errorHandler())
		})
	);

	app.use(
		endpoints.images,
		proxy(proxyAddress(proxies.images), {
			proxyReqPathResolver: (req) => req.originalUrl,
			proxyErrorHandler: (err, res, next) => next(errorHandler())
		})
	);

	app.use(
		endpoints.auth,
		proxy(proxyAddress(proxies.auth), {
			proxyReqPathResolver: (req) => req.originalUrl,
			proxyErrorHandler: (err, res, next) => next(errorHandler())
		})
	);

	app.use(
		endpoints.users,
		proxy(proxyAddress(proxies.users), {
			proxyReqPathResolver: (req) => req.originalUrl,
			proxyErrorHandler: (err, res, next) => next(errorHandler())
		})
	);
};
