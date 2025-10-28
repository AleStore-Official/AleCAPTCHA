(function () {
  const verificato = localStorage.getItem("access_verified");
  const registrato = localStorage.getItem("utente_verificato");

  // Se l'utente non ha superato reCAPTCHA o non è registrato, reindirizza
  if (verificato !== "true" || registrato !== "true") {
    // Salva la pagina corrente come origine
    localStorage.setItem("origin_page", window.location.href);

    // Reindirizza alla verifica reCAPTCHA
    window.location.href = "https://alestore-official.github.io/AleCAPTCHA";
  }
})();