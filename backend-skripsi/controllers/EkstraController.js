import ekstra from '../models/M_Ekstra.js';


const store = async(req,res) => {
    try {
        if(!req.body.nama_ekstra){
            throw{code: 428, message: "Masukkan Nama Ekstra"}
        }
        const nama_ekstra= req.body.nama_ekstra;
        const newEkstra = new ekstra({
            nama_ekstra:nama_ekstra
        });
        const Ekstra = await newEkstra.save();
    
        if(!Ekstra){ throw { code:500, message:"Store ekstra failed"}}
        return res.status(200).json({
            status:true,
            Ekstra
        });

    } catch (err) {
        return res.status(err.code).json({
            status: false,
            message: err.message
        })
        
    }
    
   

}

export { store};