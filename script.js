
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








// POPUP script

function sender() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Check if the provided username and password are incorrect
  if (username !== "Umugozi" || password !== "Kagabo") {
    // Display the error popup
    showPopup("We can't find that username and password. You can reset your password or try again. Keep in mind: You won't be able to see your statements and notices until we unlock your account.");
    return false; // Prevent the form from submitting
  }

  // If the username and password are correct, you can proceed with the form submission
  // Add your form submission logic here if needed

  return true;
}

function showPopup(message) {
  // Create a popup element
  var popup = document.createElement("div");
  popup.className = "popup";

  // Add the message to the popup
  popup.innerHTML = '<span class="close" onclick="closePopup()">&times;</span><p style="color: red;">' + message + '</p>';

  // Append the popup to the body
  document.body.appendChild(popup);
}

function closePopup() {
  // Remove the popup from the DOM
  var popup = document.querySelector(".popup");
  if (popup) {
    popup.remove();
  }
}



