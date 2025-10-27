(function () {
  const accesso = localStorage.getItem("accesso_verificato");

  if (!accesso || accesso !== "true") {
    const currentUrl = encodeURIComponent(window.location.href);
    const recaptchaUrl = `https://alestore-official.github.io/AleCAPTCHA/recaptcha.html?redirect=${currentUrl}`;
    window.location.href = recaptchaUrl;
  }
})();