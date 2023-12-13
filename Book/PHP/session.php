<?php

session_start();
$_SESSION["username"]="hyashreyaa";
$_SESSION["email"]="shreyaniraula33@gmail.com";
echo "Session Variables are set.<br>";

echo "Username is " . $_SESSION["username"] . ".<br>";
echo "Email is " . $_SESSION["email"] . ".<br>";
?>

<?php
session_unset();
session_destroy();
echo "Session destroyed.<br>"
?>