(function () {
  const verified = localStorage.getItem("captcha_passed");

  if (verified !== "true") {
    localStorage.setItem("origin_page", window.location.href);
    window.location.href = "https://alestore-official.github.io/AleCAPTCHA";
  }
})();