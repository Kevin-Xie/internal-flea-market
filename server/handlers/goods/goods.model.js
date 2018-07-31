import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const GoodsSchema = new Schema({
	owner: {
		user_id: String,
		userName: String,
		email: String
	},
	name: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	category: {
		type: String
	},
	price: {
		type: Number,
		default: 0
	},
	pictures: {
		type: Array
	},
	status: {
		type: String
	},
},{
	timestamps: {
		createdAt: 'createAt',
		updatedAt: 'updatedAt'
	}
});

const Goods = mongoose.model('Goods', GoodsSchema);

export default Goods;
