(function () {
  const verified = localStorage.getItem("captcha_passed");
  const token = localStorage.getItem("captcha_token");

  if (!(verified === "true" && token && token.trim() !== "")) {
    localStorage.setItem("origin_page", window.location.href);
    window.location.replace("https://alestore-official.github.io/AleCAPTCHA");
  }
})();