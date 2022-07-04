import mongoose from 'mongoose'

export default Siswa = mongoose.model('siswa', new mongoose.Schema({
    nama: String,
    nis: String
}))