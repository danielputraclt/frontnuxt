import Siswa from '../../models/admin'

export const all = async () => Siswa.find({})

export const byId = async (id) => Siswa.findById(id)

