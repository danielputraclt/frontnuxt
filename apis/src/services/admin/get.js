import Siswa from '../../models/admin'
import Admin from '../../routes/admin'

export const all = async () => {
    console.log('daniel',siswa)
    const siswa = await Admin.find({})
    
        return siswa
}
// Siswa.find({})

export const byId = async (id) => Siswa.findById(id)

