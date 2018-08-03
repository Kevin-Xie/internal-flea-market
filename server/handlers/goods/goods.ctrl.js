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
        let goods = {
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
            pictures: req.files,
            status: 'on sale',
            owner: {
                user_id: req.user._id,
                userName: req.user.userName,
                email: req.user.email
            }
        };
        try {
            let result = await GoodService.createNewGoods(goods);
            res.json(result);
        } catch (error) {
            res.send('Failed to create a new goods ', error);
        }
        
    }
}

export default new GoodsHandler();