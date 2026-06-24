document.addEventListener('DOMContentLoaded', function() {
  // 1. Fade-up elements
  var fadeObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var delay = parseFloat(entry.target.dataset.delay || 0);
        setTimeout(function() {
          entry.target.classList.add('visible');
        }, delay * 1000);
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: '-50px' });

  document.querySelectorAll('.fade-up').forEach(function(el) {
    fadeObserver.observe(el);
  });

  // 2. Stagger grid items
  var staggerObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var items = entry.target.querySelectorAll('.stagger-item');
        items.forEach(function(item, i) {
          setTimeout(function() {
            item.classList.add('visible');
          }, i * 80);
        });
        staggerObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: '-50px' });

  document.querySelectorAll('.stagger-grid').forEach(function(el) {
    staggerObserver.observe(el);
  });

  // 3. Count-up
  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

  function animateCountUp(el) {
    var target = parseInt(el.dataset.countTo);
    var prefix = el.dataset.prefix || '';
    var suffix = el.dataset.suffix || '';
    var duration = 1500;
    var start = performance.now();

    function step(now) {
      var progress = Math.min((now - start) / duration, 1);
      var current = Math.round(easeOut(progress) * target);
      el.textContent = prefix + current.toLocaleString('en-IN') + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var countObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        animateCountUp(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: '-50px' });

  document.querySelectorAll('[data-count-to]').forEach(function(el) {
    countObserver.observe(el);
  });
});
