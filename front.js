document.addEventListener('DOMContentLoaded', () => {
  const toggleLinks = document.querySelectorAll('.expandable-link');
  toggleLinks.forEach(link => {
      link.addEventListener('click', () => {
          const contentId = link.getAttribute('data-toggle');
          const content = document.getElementById(contentId);
          if (!content) return;
          const isVisible = content.classList.toggle('show');
          link.textContent = isVisible ? 'Свернуть' : 'Развернуть';
      });
  });
});
