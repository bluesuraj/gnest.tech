document.addEventListener('DOMContentLoaded', function() {
  // Pilot form
  var pilotForm = document.getElementById('pilot-form');
  if (pilotForm) {
    pilotForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var formData = new FormData(pilotForm);
      // Client-side only: show success
      pilotForm.innerHTML = '<div class="text-center py-8"><div class="text-4xl mb-3">✓</div><p class="text-lg font-semibold text-espresso">You\'re on the list!</p><p class="text-sm text-espresso/60 mt-1">We\'ll reach out on WhatsApp within 24 hours.</p></div>';
    });
  }

  // Waitlist forms (coming soon pages)
  document.querySelectorAll('.waitlist-form').forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      form.innerHTML = '<div class="text-center py-4"><p class="text-lg font-semibold text-espresso">Thanks! We\'ll notify you when it launches.</p></div>';
    });
  });
});
