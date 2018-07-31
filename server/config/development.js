module.exports = {
	db: {
		uri: 'mongodb://localhost:27017/flea_market_dev'
	},
	cookieSecret: process.env.COOKIE_SECRET || 'development',
}
