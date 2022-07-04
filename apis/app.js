import express from 'express'
import cors from 'cors'
import './src/config'
import Admin from './src/routes/admin'

require('dotenv').config({path: `./${process.env.NODE_ENV}.env`})
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use('/siswa', Admin)

app.listen(process.env.PORT)