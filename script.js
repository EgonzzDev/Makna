// --- AMBIL SEMUA ELEMEN HTML YANG DIBUTUHKAN (Cukup 1x di atas) ---
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const showRegisterBtn = document.getElementById('showRegister');
const showLoginBtn = document.getElementById('to-login');

// --- FITUR PINDAH TAMPILAN: KLIK "DAFTAR" ---
showRegisterBtn.addEventListener('click', function(e) {
    e.preventDefault();
    loginForm.classList.add('hidden');       // Sembunyikan form login
    registerForm.classList.remove('hidden'); // Munculkan form daftar
});

// --- FITUR PINDAH TAMPILAN: KLIK "LOGIN" KEMBALI ---
showLoginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    registerForm.classList.add('hidden');    // Sembunyikan form daftar
    loginForm.classList.remove('hidden');    // Munculkan form login kembali
});

// --- FITUR SIMPAN DATA REGISTER (LOKAL STORAGE) ---
registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    // Simpan data ke memori browser
    localStorage.setItem('savedName', name);
    localStorage.setItem('savedEmail', email);
    localStorage.setItem('savedPassword', password);

    alert('Pendaftaran berhasil, sayang! 😘 Silakan login.');
    
    // Reset form & otomatis alihkan balik ke tampilan login
    registerForm.reset();
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
});

// --- FITUR CEK DATA SAAT LOGIN ---
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputEmail = document.getElementById('login-email').value;
    const inputPassword = document.getElementById('login-password').value;

    // Ambil data yang tersimpan di localStorage
    const storedEmail = localStorage.getItem('savedEmail');
    const storedPassword = localStorage.getItem('savedPassword');

    // Validasi kecocokan data
    if (inputEmail === storedEmail && inputPassword === storedPassword) {
        alert('Login berhasil! Selamat datang di EXNime ❤️');
        // Kalau mau diarahkan ke halaman utama, uncomment baris di bawah ini:
        // window.location.href = "home.html";
    } else {
        alert('Email atau Password salah, cuy! Daftar dulu sana.');
    }
});
