const messages = [
    "Segura?",
    "100x100??",
    "De verdad?",
    "¿Estás segura?",
    "Solo piensalo!",
    "Si dices que no me pondré triste...",
    "Muy triste...",
    "Muy muy truste...",
    "Taben voy a dejar de preguntar...",
    "Mentiris, Di sí pofabo! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}