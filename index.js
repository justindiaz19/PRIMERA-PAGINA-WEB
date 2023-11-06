// Función para lanzar confeti en la página
function launchConfetti() {
    var colors = ['#FFD700', '#FF69B4', '#00FF00', '#87CEEB', '#FFA07A']; // Colores para el confeti

    var confettiContainer = document.getElementById('confetti-container');

    // Generar confeti y añadirlo al contenedor
    for (var i = 0; i < 100; i++) {
        var confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 4 + 's';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; // Color aleatorio
        confettiContainer.appendChild(confetti);
    }
}

// Cambio de fondo suave
var backgroundColors = ['#FFD1DC', '#FFDAB9', '#FFC3A0', '#FFB6C1', '#FFD9E2'];
var currentIndex = 0;

function changeBackgroundColor() {
    document.body.style.backgroundColor = backgroundColors[currentIndex];
    currentIndex = (currentIndex + 1) % backgroundColors.length;
    setTimeout(changeBackgroundColor, 4000); // Cambia el color cada 4 segundos
}

// Iniciar la función para cambiar el fondo
changeBackgroundColor();

// Llama a la función para lanzar confeti
launchConfetti();
