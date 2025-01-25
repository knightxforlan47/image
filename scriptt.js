document.addEventListener("DOMContentLoaded", function () {
    const figures = document.querySelectorAll('figure');
  
    figures.forEach(figure => {
      figure.addEventListener('focus', () => {
        figure.style.border = '2px solid blue'; // Highlight the focused figure
      });
      figure.addEventListener('blur', () => {
        figure.style.border = 'none'; // Remove highlight when focus is lost
      });
    });
    
    // Keyboard navigation
    window.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') {
        // Move to the next image
        // Implement logic to move focus to the next figure element
      }
      if (e.key === 'ArrowLeft') {
        // Move to the previous image
        // Implement logic to move focus to the previous figure element
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const figures = document.querySelectorAll('figure');
    
    figures.forEach(figure => {
      figure.setAttribute('tabindex', '0'); // Automatically add tabindex
    });
  });
    