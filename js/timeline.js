document.addEventListener('DOMContentLoaded', function() {
  var timeline = document.querySelector('.timeline-scroll');
  if (!timeline) return;

  // Optional: highlight current card on scroll
  var cards = timeline.querySelectorAll('.timeline-card');

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('timeline-active');
      } else {
        entry.target.classList.remove('timeline-active');
      }
    });
  }, { root: timeline, threshold: 0.5 });

  cards.forEach(function(card) { observer.observe(card); });
});
