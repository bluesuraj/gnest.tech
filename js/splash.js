document.addEventListener('DOMContentLoaded', function() {
  var splash = document.getElementById('splash-screen');
  if (!splash) return;

  document.body.style.overflow = 'hidden';

  // Phase: holding (trigger ring pulse)
  setTimeout(function() {
    splash.classList.add('splash-holding');
    var rings = splash.querySelectorAll('.splash-ring');
    rings.forEach(function(ring) {
      ring.style.animation = 'ringPulse 1.2s cubic-bezier(0.2, 0, 0.8, 1) forwards';
    });
    var ring2 = splash.querySelector('.splash-ring-2');
    if (ring2) ring2.style.animationDelay = '0.25s';
  }, 900);

  // Phase: fadeout
  setTimeout(function() {
    splash.style.opacity = '0';
    splash.style.transition = 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)';
    splash.style.pointerEvents = 'none';
  }, 1800);

  // Phase: done (remove from DOM)
  setTimeout(function() {
    splash.remove();
    document.body.style.overflow = '';
  }, 2500);
});
