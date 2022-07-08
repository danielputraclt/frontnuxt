import siswa from '../models/Siswa.js';

const index = async(req,res) => {
    try {
        const siswas = await siswa.find();

        if(!siswas){throw {code:500, message: "Get siswa gagal!"}}

        return res.status(200).json({
            siswas,
            status: true,
            total: siswas.length
        });
    } catch (err) {
        return res.status(err.code).json({
            
            status: false,
            message: err.message
            
        })
    }
}
const store = async(req,res) => {
    try {
        if(!req.body.nama){
            throw{code: 428, message: "Masukkan Nama"}
        }
        const nama= req.body.nama;
        const nis= req.body.nis;
        const newSiswa = new siswa({
            nama:nama,
            nis:nis
        });
        const Siswa = await newSiswa.save();
    
        if(!Siswa){ throw { code:500, message:"Store siswa failed"}}
        return res.status(200).json({
            Siswa
        });

    } catch (err) {
        return res.status(err.code).json({
            message: err.message
        })
        
    }
    
   

}

export {index, store};