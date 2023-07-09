// This code runs when the popup is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Find the "Open URL" button in the popup
  var openButton = document.getElementById('openButton');

  // Add a click event listener to the button
  openButton.addEventListener('click', function() {
    // Open the URL in a new tab
    chrome.tabs.create({ url: 'https://playdesi.net/front-page/' });
  });
});
