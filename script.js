
function labelClick(inputId) {
    var label = document.querySelector('label[for="' + inputId + '"]');
    label.style.fontSize = '15px'; /* Adjust the font size as needed */
    label.style.transform = 'translateY(-15px)'; /* Adjust the upward movement as needed */
  }
  
  // Reset the label styles when the input is focused
  document.querySelectorAll('input').forEach(function (input) {
    input.addEventListener('focus', function () {
      var label = document.querySelector('label[for="' + input.id + '"]');
      label.style.fontSize = '15px'; /* Adjust the font size as needed */
      label.style.transform = 'translateY(-15px)'; /* Adjust the upward movement as needed */
    });
  
    // Reset the label styles when the input loses focus
    input.addEventListener('blur', function () {
      var label = document.querySelector('label[for="' + input.id + '"]');
      if (!input.value) {
        label.style.fontSize = ''; // Reset to the default font size
        label.style.transform = ''; // Reset to the default position
      }
    });
  });


