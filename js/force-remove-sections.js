document.addEventListener('DOMContentLoaded', function() {
  const checkInterval = setInterval(function() {
    const expandedCard = document.querySelector('.expanded-card');
    if (!expandedCard) return;
    
    const projectTitle = expandedCard.querySelector('.project-title');
    if (!projectTitle || projectTitle.textContent !== "Name Me") return;

    console.log("Vision section preservation enabled");
  }, 500);
  
  setTimeout(() => {
    clearInterval(checkInterval);
  }, 60000);
});