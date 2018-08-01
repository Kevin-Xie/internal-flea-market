import { GoodsHandler } from '../handlers/goods'
import { batchUploadGoodsPic } from '../lib/multer'
import express from 'express';
let router = express.Router();

const MAX_UPLOAD_COUNT = 5


router.get('/', GoodsHandler.getAllGoods);

router.post('/', batchUploadGoodsPic(MAX_UPLOAD_COUNT), GoodsHandler.publishGoods);

router.get('/:id', GoodsHandler.getGoodsById);


export default router;