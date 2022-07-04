import Siswa from '../../models/admin'

export const byId = async (id) => Siswa.findByIdAndDelete(id)

