import { GoodsHandler } from '../handlers/goods'
import express from 'express';
let router = express.Router();

const multer = require('multer');
const upload = multer({dest: 'uploads/'});

router.get('/', GoodsHandler.getAllGoods);

router.get('/:id', GoodsHandler.getGoodsById);

router.post('/imgs', upload.array('file', 5), (req, res, next) => {
    console.log(req.files)
    console.log(req.body)
    res.send('done')
});

export default router;