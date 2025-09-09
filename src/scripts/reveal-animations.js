// Script para manejar animaciones de reveal
document.addEventListener('DOMContentLoaded', function() {
  // Configurar Intersection Observer para animaciones de reveal
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        // Una vez animado, dejar de observar para evitar repeticiones
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observar todos los elementos con clase animate-reveal
  const revealElements = document.querySelectorAll('.animate-reveal');
  revealElements.forEach(element => {
    observer.observe(element);
  });

  // Funcionalidad adicional para tarjetas animadas (compatibilidad con código existente)
  const tarjetas = document.querySelectorAll('.tarjeta');
  tarjetas.forEach(tarjeta => {
    observer.observe(tarjeta);
  });
});
