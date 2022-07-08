import mongoose from "mongoose";

const Schema = mongoose.Schema({
    nama_kriteria:{
        type:String
    },
    bobot:{
        type:Number
    }
    
})

export default mongoose.model('M_Kriteria', Schema);