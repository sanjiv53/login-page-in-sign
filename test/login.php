<?php
header('Access-Control-Allow-Origin: *');

$conn = new mysqli("localhost", "root", "", "login");

if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
} else {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Sanitize input
    $email = mysqli_real_escape_string($conn, $email);

    $sql = "SELECT * FROM reactusers WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // User found, check password
        $user = $result->fetch_assoc();
        if ($user['password'] === $password) {
            echo "Login successful!";
        } else {
            echo "Incorrect password!";
        }
    } else {
        echo "User not found!";
    }
    $conn->close();
}
?>

