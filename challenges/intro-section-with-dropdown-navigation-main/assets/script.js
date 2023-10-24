// Selecione os elementos do menu e os ícones de abertura e fechamento
const overlay = document.getElementById("overlay");
const menu = document.getElementById("nav");
const openIcon = document.getElementById("menu-open");
const closeIcon = document.getElementById("menu-close");

// Adicione um ouvinte de evento ao ícone de abertura para mostrar o menu
openIcon.addEventListener("click", function() {
  menu.classList.remove("menu__hidden");
  menu.classList.add("menu__visible");
  overlay.classList.add("overlay__visible");
});

// Adicione um ouvinte de evento ao ícone de fechamento para esconder o menu
closeIcon.addEventListener("click", function() {
  menu.classList.remove("menu__visible");
  menu.classList.add("menu__hidden");
  overlay.classList.remove("overlay__visible");
});
