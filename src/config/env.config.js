module.exports = {
	port: Number(process.env.SERVER_PORT) || 5000,
	appEndpoint: 'http://localhost:5000',
	apiEndpoint: 'http://localhost:5000',
	webOrigin: 'http://localhost:4200',
	jwt_secret: 'myS33!!creeeT',
	jwt_expiration_in_seconds: 36000,
	environment: 'dev',
	permissionLevels: {
		NORMAL_USER: 1,
		PAID_USER: 4,
		ADMIN: 2048
	},
	rabbit: {
		host: process.env.RABBITMQ_HOST || 'localhost',
		port: process.env.RABBITMQ_PORT || 5672
	},
	endpoints: {
		auth: '/auth',
		images: '/images',
		users: '/users',
		activation: '/activation',
		recovery: '/recovery',
		bookings: '/bookings'
	},
	proxies: {
		users: {
			domain: 'localhost',
			port: 3600
		},
		images: {
			domain: 'localhost',
			port: 5003
		},
		auth: {
			domain: 'localhost',
			port: 3600
		},
		activation: {
			domain: 'localhost',
			port: 3600
		},
		recovery: {
			domain: 'localhost',
			port: 3600
		},
		bookings: {
			domain: 'localhost',
			port: 3600
		}
	}
};
