import {Router} from 'express'
import * as  AdminController from '../controllers/admin'
const Admin = Router()

Admin.get('/', AdminController.getSiswa)
Admin.get('/:id', AdminController.getSiswaById)
Admin.post('/', AdminController.createSiswa)
Admin.put('/:id', AdminController.updateSiswa)
Admin.delete('/', AdminController.deleteSiswa)

export default Admin