import GoodsModel from './goods.model';

class GoodsService {
    constructor() {

    }

    async findAllGoods() {
        try {
            return await GoodsModel.find({});
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
}

export default new GoodsService();