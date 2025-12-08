(function () {
  async function checkJWT() {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      window.location.replace("https://alestore-official.github.io/AleCAPTCHA");
      return;
    }

    try {
      const res = await fetch("https://hsyyrcbibohwvbuwxwok.supabase.co/functions/v1/check-session", {
        method: "GET",
        headers: { "Authorization": Bearer ${jwt} }
      });

      const data = await res.json();
      if (!data.valid) {
        window.location.replace("https://alestore-official.github.io/AleCAPTCHA");
      }
    } catch {
      window.location.replace("https://alestore-official.github.io/AleCAPTCHA");
    }
  }

  checkJWT();
})();