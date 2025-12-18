<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "iot_db";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) die("Connection failed: ".$conn->connect_error);

$vendor = $_POST['vendor'];
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$city = $_POST['city'];
$pass = $_POST['password'];

$sql = "INSERT INTO users (vendor, name, email, phone, city, password)
        VALUES ('$vendor','$name','$email','$phone','$city','$pass')";

if ($conn->query($sql) === TRUE) {
  echo "✅ Registration Successful!";
} else {
  echo "❌ Error: ".$conn->error;
}

$conn->close();
?>
