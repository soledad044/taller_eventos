document.addEventListener('DOMContentLoaded', function() {
    const buttonContainer = document.getElementById('button-container');
    
    buttonContainer.addEventListener('click', function() {
        alert('Hola! Soy el div');
    });
});


//** parte 5 de la actividad */

// Seleccionamos el botón dentro del div
const boton = buttonContainer.querySelector('button');

// Añadimos un método para evitar que el click en el botón se propague al div.
boton.addEventListener('click', function(event) {
    alert('¡Botón clickeado!');
    event.stopPropagation(); // aquí  
});
