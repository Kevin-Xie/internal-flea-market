

import express from 'express';
let router = express.Router();


router.get('/topbanners', (req, res) => {res.json({name: 'ad1', image: 'www'})})

export default router;