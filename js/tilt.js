document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tilt-card').forEach(function(card) {
    var maxTilt = parseFloat(card.dataset.maxTilt || 8);

    card.addEventListener('mousemove', function(e) {
      var rect = card.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width;
      var y = (e.clientY - rect.top) / rect.height;
      var rotateX = (0.5 - y) * maxTilt * 2;
      var rotateY = (x - 0.5) * maxTilt * 2;
      card.style.transform = 'perspective(800px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
    });

    card.addEventListener('mouseleave', function() {
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0)';
    });
  });
});
