// Seleciona os elementos
const images = document.querySelectorAll("#image");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const close = document.getElementById("close");

// Abre o modal ao clicar na imagem
images.forEach((image) => {
    image.addEventListener("click", () => {
      const src = image.getAttribute("data-src"); // Obtém o caminho da imagem do atributo data-src
      modalImg.src = src; // Define a imagem no modal
      modal.style.display = "flex";
    });
  });

// Fecha o modal ao clicar no botão "x"
close.addEventListener("click", () => {
  modal.style.display = "none";
});

// Fecha o modal ao clicar fora da imagem ampliada
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});