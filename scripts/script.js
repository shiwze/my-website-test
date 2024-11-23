// Lazy fade-in effect as you scroll
document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
      }
    });
  });
  
  // Добавляем анимацию при загрузке
  window.addEventListener("load", () => {
    document.body.style.opacity = "1";
    document.body.style.transition = "opacity 1s ease-in-out";
  });
  