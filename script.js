function abrirMenu() {
  document.getElementById("sidebar").classList.add("active");
}

function fecharMenu() {
  document.getElementById("sidebar").classList.remove("active");
}

function alternarTema() {
  document.body.classList.toggle("dark-mode");
}
