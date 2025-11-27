(function () {
  function checkAccess() {
    const verified = localStorage.getItem("captcha_passed");
    if (verified !== "true") {
      localStorage.setItem("origin_page", window.location.href);
      window.location.replace("https://alestore-official.github.io/AleCAPTCHA");
    }
  }

  checkAccess();
  setInterval(checkAccess, 6000);
})();