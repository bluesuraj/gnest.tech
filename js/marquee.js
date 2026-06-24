// Marquee is mostly CSS-driven. This file handles dynamic initialization if needed.
document.addEventListener('DOMContentLoaded', function() {
  // Duplicate marquee content for seamless loop
  document.querySelectorAll('.marquee-track').forEach(function(track) {
    if (!track.dataset.duplicated) {
      var content = track.innerHTML;
      track.innerHTML = content + content;
      track.dataset.duplicated = 'true';
    }
  });
});
