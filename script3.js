// Fondo de estrellas titilantes
const sparkles = document.getElementById('sparkles');
for (let i = 0; i < 35; i++) {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.width = Math.random() * 3 + 1 + 'px';
  sparkle.style.height = sparkle.style.width;
  sparkle.style.left = Math.random() * 100 + '%';
  sparkle.style.top = Math.random() * 100 + '%';
  sparkle.style.animationDelay = Math.random() * 3 + 's';
  sparkles.appendChild(sparkle);
}

const btnAction = document.getElementById('btnAction');
const bouquetWrapper = document.getElementById('bouquetWrapper');
const envelopeWrapper = document.getElementById('envelopeWrapper');
const envelope = document.getElementById('envelope');
const petalsContainer = document.getElementById('petalsContainer');

let isStarted = false;

// Función para soltar pétalos animados
function dropPetals() {
  const petals = ['🌸', '💜', '🍃', '✨'];
  
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const petal = document.createElement('div');
      petal.className = 'falling-petal';
      petal.innerText = petals[Math.floor(Math.random() * petals.length)];
      
      // Ubicación sobre el ramo
      const rect = bouquetWrapper.getBoundingClientRect();
      const randomX = rect.left + Math.random() * rect.width;
      const randomY = rect.top + Math.random() * (rect.height / 2);

      petal.style.left = randomX + 'px';
      petal.style.top = randomY + 'px';

      document.body.appendChild(petal);

      // Eliminar el nodo después de caer
      setTimeout(() => petal.remove(), 2500);
    }, i * 120);
  }
}

btnAction.addEventListener('click', () => {
  if (!isStarted) {
    isStarted = true;

    // 1. Soltar los pétalos de las rosas
    dropPetals();

    // 2. Hacer aparecer el sobre progresivamente
    setTimeout(() => {
      envelopeWrapper.classList.remove('hidden');
      setTimeout(() => {
        envelopeWrapper.classList.add('show');
      }, 100);
    }, 1200);

    btnAction.innerText = "Toca el sobre para abrirlo 💌";
  }
});

// 3. Abrir el sobre al hacer clic
envelopeWrapper.addEventListener('click', () => {
  envelope.classList.toggle('open');
});