function myFunc() {
    let body = document.getElementById("mid");
    let button = document.getElementById("btl");

    if (body.style.backgroundColor == "black") {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        button.value = "NOC";
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        button.value = "DZIEŃ";
    }
}