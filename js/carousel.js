document.addEventListener('DOMContentLoaded', function() {
  var carousel = document.querySelector('.carousel-container');
  if (!carousel) return;

  var TOTAL = 5;
  var current = 0;
  var hovered = false;
  var timer;

  var POS_STYLES = {
    0: { transform: 'translateZ(0px) rotateY(0deg)', opacity: '1', filter: 'none', zIndex: '5' },
    1: { transform: 'translateX(190px) translateZ(-130px) rotateY(-28deg)', opacity: '0.55', filter: 'brightness(0.75)', zIndex: '4' },
    2: { transform: 'translateX(310px) translateZ(-300px) rotateY(-46deg)', opacity: '0.18', filter: 'brightness(0.55)', zIndex: '3' },
    3: { transform: 'translateX(-310px) translateZ(-300px) rotateY(46deg)', opacity: '0.18', filter: 'brightness(0.55)', zIndex: '3' },
    4: { transform: 'translateX(-190px) translateZ(-130px) rotateY(28deg)', opacity: '0.55', filter: 'brightness(0.75)', zIndex: '4' }
  };

  function getPos(cardIndex) {
    return (((cardIndex - current) % TOTAL) + TOTAL) % TOTAL;
  }

  function updateCards() {
    var cards = document.querySelectorAll('.carousel-card');
    cards.forEach(function(card, i) {
      var pos = getPos(i);
      var style = POS_STYLES[pos];
      card.style.transform = style.transform;
      card.style.opacity = style.opacity;
      card.style.filter = style.filter;
      card.style.zIndex = style.zIndex;
      card.style.cursor = pos !== 0 ? 'pointer' : 'default';

      // Toggle accent bar
      var accent = card.querySelector('.card-accent');
      if (accent) accent.style.display = pos === 0 ? 'block' : 'none';
    });

    // Update dots
    var dots = document.querySelectorAll('.carousel-dot');
    dots.forEach(function(dot, i) {
      if (i === current) {
        dot.classList.add('w-5', 'bg-terracotta');
        dot.classList.remove('w-1.5', 'bg-espresso/20');
      } else {
        dot.classList.remove('w-5', 'bg-terracotta');
        dot.classList.add('w-1.5', 'bg-espresso/20');
      }
    });
  }

  function next() { current = (current + 1) % TOTAL; updateCards(); }
  function prev() { current = (current - 1 + TOTAL) % TOTAL; updateCards(); }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(function() { if (!hovered) next(); }, 3800);
  }

  // Card clicks
  document.querySelectorAll('.carousel-card').forEach(function(card, i) {
    card.addEventListener('click', function() {
      var pos = getPos(i);
      if (pos !== 0) { current = i; updateCards(); resetTimer(); }
    });
  });

  // Arrow buttons
  var prevBtn = document.querySelector('.carousel-prev');
  var nextBtn = document.querySelector('.carousel-next');
  if (prevBtn) prevBtn.addEventListener('click', function() { prev(); resetTimer(); });
  if (nextBtn) nextBtn.addEventListener('click', function() { next(); resetTimer(); });

  // Dot buttons
  document.querySelectorAll('.carousel-dot').forEach(function(dot, i) {
    dot.addEventListener('click', function() { current = i; updateCards(); resetTimer(); });
  });

  // Hover pause
  var stage = document.querySelector('.carousel-stage');
  if (stage) {
    stage.addEventListener('mouseenter', function() { hovered = true; });
    stage.addEventListener('mouseleave', function() { hovered = false; });
  }

  // Touch swipe
  var touchStartX = 0;
  if (stage) {
    stage.addEventListener('touchstart', function(e) { touchStartX = e.touches[0].clientX; });
    stage.addEventListener('touchend', function(e) {
      var dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 40) { dx < 0 ? next() : prev(); resetTimer(); }
    });
  }

  // Init
  updateCards();
  resetTimer();
});
