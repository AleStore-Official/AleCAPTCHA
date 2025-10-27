// controllo.js — blocco accesso diretto
(function () {
  const accessoVerificato = localStorage.getItem("accesso_verificato");

  if (!accessoVerificato) {
    // Reindirizza alla pagina reCAPTCHA se l'utente non è verificato
    window.location.href = "https://alestore-official.github.io/AleCAPTCHA/";
  }
})();