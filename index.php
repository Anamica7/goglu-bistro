<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);

  // Normally you'd send an email or store in a database
  echo "Thank you, $name! We got your message and will hit you up soon!";
}
?>
