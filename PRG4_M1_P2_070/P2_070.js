//fungsi untuk menghitung usia berdasarkan tahun lahir
function hitungUsia(tahunLahir){
    //mendapatkan tahun saat ini menggunakan objek Date
    const tahunSekarang = new Date().getFullYear();
    //menghitung usia
    const usia = tahunSekarang - tahunLahir;
    return usia;
}

// menangani event submit pada form
document.getElementById('formUsia').addEventListener('submit', function (event) {
    event.preventDefault(); // mencegah form dari reload halaman

    //mengambil input tahun lahir dari pengguna
    const tahunLahirInput = document.getElementById('tahunLahir').value;

    //konversi input menjadi tipe data number
   const tahunLahir = parseInt(tahunLahirInput, 10);

   //validasi input: pastikan tahun lahir tidak kosong dan masuk akal
   if(isNaN(tahunLahir) || tahunLahir <= 0){
    document.getElementById('hasil').innerText = "Masukkan tahun lahir yang valid!";
    return;
    }

    //memanggil fungsi hitungUsia
    const usia = hitungUsia(tahunLahir);

    //validasi apakah usia masuk akal
    if(usia < 0){
        document.getElementById('hasil').innerText = "Tahun lahir lebih besar dari tahun sekarang!";
    } else if(usia > 1 ||usia < 1800){
        document.getElementById('hasil').innerText = "lu udah mati begoo tolol";
    }
    else {
        //menampilkan hasil usia
        document.getElementById('hasil').innerText = `Usia Anda adalah ${usia} tahun.`;
    }

});