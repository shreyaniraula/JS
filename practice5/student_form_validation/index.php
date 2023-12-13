<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "database";

//Create Connection
$conn = new mysqli($servername, $username, $password, $dbname);

//Check Connection
if( $conn->connect_error ) {
    die("Connection failed". $conn->connect_error);
}
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $sql = "INSERT INTO students(username, email, password) VALUES ('$username', '$email', '$password')";
    if($conn->query($sql)===true){
        echo "Record Inserted Successfully";
    }
    else{
        echo "Connection failed." . $conn->connect_error;
    }
    $conn->close();
}
?>