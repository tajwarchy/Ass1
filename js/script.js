window.addEventListener('load', function() {
    // Get the current URL of the web page
    const currentUrl = window.location.href;

    // Get the last modified date of the web page
    const lastModified = new Date(document.lastModified);

    // Convert the date to a human-readable string
    const lastModifiedDate = lastModified.toLocaleString();

    // Create a new paragraph element for the location and date
    const locationParagraph = document.createElement('p');
    locationParagraph.textContent = `Current URL: ${currentUrl} | Last Modified: ${lastModifiedDate}`;

    // Append the paragraph to the end of the document body
    document.body.appendChild(locationParagraph);
  });