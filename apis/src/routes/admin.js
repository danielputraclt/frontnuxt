import {Router} from 'express'
import * as AdminController from '../controllers/admin.js'
const Admin = Router()

Admin.get('/', AdminController.fetchSiswa)

module.exports = Admin