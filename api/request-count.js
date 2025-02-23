let requestCount = 0;

setInterval(() => {
    console.log("⏳ Reset request count at:", new Date().toISOString());
    requestCount = 0; // Reset otomatis setiap 1 menit
}, 60000); // 60 detik

export default function handler(req, res) {
    requestCount++;
    console.log("🚀 Request received at:", new Date().toISOString(), "| Count:", requestCount);
    
    res.status(200).json({ requestCount });
}
