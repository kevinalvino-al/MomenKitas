// Function Order Paket Landing Page
function pesanSekarang(paket, harga) {
    let noAdmin = "087732591741"; // Ganti dengan nomor WA Admin MomenKita
    let pesan = `Halo Admin MomenKita, saya berminat memesan *Undangan Digital Paket ${paket}* (Rp ${harga}). Mohon informasi langkah selanjutnya.`;
    
    let urlWA = `https://wa.me/${noAdmin}?text=${encodeURIComponent(pesan)}`;
    window.open(urlWA, '_blank');
}

// Logic Countdown Timer di Demo Undangan
function startCountdown() {
    const targetDate = new Date("Dec 12, 2026 09:00:00").getTime();

    const timer = setInterval(() => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference < 0) {
            clearInterval(timer);
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        if(document.getElementById("days")) {
            document.getElementById("days").innerText = days;
            document.getElementById("hours").innerText = hours;
            document.getElementById("minutes").innerText = minutes;
            document.getElementById("seconds").innerText = seconds;
        }
    }, 1000);
}

startCountdown();