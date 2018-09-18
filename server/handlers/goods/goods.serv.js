import GoodsModel from './goods.model';

class GoodsService {
    constructor() {

    }

    async findGoods(limit = 50) {
        try {
            return await GoodsModel.find({}).sort('-createAt').limit(limit);
        } catch (error) {
           throw new Error(error) 
        }
    }

    async findGoodsByPage(pageSize, pageNum, limit) {
        try {
            let skipNum = pageSize * (pageNum - 1) || 0;
            return await GoodsModel.find({}).sort('-createAt').skip(skipNum).limit(limit);
        } catch (error) {
           throw new Error(error)             
        }
    }

    async findById(id) {
        try {
            return await GoodsModel.findById(id);
        } catch (error) {
            throw new Error(error);
        }
    }

    async createNewGoods(newGoods) {
        try {
            return await new GoodsModel(newGoods).save();
        } catch (error) {
            throw new (error);
        }
    }
}

export default new GoodsService();