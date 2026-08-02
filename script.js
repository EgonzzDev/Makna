registerBtn.onclick = () => {
    // sembunyikan form login
    // tampilkan form daftar
}

loginBtn.onclick = () => {
    // tampilkan form login lagi
}
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

document.getElementById("showRegister").addEventListener("click", function(e){
    e.preventDefault();

    loginForm.style.display = "none";
    registerForm.style.display = "block";
});

document.getElementById("showLogin").addEventListener("click", function(e){
    e.preventDefault();

    registerForm.style.display = "none";
    loginForm.style.display = "block";
});
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const toRegisterBtn = document.getElementById('to-register');
const toLoginBtn = document.getElementById('to-login');

// Kalau tulisan "Daftar" diklik
toRegisterBtn.addEventListener('click', function(e) {
    e.preventDefault();
    loginForm.classList.add('hidden');    // Sembunyikan form login
    registerForm.classList.remove('hidden'); // Munculkan form daftar
});

// Kalau tulisan "Login" diklik balik
toLoginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    registerForm.classList.add('hidden'); // Sembunyikan form daftar
    loginForm.classList.remove('hidden');    // Munculkan form login kembali
});
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const toRegisterBtn = document.getElementById('to-register');
const toLoginBtn = document.getElementById('to-login');

// Tombol pindah form
toRegisterBtn.addEventListener('click', function(e) {
    e.preventDefault();
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
});

toLoginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
});

// --- FITUR SIMPAN DATA (REGISTER) ---
const regEmailInput = registerForm.querySelector('input[type="email"]');
const regPasswordInput = registerForm.querySelector('input[type="password"]');

registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = regEmailInput.value;
    const password = regPasswordInput.value;

    // Simpan data ke localStorage browser
    localStorage.setItem('savedEmail', email);
    localStorage.setItem('savedPassword', password);

    alert('Pendaftaran berhasilsayang! 😘, Silakan login kembali');
    
    // Reset form & pindahin otomatis ke tampilan login
    registerForm.reset();
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
});

// --- FITUR CEK DATA SAAT LOGIN ---
const loginEmailInput = loginForm.querySelector('input[type="email"]');
const loginPasswordInput = loginForm.querySelector('input[type="password"]');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputEmail = loginEmailInput.value;
    const inputPassword = loginPasswordInput.value;

    // Ambil data yang tersimpan di localStorage
    const storedEmail = localStorage.getItem('savedEmail');
    const storedPassword = localStorage.getItem('savedPassword');

    // Validasi login
    if (inputEmail === storedEmail && inputPassword === storedPassword) {
        alert('Login berhasil! Selamat datang di EXNime ❤️');
        // Di sini nanti bisa diarahkan ke halaman utama/dashboard web lu
    } else {
        alert('Email atau Password salah, cuy! Daftar dulu atau cek datanya.');
    }
});
