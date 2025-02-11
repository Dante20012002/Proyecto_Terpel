document.addEventListener('DOMContentLoaded', function () {
  const areas = document.querySelectorAll('area');
  const tooltip = document.getElementById('tooltip');

  areas.forEach((area) => {
    area.addEventListener('mouseenter', function (e) {
      // Guarda el title y lo elimina temporalmente
      area.dataset.originalTitle = area.getAttribute('title');
      area.removeAttribute('title');

      // Muestra el tooltip con el texto original
      const tooltipText = area.dataset.originalTitle;
      tooltip.textContent = tooltipText;
      tooltip.classList.add('active');

      // Posiciona el tooltip
      const x = e.clientX + 10;
      const y = e.clientY + 10;
      tooltip.style.left = `${x}px`;
      tooltip.style.top = `${y}px`;
    });

    area.addEventListener('mouseleave', function () {
      // Oculta el tooltip
      tooltip.classList.remove('active');

      // Restaura el title
      if (area.dataset.originalTitle) {
        area.setAttribute('title', area.dataset.originalTitle);
        delete area.dataset.originalTitle;
      }
    });

    area.addEventListener('mousemove', function (e) {
      // Mueve el tooltip con el cursor
      const x = e.clientX + 10;
      const y = e.clientY + 10;
      tooltip.style.left = `${x}px`;
      tooltip.style.top = `${y}px`;
    });
  });
});
