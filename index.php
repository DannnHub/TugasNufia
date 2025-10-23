<!DOCTYPE html>
<html>
<head>
    <title>Form Nilai Ujian</title>
</head>
<body>
    <h2>Form Nilai Ujian</h2>
    <form action="proses.php" method="POST">
        <label>Nama:</label><br>
        <input type="text" name="nama" required><br><br>

        <label>Email:</label><br>
        <input type="email" name="email" required><br><br>

        <label>Nilai Ujian:</label><br>
        <input type="number" name="nilai" required min="0" max="100"><br><br>

        <input type="submit" value="Submit">
    </form>
</body>
</html>
