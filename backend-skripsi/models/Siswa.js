import mongoose from "mongoose";

const Schema = mongoose.Schema({
    nama:{
        type:String
    },
    nis:{
        type:String
    }
})

export default mongoose.model('Siswa', Schema);