import { GoodsHandler } from '../handlers/goods'
import express from 'express';
let router = express.Router();


router.get('/', GoodsHandler.getAllGoods);

router.get('/:id', GoodsHandler.getGoodsById)

export default router;