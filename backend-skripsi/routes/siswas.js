import express from 'express';
import {index, store, updateSiswa, getSiswaById, deleteSiswa} from '../controllers/SiswaController.js';

var router = express.Router();

router.get('/', index);
router.post('/', store);
router.get('/:id', getSiswaById);
router.put('/:id', updateSiswa);
router.delete('/:id', deleteSiswa);

export default router;
