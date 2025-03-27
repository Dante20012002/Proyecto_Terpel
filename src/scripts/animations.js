document.addEventListener("DOMContentLoaded", () => {
  const tarjetas = document.querySelectorAll(".tarjeta");

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("animada"); // Desactiva animación
              observer.unobserve(entry.target); // Deja de observar para evitar repeticiones
          }
      });
  }, { threshold: 0.3 }); // Se activa cuando el 30% del elemento es visible

  tarjetas.forEach(tarjeta => observer.observe(tarjeta));
});
