import express from 'express';
import {index, store} from '../controllers/SiswaController.js';

var router = express.Router();

router.get('/', index);
router.post('/', store);

export default router;
