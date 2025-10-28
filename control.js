(function () {
  const verified = localStorage.getItem("access_verified");
  const registered = localStorage.getItem("utente_registrato");

  if (!verified || registered !== "true") {
    localStorage.setItem("origin_page", window.location.href);
    window.location.href = "https://alestore-official.github.io/AleCAPTCHA";
  }
})();