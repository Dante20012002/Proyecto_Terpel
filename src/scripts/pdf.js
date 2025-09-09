// Script para manejar la funcionalidad de PDFs
document.addEventListener('DOMContentLoaded', function() {
  // Mejorar la carga de PDFs con loading lazy
  const iframes = document.querySelectorAll('iframe[src*=".pdf"]');
  
  iframes.forEach((iframe, index) => {
    // Agregar loading="lazy" si no está presente
    if (!iframe.hasAttribute('loading')) {
      iframe.setAttribute('loading', 'lazy');
    }
    
    // Agregar evento de carga para mostrar indicador
    iframe.addEventListener('load', function() {
      console.log(`PDF ${index + 1} cargado correctamente`);
    });
    
    // Manejar errores de carga
    iframe.addEventListener('error', function() {
      console.error(`Error al cargar PDF ${index + 1}`);
      // Mostrar mensaje de error al usuario
      const errorMessage = document.createElement('div');
      errorMessage.className = 'alert alert-warning';
      errorMessage.innerHTML = `
        <h6>Error al cargar el documento</h6>
        <p>No se pudo cargar el PDF. <a href="${iframe.src}" target="_blank">Abrir en nueva ventana</a></p>
      `;
      iframe.parentNode.insertBefore(errorMessage, iframe.nextSibling);
      iframe.style.display = 'none';
    });
  });
  
  // Funcionalidad para botones de descarga de PDFs
  const downloadButtons = document.querySelectorAll('a[download]');
  downloadButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Agregar analytics o tracking si es necesario
      console.log('Descargando:', this.getAttribute('href'));
    });
  });
});