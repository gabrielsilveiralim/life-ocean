const dicas = [
  "Evite plásticos descartáveis, use garrafas reutilizáveis.",
  "Participe de limpezas de praias e rios.",
  "Consuma peixes de pesca sustentável.",
  "Apoie ONGs que atuam em defesa dos oceanos.",
  "Reduza o uso de produtos químicos que vão para o esgoto."
];

function mostrarDica() {
  const dicaAleatoria = dicas[Math.floor(Math.random() * dicas.length)];
  const elementoDica = document.getElementById("dica");
  elementoDica.textContent = dicaAleatoria;
}