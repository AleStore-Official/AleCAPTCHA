(function () {
  const verified = localStorage.getItem("access_verified");

  if (!verified) {
    // Save the current page as origin
    localStorage.setItem("origin_page", window.location.href);

    // Redirect to reCAPTCHA verification
    window.location.href = "https://alestore-official.github.io/AleCAPTCHA";
  }
})();