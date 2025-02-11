document.addEventListener("DOMContentLoaded", function () {
  const archivosPDF = [
    "Boletín EDS Confiable N 75.pdf",
    "Boletín EDS Confiable N 76.pdf",
    "Boletín EDS Confiable N 77.pdf",
    "Boletín EDS Confiable N 78.pdf",
    "Boletín EDS Confiable No 80.pdf"
  ]; 

  const pdfContainer = document.getElementById("pdf-container");

  archivosPDF.forEach((archivo) => {
    const iframe = document.createElement("iframe");
    iframe.src = `/media/docs/Boletines/${archivo}`;
    iframe.width = "100%";
    iframe.height = "500px"; // Ajusta la altura según necesites
    iframe.style.border = "1px solid #ccc";

    const div = document.createElement("div");
    div.style.marginBottom = "20px"; // Espaciado entre PDFs
    div.appendChild(iframe);
    pdfContainer.appendChild(div);
  });
});

