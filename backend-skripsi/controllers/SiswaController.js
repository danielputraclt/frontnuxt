import siswa from '../models/Siswa.js';

const store = async(req,res) => {
    try {
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

export {store}