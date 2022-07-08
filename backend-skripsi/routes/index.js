import express from 'express';
import siswas from './siswas.js';
import ekstra from './r_ekstra.js';


var router = express.Router();

/* GET home page. */
router.use('/siswa', siswas);
router.use('/ekstra', ekstra);

export default router;
