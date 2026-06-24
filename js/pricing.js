document.addEventListener('DOMContentLoaded', function() {
  var toggle = document.getElementById('pricing-toggle');
  var monthlyPrices = document.querySelectorAll('.price-monthly');
  var annualPrices = document.querySelectorAll('.price-annual');
  var toggleLabel = document.getElementById('toggle-label');

  if (!toggle) return;

  var isAnnual = false;

  toggle.addEventListener('click', function() {
    isAnnual = !isAnnual;

    monthlyPrices.forEach(function(el) { el.style.display = isAnnual ? 'none' : ''; });
    annualPrices.forEach(function(el) { el.style.display = isAnnual ? '' : 'none'; });

    var knob = toggle.querySelector('.pricing-toggle-knob');
    if (knob) {
      knob.style.transform = isAnnual ? 'translateX(100%)' : 'translateX(0)';
    }

    if (toggleLabel) {
      toggleLabel.textContent = isAnnual ? 'Annual (save 19%)' : 'Monthly';
    }
  });

  // Cost calculator
  var slider = document.getElementById('bills-slider');
  var billsDisplay = document.getElementById('bills-display');
  var costDisplay = document.getElementById('cost-display');

  if (slider) {
    slider.addEventListener('input', function() {
      var bills = parseInt(slider.value);
      if (billsDisplay) billsDisplay.textContent = bills.toLocaleString('en-IN');
      if (costDisplay) {
        // Free plan: unlimited bills at ₹0, Pro at ₹799/mo
        costDisplay.textContent = '₹0';
      }
    });
  }
});
