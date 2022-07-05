import * as getSiswaServices from '../services/admin/get'
import * as putSiswaServices from '../services/admin/put'
import * as postSiswaServices from '../services/admin/post'
import * as deleteSiswaServices from '../services/admin/delete'

export const getSiswa = async(req, res) => {
    try {
        res.status(200).json((await getSiswaServices.all()))
    } catch (e) {
     res.status(500).json(e)   
    }
}

export const getSiswaById = async(req, res) => {
    try {
        res.json((await getSiswaServices.byId(req.params.id)))
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
        res.status(200).json((await putSiswaServices.byId(req.params.id, {
            nama,
            nis
        })))
    } catch (e) {
     res.status(500).json(e)   
    }
}

export const deleteSiswa = async(req, res) => {
    try {
        res.status(200).json((await deleteSiswaServices.byId(req.params.id)))
    } catch (e) {
     res.status(500).json(e)   
    }
}

export default {
    getSiswa,
    getSiswaById,
    updateSiswa,
    deleteSiswa,
    createSiswa
}