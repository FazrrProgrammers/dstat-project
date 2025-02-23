let requestCount = 0;
export default function handler(req, res) { requestCount++; // Tambah hitungan setiap request res.status(200).json({ requestCount }); }
