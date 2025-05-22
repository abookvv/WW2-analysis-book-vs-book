// document.addEventListener('DOMContentLoaded', () => {
//   const toggleLinks = document.querySelectorAll('.expandable-link');
//   toggleLinks.forEach(link => {
//     link.addEventListener('click', () => {
//       const contentId = link.getAttribute('data-toggle');
//       const content = document.getElementById('expandableContent' + contentId.slice(-1));
      
//       if (!content) return; // Проверка на наличие элемента
//       // Проверяем, есть ли класс 'show'
//       const isVisible = content.classList.contains('show');
//       if (isVisible) {
//         content.classList.remove('show');
//         link.textContent = 'Развернуть';
//       } else {
//         content.classList.add('show');
//         link.textContent = 'Свернуть';
//       }
//     });
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const toggleLinks = document.querySelectorAll('.expandable-link');
  toggleLinks.forEach(link => {
    link.addEventListener('click', () => {
      const contentId = link.getAttribute('data-toggle'); // Получаем значение data-toggle
      const content = document.getElementById(contentId); // Используем его напрямую для поиска элемента
      
      if (!content) return; // Проверка на наличие элемента
      // Проверяем, есть ли класс 'show'
      const isVisible = content.classList.contains('show');
      if (isVisible) {
        content.classList.remove('show');
        link.textContent = 'Развернуть';
      } else {
        content.classList.add('show');
        link.textContent = 'Свернуть';
      }
    });
  });
});