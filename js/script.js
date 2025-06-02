document.addEventListener("DOMContentLoaded", function () {
  const whatsappBtn = document.querySelector(".scroll-whatsapp");

  function toggleWhatsappButton() {
    if (window.scrollY > 100) {
      whatsappBtn.classList.add("active");
    } else {
      whatsappBtn.classList.remove("active");
    }
  }

  window.addEventListener("scroll", toggleWhatsappButton);
  toggleWhatsappButton();
});

const textos = [
  "Bem-vindo ao mundo digital!",
  "Crie seu futuro com tecnologia.",
  "Automatize processos com código.",
  "Transforme ideias em produtos digitais.",
];

const velocidade = 100;
const pausaEntreFrases = 1500;

let i = 0; // índice da letra
let j = 0; // índice do texto atual
let apagando = false;

function escrever() {
  const elemento = document.getElementById("typewriter");
  const textoAtual = textos[j];

  if (!apagando) {
    elemento.innerHTML = textoAtual.substring(0, i + 1);
    i++;
    if (i === textoAtual.length) {
      apagando = true;
      setTimeout(escrever, pausaEntreFrases);
      return;
    }
  } else {
    elemento.innerHTML = textoAtual.substring(0, i - 1);
    i--;
    if (i === 0) {
      apagando = false;
      j = (j + 1) % textos.length;
    }
  }

  setTimeout(escrever, velocidade);
}

escrever();
