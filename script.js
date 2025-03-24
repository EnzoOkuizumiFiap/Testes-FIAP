// Exemplo de animação simples com JavaScript
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    header.style.transition = "transform 1s ease-in-out";
    header.style.transform = "translateY(0)";
});