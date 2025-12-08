(function () {
  const EXPIRATION_MS = 24 * 60 * 60 * 1000;

  function clearStorageAndRedirect() {
    localStorage.clear();
    window.location.replace("https://alestore-official.github.io/AleCAPTCHA");
  }

  async function checkJWT() {
    const jwt = localStorage.getItem("jwt");
    const savedAt = localStorage.getItem("jwt_saved_at");

    if (!jwt || !savedAt) {
      clearStorageAndRedirect();
      return;
    }

    const now = Date.now();
    if (now - parseInt(savedAt, 10) > EXPIRATION_MS) {
      clearStorageAndRedirect();
      return;
    }

    try {
      const res = await fetch("https://hsyyrcbibohwvbuwxwok.supabase.co/functions/v1/check-session", {
        method: "GET",
        headers: { "Authorization": `Bearer ${jwt}` }
      });

      const data = await res.json();
      if (!data.valid) {
        clearStorageAndRedirect();
      }
    } catch {
      clearStorageAndRedirect();
    }
  }

  checkJWT();
})();