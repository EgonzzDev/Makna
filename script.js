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