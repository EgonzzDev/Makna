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

const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const toRegisterBtn = document.getElementById('to-register');
const toLoginBtn = document.getElementById('to-login');

// Pindah tampilan Form
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

// --- SIMPAN DATA REGISTER ---
registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    // Simpan ke localStorage
    localStorage.setItem('savedEmail', email);
    localStorage.setItem('savedPassword', password);
    localStorage.setItem('savedName', name);

    alert('Pendaftaran berhasil, sayang! 😘 Silakan login.');
    
    // Reset form dan balikin ke login
    registerForm.reset();
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
});

// --- CEK DATA LOGIN ---
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputEmail = document.getElementById('login-email').value;
    const inputPassword = document.getElementById('login-password').value;

    const storedEmail = localStorage.getItem('savedEmail');
    const storedPassword = localStorage.getItem('savedPassword');

    // Validasi
    if (inputEmail === storedEmail && inputPassword === storedPassword) {
        alert('Login berhasil! Selamat datang di EXNime ❤️');
        // Arahkan ke halaman utama kalau mau, misal: window.location.href = "home.html";
    } else {
        alert('Email atau Password salah, cuy! Daftar dulu sana.');
    }
});
