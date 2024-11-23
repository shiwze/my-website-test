// Таймер до Нового года
const countdown = document.getElementById('countdown');
function updateTimer() {
  const now = new Date();
  const newYear = new Date(now.getFullYear() + 1, 0, 1);
  const diff = newYear - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateTimer, 1000);
updateTimer(); // Первоначальный вызов

// Снег
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
  snowflake.style.opacity = Math.random();
  snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
  snowflake.textContent = 'илья соси хуйца';
  document.body.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 5000);
}

setInterval(createSnowflake, 100);