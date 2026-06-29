document.addEventListener('DOMContentLoaded', function() {

  // Generic AJAX form handler
  function handleForm(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      var btn = form.querySelector('button[type="submit"]');
      var originalText = btn.textContent;
      btn.textContent = 'Submitting...';
      btn.disabled = true;

      var formData = new FormData(form);

      fetch(form.getAttribute('action'), {
        method: 'POST',
        body: formData
      })
      .then(function(res) { return res.json(); })
      .then(function(data) {
        if (data.success) {
          form.innerHTML = '<div class="text-center py-8">' +
            '<div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-leaf/20 text-leaf">' +
              '<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>' +
            '</div>' +
            '<p class="text-lg font-semibold text-espresso">Thank you!</p>' +
            '<p class="text-sm text-espresso/60 mt-1">We\'ll get back to you shortly.</p>' +
          '</div>';
        } else {
          btn.textContent = originalText;
          btn.disabled = false;
          showError(form, data.error || 'Something went wrong. Please try again.');
        }
      })
      .catch(function() {
        btn.textContent = originalText;
        btn.disabled = false;
        showError(form, 'Network error. Please check your connection and try again.');
      });
    });
  }

  function showError(form, message) {
    // Remove existing error
    var existing = form.querySelector('.form-error');
    if (existing) existing.remove();

    var errorDiv = document.createElement('p');
    errorDiv.className = 'form-error text-sm text-red-500 mt-2';
    errorDiv.textContent = message;
    var btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.parentNode.insertBefore(errorDiv, btn);
    } else {
      form.appendChild(errorDiv);
    }
  }

  // Attach to all forms with data-ajax-form attribute
  document.querySelectorAll('form[data-ajax-form]').forEach(handleForm);
});
