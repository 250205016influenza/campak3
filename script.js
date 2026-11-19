
// MENU NAVIGASI
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-menu a");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

// Menutup menu setelah diklik
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});

// Menandai menu yang sedang dibuka
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});

// FORM KONSULTASI
const form = document.getElementById("consultationForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Mengambil nilai input
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const telepon = document.getElementById("telepon").value.trim();
    const pesan = document.getElementById("pesan").value.trim();

    // Elemen pesan kesalahan
    const namaError = document.getElementById("namaError");
    const emailError = document.getElementById("emailError");
    const teleponError = document.getElementById("teleponError");
    const pesanError = document.getElementById("pesanError");
    const formMessage = document.getElementById("formMessage");

    // Mengosongkan pesan kesalahan sebelumnya
    namaError.textContent = "";
    emailError.textContent = "";
    teleponError.textContent = "";
    pesanError.textContent = "";
    formMessage.textContent = "";
    formMessage.className = "form-message";

    let valid = true;

    // VALIDASI NAMA
    if (nama.length < 3) {
        namaError.textContent =
            "Nama harus terdiri dari minimal 3 karakter.";
        valid = false;
    }

    // VALIDASI EMAIL
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        emailError.textContent =
            "Masukkan alamat email yang valid.";
        valid = false;
    }

    // VALIDASI NOMOR TELEPON
    const phonePattern = /^[0-9]{10,15}$/;

    if (!phonePattern.test(telepon)) {
        teleponError.textContent =
            "Nomor telepon harus berisi 10 sampai 15 angka.";
        valid = false;
    }

    // VALIDASI PESAN
    if (pesan.length < 10) {
        pesanError.textContent =
            "Pesan minimal terdiri dari 10 karakter.";
        valid = false;
    }

    // JIKA DATA TIDAK VALID
    if (!valid) {
        formMessage.textContent =
            "Periksa kembali data yang Anda masukkan.";
        formMessage.classList.add("failed");
        return;
    }

    // JIKA DATA VALID
    formMessage.textContent =
        "Data berhasil divalidasi! Formulir siap diproses.";
    formMessage.classList.add("success");

    // Mengosongkan formulir
    form.reset();
});

// TOMBOL KEMBALI KE ATAS
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
