import multer from 'multer';

export const batchUploadGoodsPic = (maxCount) => multer({dest: 'uploads/goods/'}).array('file', maxCount);


