import GoodService from './goods.serv';

class GoodsHandler {
    constructor() {

    }

    async getAllGoods(req, res, next) {
        let goodList = await GoodService.findAllGoods();
        res.json(goodList);
    }

    async getGoodsById(req, res, next) {
        let goods = await GoodService.findById(req.params.id);
        res.json(goods);
    }

    async publishGoods(req, res, next) {
        console.log(req.files)
        console.log(req.body)
        res.send('done')
    }
}

export default new GoodsHandler();