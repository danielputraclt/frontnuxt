import * as getSiswaServices from '../services/admin/get'
import * as putSiswaServices from '../services/admin/put'
import * as postSiswaServices from '../services/admin/post'
import * as deleteSiswaServices from '../services/admin/delete'

export const fetchSiswa = async(req, res) => {
    try {
        res.status(200).json((await getSiswaServices.byId(req.params.id)))
    } catch (e) {
     res.status(500).json(e)   
    }
}

export const createSiswa = async(req, res) => {
    try {
        const {
            nama,
            nis,
        } = req.body
        res.status(201).json((await postSiswaServices.create({
            nama,
            nis
        })))
    } catch (e) {
     res.status(500).json(e)   
    }
}

export const updateSiswa = async(req, res) => {
    try {
        const {
            nama,
            nis,
        } = req.body
        res.status(201).json((await postSiswaServices.create({
            nama,
            nis
        })))
    } catch (e) {
     res.status(500).json(e)   
    }
}
