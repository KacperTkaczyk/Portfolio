<?php
// Pobranie przesłanych danych rejestracji
$data = json_decode(file_get_contents("php://input"), true);
$username = $data["username"];
$password = $data["password"];

// Walidacja danych rejestracji
// Można tutaj użyć np. bazy danych lub plików do sprawdzania unikalności nazwy użytkownika

// Tutaj można dodać logikę walidacji danych rejestracji
if ($username !== "" && $password !== "") {
  // Zapisanie danych rejestracji w pliku "dane.txt"
  $file = fopen("Gra/dane.txt", "a");
  fwrite($file, "Username: " . $username . ", Password: " . $password . "\n");
  fclose($file);

  // Wysłanie odpowiedzi JSON o sukcesie rejestracji
  $response = ["success" => true];
  echo json_encode($response);
} else {
  // Wysłanie odpowiedzi JSON o niepowodzeniu rejestracji
  $response = ["success" => false];
  echo json_encode($response);
}
?>
