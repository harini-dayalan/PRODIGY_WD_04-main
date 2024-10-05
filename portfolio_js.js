// Toggle mobile navigation
function toggleNavigation() {
    let nav = document.getElementById("mobile-nav");
    if (nav.classList.contains('w3-show')) {
      nav.classList.remove('w3-show');
    } else { 
      nav.classList.add('w3-show');
    }
  }
  
  // Load feather icons
  feather.replace()
  
  // Add event listeners to navigation links
  document.querySelectorAll('.w3-bar-item').forEach(link => {
    link.addEventListener('click', () => {
      toggleNavigation();
    });
  });
  
  // Add event listener to mobile navigation toggle button
  document.querySelector('.w3-bar-item.w3-button.w3-right.w3-hide-large.w3-hide-medium').addEventListener('click', () => {
    toggleNavigation();
  });
  
  // Add event listeners to social media links
  document.querySelectorAll('.icon-link').forEach(link => {
    link.addEventListener('click', () => {
      window.open(link.href, '_blank');
    });
  });