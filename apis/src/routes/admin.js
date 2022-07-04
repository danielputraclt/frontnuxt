import {Router} from 'express'
import AdminController from '../controllers/admin'
const Admin = Router()

Admin.get('/', AdminController.fetchData)

export default A