<?php
// Pobranie przesłanych danych logowania
$data = json_decode(file_get_contents("php://input"), true);
$username = $data["username"];
$password = $data["password"];

// Sprawdzenie poprawności danych logowania
// Można tutaj użyć np. bazy danych lub plików do przechowywania danych użytkowników
$storedUsername = "przykladowy_uzytkownik";
$storedPassword = "tajnehaslo";

if ($username === $storedUsername && $password === $storedPassword) {
  // Wysłanie odpowiedzi JSON o logowania
  $response = ["success" => true];
  echo json_encode($response);
} else {
  // Wysłanie odpowiedzi JSON o niepowodzeniu logowania
  $response = ["success" => false];
  echo json_encode($response);
}
?>
