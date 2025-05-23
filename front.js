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

// Toggle chart content display on title click
document.querySelectorAll('.chart-title').forEach(title => {
  title.addEventListener('click', () => {
    const contentId = title.getAttribute('aria-controls');
    const content = document.getElementById(contentId);
    if(content.classList.contains('collapsed')){
      content.classList.remove('collapsed');
      title.setAttribute('aria-expanded', 'true');
      animateBars(content);
    } else {
      content.classList.add('collapsed');
      title.setAttribute('aria-expanded', 'false');
    }
  });
  // Allow toggling via keyboard Enter and Space keys for accessibility
  title.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' || e.key === ' '){
      e.preventDefault();
      title.click();
    }
  });
});

function animateBars(container) {
  const fills = container.querySelectorAll('.bar-fill');
  fills.forEach(fill => {
    fill.style.width = '0';
    setTimeout(() => {
      const targetWidth = fill.getAttribute('data-width') || fill.style.width || '0';
      fill.style.width = targetWidth;
    }, 50);
  });
  // Animate range bars for Germany in first chart
  const rangeMin = container.querySelector('.range-fill-min');
  const rangeMax = container.querySelector('.range-fill-max');
  if(rangeMin && rangeMax){
    rangeMin.style.width = '0';
    rangeMax.style.width = '0';
    setTimeout(() => {
      rangeMin.style.width = '82%';
      rangeMax.style.width = '100%';
    }, 50);
  }
}

// On page load, animate bars for visible chart contents
window.addEventListener('load', () => {
  document.querySelectorAll('.chart-content').forEach(content => {
    if(!content.classList.contains('collapsed')){
      const fills = content.querySelectorAll('.bar-fill');
      fills.forEach(fill => {
        const widthVal = fill.style.width;
        fill.style.width = '0';
        setTimeout(() => {
          fill.style.width = widthVal;
        }, 100);
      });
      // Range bars animate for chart 1
      const rangeMin = content.querySelector('.range-fill-min');
      const rangeMax = content.querySelector('.range-fill-max');
      if(rangeMin && rangeMax){
        rangeMin.style.width = '0';
        rangeMax.style.width = '0';
        setTimeout(() => {
          rangeMin.style.width = '82%';
          rangeMax.style.width = '100%';
        }, 100);
      }
    }
  });
});
