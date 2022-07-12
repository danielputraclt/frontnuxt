import siswa from "../models/Siswa.js";

const index = async (req, res) => {
  try {
    const siswas = await siswa.find();

    if (!siswas) {
      throw { code: 500, message: "Get siswa gagal!" };
    }

    return res.status(200).json({
      siswas,
      status: true,
      total: siswas.length,
    });
  } catch (err) {
    return res.status(err.code).json({
      status: false,
      message: err.message,
    });
  }
};

const getSiswaById = async (req, res) => {
  try {
    const byId = async (_id) => siswa.find({ _id });
    res.json(await byId(req.params.id));
  } catch (err) {
    res.status(500).json(err);
  }
};

const store = async (req, res) => {
  try {
    if (!req.body.nama) {
      throw { code: 428, message: "Masukkan Nama" };
    }

    //is siswa exist
    const siswaExist = await siswa.findOne({ nis: req.body.nis });
    if (siswaExist) {
      throw { code: 428, message: "Data siswa sudah ada" };
    }

    const nama = req.body.nama;
    const nis = req.body.nis;
    const newSiswa = new siswa({
      nama: nama,
      nis: nis,
    });
    const Siswa = await newSiswa.save();

    if (!Siswa) {
      throw { code: 500, message: "Store siswa failed" };
    }
    return res.status(200).json({
      Siswa,
    });
  } catch (err) {
    return res.status(err.code).json({
      message: err.message,
    });
  }
};

const updateSiswa = async (req, res) => {
  try {
    const byId = async (_id) => siswa.find({ _id });
    const { nama, nis } = req.body;
    console.log({
      id: req.params.id,
    });
    const updateSiswa = await byId(req.params.id, {
      nama,
      nis,
    });
    res.status(200).json(updateSiswa);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteSiswa = async (req, res) => {
  try {
    const byId = async (id) => siswa.findByIdAndDelete(id)

    const siswaDeleted = await byId(req.params.id)
    res.status(200).json({ siswaDeleted });
  } catch (err) {}
};

export { index, store, updateSiswa, getSiswaById, deleteSiswa };