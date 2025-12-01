
document.addEventListener('DOMContentLoaded', () => {
    // 1. Ambil elemen
    const passwordField = document.getElementById('password');
    // Pastikan ID ini sesuai dengan yang ada di form.html
    const showIcon = document.getElementById('show-icon'); // Ikon Mata Terbuka (eye.png)
    const hideIcon = document.getElementById('hide-icon'); // Ikon Mata Tertutup (hidden.png)

    // Cek apakah semua elemen ditemukan sebelum melanjutkan
    if (!passwordField || !showIcon || !hideIcon) {
        console.error("Salah satu elemen (password field, show icon, atau hide icon) tidak ditemukan.");
        return;
    }

    const togglePassword = () => {
        const currentType = passwordField.getAttribute('type');
        
        if (currentType === 'password') {
            // Ubah dari 'password' ke 'text' (SHOW)
            passwordField.setAttribute('type', 'text');
            showIcon.style.display = 'block'; // Tampilkan ikon 'mata terbuka'
            hideIcon.style.display = 'none';  // Sembunyikan ikon 'mata tertutup'
        } else {
            // Ubah dari 'text' ke 'password' (HIDE)
            passwordField.setAttribute('type', 'password');
            showIcon.style.display = 'none'; // Sembunyikan ikon 'mata terbuka'
            hideIcon.style.display = 'block'; // Tampilkan ikon 'mata tertutup'
        }
    };

    // Pasang listener: Keduanya akan memanggil fungsi yang sama untuk beralih
    showIcon.addEventListener('click', togglePassword);
    hideIcon.addEventListener('click', togglePassword);
});