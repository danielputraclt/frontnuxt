import Siswa from '../../models/admin'

export const byId = async (id, siswa) => Siswa.findByIdAndUpdate(id, siswa)

