// funciones.js
// Aquí puedes agregar funciones JS básicas si deseas hacer cosas como alertas o navegación activa

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.style.fontWeight = "bold";
      link.style.textDecoration = "underline";
    }
  });

  const video = document.querySelector("video");
  if (video) {
    video.addEventListener("play", () => {
      console.log("Video en reproducción...");
    });
  }
});
