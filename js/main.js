document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll effect
  var navbar = document.querySelector('.navbar');
  var navInner = document.querySelector('.nav-inner');

  if (navbar) {
    window.addEventListener('scroll', function() {
      var scrolled = window.scrollY > 80;
      navbar.classList.toggle('navbar-scrolled', scrolled);
      navbar.classList.toggle('navbar-compact', scrolled);
    });
  }

  // Mobile menu toggle
  var hamburger = document.getElementById('mobile-menu-btn');
  var mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function() {
      var isOpen = mobileMenu.classList.toggle('mobile-menu-open');
      hamburger.setAttribute('aria-expanded', isOpen);
      // Toggle icon
      var iconOpen = hamburger.querySelector('.icon-open');
      var iconClose = hamburger.querySelector('.icon-close');
      if (iconOpen && iconClose) {
        iconOpen.classList.toggle('hidden', isOpen);
        iconClose.classList.toggle('hidden', !isOpen);
      }
    });
  }

  // Close mobile menu on desktop resize
  var mq = window.matchMedia('(min-width: 1024px)');
  mq.addEventListener('change', function(e) {
    if (e.matches && mobileMenu) {
      mobileMenu.classList.remove('mobile-menu-open');
      if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
      var iconOpen = hamburger ? hamburger.querySelector('.icon-open') : null;
      var iconClose = hamburger ? hamburger.querySelector('.icon-close') : null;
      if (iconOpen) iconOpen.classList.remove('hidden');
      if (iconClose) iconClose.classList.add('hidden');
    }
  });
});
