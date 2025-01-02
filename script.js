function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    document.body.appendChild(snowflake);
  
    const size = Math.random() * 10 + 5; // Размер снежинки
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
  
    snowflake.style.left = `${Math.random() * window.innerWidth}px`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Скорость падения
    snowflake.style.opacity = Math.random();
  
    setTimeout(() => {
      snowflake.remove();
    }, 5000); // Удаление после падения
  }
  
  setInterval(createSnowflake, 150);
  
  /* CSS для снежинок */
  const style = document.createElement("style");
  style.textContent = `
    .snowflake {
      position: fixed;
      top: -10px;
      background: white;
      border-radius: 50%;
      pointer-events: none;
      animation: fall linear;
    }
  
    @keyframes fall {
      to {
        transform: translateY(100vh);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
