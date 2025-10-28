(function () {
  // Retrieve verification flags from localStorage
  const accessVerified = localStorage.getItem("access_verified");
  const userRegistered = localStorage.getItem("user_verified");

  // If either flag is missing or false, redirect to ReCAPTCHA
  if (accessVerified !== "true" || userRegistered !== "true") {
    // Save the current page as the origin
    localStorage.setItem("origin_page", window.location.href);

    // Redirect to the ReCAPTCHA verification page
    window.location.href = "https://alestore-official.github.io/AleCAPTCHA";
  }

  // Otherwise, allow access — no action needed
})();