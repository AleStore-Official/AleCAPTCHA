(function () {
  const accesso = localStorage.getItem("accesso_verificato");

  // Se non è stato verificato, reindirizza a reCAPTCHA con ritorno garantito
  if (!accesso || accesso !== "true") {
    const currentUrl = encodeURIComponent(window.location.href);
    window.location.replace(`https://alestore-official.github.io/AleCAPTCHA/recaptcha.html?redirect=${currentUrl}`);
  }
})();