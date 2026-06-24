function toggleAccordion(button) {
  var item = button.closest('[data-accordion-item]');
  var content = item.querySelector('.accordion-content');
  var isOpen = item.classList.contains('accordion-item-open');

  // Close all siblings
  var parent = item.parentElement;
  parent.querySelectorAll('[data-accordion-item]').forEach(function(sibling) {
    sibling.classList.remove('accordion-item-open');
    sibling.querySelector('.accordion-content').style.maxHeight = '0';
  });

  // Open if was closed
  if (!isOpen) {
    item.classList.add('accordion-item-open');
    content.style.maxHeight = content.scrollHeight + 'px';
  }
}
