/**
 * WhatsApp geo-detection
 * Detects user country via IP and routes WhatsApp links to the correct number.
 * Nepal  → +977 982-5120230
 * India / default → +91-9103370117
 */
(function () {
  var NUMBERS = {
    NP: '9779825120230',
    IN: '919103370117',
  };
  var DEFAULT_NUMBER = NUMBERS.IN;
  var CACHE_KEY = 'wa_country';
  var CACHE_TTL = 86400000; // 24 hours

  function getNumber(countryCode) {
    return NUMBERS[countryCode] || DEFAULT_NUMBER;
  }

  function updateLinks(number) {
    var links = document.querySelectorAll('[data-whatsapp-link]');
    links.forEach(function (el) {
      var message = el.getAttribute('data-whatsapp-message') || '';
      var encoded = encodeURIComponent(message);
      el.href = 'https://wa.me/' + number + (encoded ? '?text=' + encoded : '');
    });
  }

  function detectAndUpdate() {
    // Check localStorage cache first
    try {
      var cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        var data = JSON.parse(cached);
        if (data.ts && Date.now() - data.ts < CACHE_TTL) {
          updateLinks(getNumber(data.country));
          return;
        }
      }
    } catch (e) {
      // localStorage unavailable or corrupt — continue to fetch
    }

    // Fetch country from ipapi.co
    fetch('https://ipapi.co/json/')
      .then(function (res) { return res.json(); })
      .then(function (data) {
        var country = data.country_code || '';
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({ country: country, ts: Date.now() }));
        } catch (e) { /* ignore */ }
        updateLinks(getNumber(country));
      })
      .catch(function () {
        // On failure, keep default number (India)
        updateLinks(DEFAULT_NUMBER);
      });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', detectAndUpdate);
  } else {
    detectAndUpdate();
  }
})();
