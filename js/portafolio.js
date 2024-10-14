// Función para mostrar la sección correspondiente
function mostrarSeccion(seccionId) {
    // Oculta todas las secciones
    var secciones = document.querySelectorAll('section');
    secciones.forEach(function(section) {
        section.style.display = 'none';
    });

    // Muestra la sección seleccionada
    var seccion = document.getElementById(seccionId);
    if (seccion) {
        seccion.style.display = 'block';
    }
}

// Mostrar la primera sección por defecto (inicio)
mostrarSeccion('inicio');
       