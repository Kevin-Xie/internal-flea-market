module.exports = {
	db: {
		uri: 'mongodb://' + (process.env.DB_PORT_27017_TCP_ADDR || 'localhost:27017') + '/flea_market_prod'
	},
	cookieSecret: process.env.COOKIE_SECRET || 'production',
}
