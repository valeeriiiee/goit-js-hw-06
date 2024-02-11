const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', function() {
  const inputValue = validationInput.value.trim();
  const desiredLength = parseInt(validationInput.getAttribute('data-length'));

  if (inputValue.length === desiredLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});
