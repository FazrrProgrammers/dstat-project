export default function handler(req, res) {
    if (!globalThis.requestCount) {
        globalThis.requestCount = 0; // Inisialisasi jika belum ada
    }
    globalThis.requestCount++; // Tambah jumlah request
    res.status(200).json({ requestCount: globalThis.requestCount });
}
