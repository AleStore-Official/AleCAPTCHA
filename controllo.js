(function () {
  const accesso = localStorage.getItem("accesso_verificato");

  if (!accesso || accesso !== "true") {
    window.location.href = "https://alestore-official.github.io/AleCAPTCHA/recaptcha.html";
  }
})();