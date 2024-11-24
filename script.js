// Botones
const btnSi = document.getElementById('btnSi');
const btnNo = document.getElementById('btnNo');
const mensaje = document.getElementById('mensaje');

// Acción al presionar "Sí"
btnSi.addEventListener('click', () => {
  mensaje.textContent = 'YO TAMBIÉN TE QUIERO MUCHO, LIA 💖💖💖';
  mensaje.classList.add('visible');
});

// Acción al intentar presionar "No"
btnNo.addEventListener('mouseover', () => {
  const x = Math.floor(Math.random() * 300); // Posición horizontal aleatoria
  const y = Math.floor(Math.random() * 300); // Posición vertical aleatoria
  btnNo.style.position = 'absolute';
  btnNo.style.left = `${x}px`;
  btnNo.style.top = `${y}px`;
});
