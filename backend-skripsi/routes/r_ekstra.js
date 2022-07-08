import express from 'express';
import { store} from '../controllers/EkstraController.js';

var router = express.Router();

router.post('/', store);

export default router;
