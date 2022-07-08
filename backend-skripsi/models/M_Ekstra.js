import mongoose from "mongoose";

const Schema = mongoose.Schema({
    nama_ekstra:{
        type:String
    }
})

export default mongoose.model('M_Ekstra', Schema);