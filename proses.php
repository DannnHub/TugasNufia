<?php
// Ambil data dari form
$nama = $_POST['nama'];
$email = $_POST['email'];
$nilai = $_POST['nilai'];

// Struktur kendali untuk menentukan hasil
if ($nilai > 70) {
    $hasil = "Lulus";
} else {
    $hasil = "Remedial";
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Hasil Nilai Ujian</title>
</head>
<body>
    <h2>Hasil Ujian</h2>
    <p>Nama: <?php echo htmlspecialchars($nama); ?></p>
    <p>Email: <?php echo htmlspecialchars($email); ?></p>
    <p>Nilai Ujian: <?php echo htmlspecialchars($nilai); ?></p>
    <p>Status: <strong><?php echo $hasil; ?></strong></p>
</body>
</html>
