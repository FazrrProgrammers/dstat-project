let requestCount = 0;

setInterval(() => {
    if (requestCount > 0) {
        requestCount = Math.floor(requestCount * 0.8); // Kurangi 20% setiap menit
    }
}, 60000); // 60 detik

export default function handler(req, res) {
    requestCount++;
    res.status(200).json({ requestCount });
}
