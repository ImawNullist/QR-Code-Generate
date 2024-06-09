let imgBox = document.getElementById('imgBox');
let qeImage = document.getElementById('qrImage');
let qrText = document.getElementById('qrText');


function generateQR(){
    if(qrText.value.length > 0){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    imgBox.classList.add('show-img');
    }
    else {
        qrText.classList.add('error');
        setTimeout(()=> {
            qrText.classList.remove('error');
        }, 1000)
    }
}

// Kode JavaScript ini digunakan untuk membuat kode QR (Quick Response) menggunakan API qrserver.com. Berikut penjelasannya:

// Variabel:
// imgBox: Variabel ini menyimpan elemen HTML dengan ID imgBox.
// qeImage: Variabel ini menyimpan elemen HTML dengan ID qrImage.
// qrText: Variabel ini menyimpan elemen HTML dengan ID qrText.
// Fungsi generateQR():
// Fungsi generateQR() dipanggil ketika pengguna menekan tombol atau melakukan tindakan tertentu.
// Fungsi ini memeriksa apakah nilai dari elemen qrText (yang seharusnya berisi teks yang akan diubah menjadi kode QR) tidak kosong.
// Jika tidak kosong, fungsi ini akan mengatur atribut src dari elemen qrImage dengan URL yang berisi teks yang akan diubah menjadi kode QR dan ukuran kode QR (150x150 piksel).
// Fungsi ini juga menambahkan kelas show-img ke elemen imgBox untuk menampilkan kode QR.
// Jika elemen qrText kosong, fungsi ini akan menambahkan kelas error ke elemen qrText selama 1 detik untuk menunjukkan bahwa teks tidak boleh kosong.
// Penjelasan Tambahan:
// API qrserver.com digunakan untuk membuat kode QR secara dinamis.
// Ukuran kode QR diatur menjadi 150x150 piksel.
// Kelas show-img dan error digunakan untuk memanipulasi tampilan elemen HTML terkait.