(function () {
  const verified = localStorage.getItem("access_verified");
  const registered = localStorage.getItem("user_verified");

  if (verified === "true" && registered === "true") {
    const origin = localStorage.getItem("origin_page") || "https://alestore-official.github.io/AleCAPTCHA";
    window.location.href = origin;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const confirmButton = document.getElementById("confirm-access");
    if (confirmButton) {
      confirmButton.addEventListener("click", () => {
        localStorage.setItem("access_verified", "true");
        const origin = localStorage.getItem("origin_page") || "https://alestore-official.github.io/AleRegister";
        window.location.href = origin;
      });
    }
  });
})();
