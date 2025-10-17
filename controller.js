// Fungsi untuk menampilkan data ke halaman web
function tampilkanData() {
  const container = document.getElementById("output");
  container.innerHTML = ""; // bersihkan dulu

  data.map((item, index) => {
    container.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${item.nama}</td>
        <td>${item.umur}</td>
        <td>${item.alamat}</td>
        <td>${item.email}</td>
      </tr>
    `;
  });
}

// Fungsi untuk menambah 2 data baru
function tambahData() {
  data.push(
    { nama: "Panda", umur: 23, alamat: "Bogor", email: "panda@mail.com" },
    { nama: "Miwa", umur: 18, alamat: "Citereup", email: "miwa@mail.com" },
    { nama: "Geto", umur: 20, alamat: "Cirebon", email: "geto@mail.com" },
    { nama: "Aloy", umur: 25, alamat: "Bekasi", email: "aloy@mail.com" },
    { nama: "Maru", umur: 21, alamat: "Cirebon", email: "maru@mail.com" }
  );
  alert("5 data baru berhasil ditambahkan!");
  tampilkanData();
}

// Fungsi untuk menghapus data terakhir
function hapusData() {
  if (data.length > 0) {
    data.pop();
    alert("Data terakhir berhasil dihapus!");
  } else {
    alert("Tidak ada data untuk dihapus!");
  }
  tampilkanData();
}

// Tampilkan data saat halaman pertama kali dibuka
window.onload = tampilkanData;
