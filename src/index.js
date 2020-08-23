const logger = require('./lib/logger');
const config = require('./config/env.config');
const express = require('express');
const morgan = require('morgan');

const bodyParser = require('body-parser');
const gatewayRouter = require('./routes/routes.config');

const init = async () => {
	logger.info('Server: starting');
	try {
		const app = express();
		app.use(function (req, res, next) {
			res.header('Access-Control-Allow-Origin', '*');
			res.header('Access-Control-Allow-Credentials', 'true');
			res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
			res.header('Access-Control-Expose-Headers', 'Content-Length');
			res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
			if (req.method === 'OPTIONS') {
				return res.send(200);
			} else {
				logger.info("URL:"+req.url);
				return next();
			}
		});
		app.use(morgan('dev'));

		app.use(bodyParser.json());
		app.use(express.urlencoded({ extended: false }));

		gatewayRouter.routesConfig(app, config);

		logger.info('API Getway started');
		app.set('port', config.port);
		app.listen(config.port, function() {
			logger.info('API Getway listening at port ' + config.port);
		});
	} catch (error) {
		logger.error(error);
		process.exit(1);
	}
};

init();
