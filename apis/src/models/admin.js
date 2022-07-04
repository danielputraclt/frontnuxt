import mongoose from 'mongoose'

export const Siswa = mongoose.model('siswa', new mongoose.Schema({
    nama: String,
    nis: String
}))