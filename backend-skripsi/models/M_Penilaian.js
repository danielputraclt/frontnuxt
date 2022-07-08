import mongoose from "mongoose";

const Schema = mongoose.Schema({
    id_siswa:{
        type:mongoose.Schema.Types.ObjectId
    },
    id_ekstra:{
        type:mongoose.Schema.Types.ObjectId
    },
    skor:{
        type:Number
    },
    urutan:{
        type:Number
    }   
})

Schema.virtual('siswas', {
    ref:'Siswa',
    localField: 'id_siswa',
    foreignField: '_id'
})

export default mongoose.model('M_Penilaian', Schema);