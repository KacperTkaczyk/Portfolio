// Funkcja zwracająca poprawną odpowiedź dla danej zagadki oraz adres URL kolejnej strony z zagadką
function getCorrectAnswer() {
    const urlParams = new URLSearchParams(window.location.search);
    const currentQuestion = urlParams.get("question");

    if (currentQuestion === "0") {
        return { answer: "1878", nextUrl: "pytanie2.html" };
    } else if (currentQuestion === "1") {
        return { answer: "Krzysztof", nextUrl: "pytanie3.html" };
    } else if (currentQuestion === "2") {
        return { answer: "Tkaczyk", nextUrl: "pytanie4.html" };
    } else {
        return { answer: "", nextUrl: "" };
    }
}

// Obsługa formularza
const form = document.querySelector("form");
const answerInput = form.querySelector('input[name="answer"]');
const result = form.querySelector(".result");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const userAnswer = answerInput.value.toLowerCase().trim();
    const { answer: correctAnswer, nextUrl } = getCorrectAnswer();

    if (userAnswer === correctAnswer) {
        if (nextUrl !== "") {
            // Przekierowanie na kolejną stronę z zagadką, jeśli jest dostępna
            window.location.href = nextUrl;
        } else {
            // Wyświetlenie komunikatu, gdy użytkownik rozwiązał już wszystkie zagadki
            result.innerText = "Brawo! Rozwiązałeś wszystkie zagadki!";
        }
    } else {
        // Wyświetlenie komunikatu o niepoprawnej odpowiedzi
        result.innerText = "Odpowiedź niepoprawna. Spróbuj jeszcze raz.";
    }
});