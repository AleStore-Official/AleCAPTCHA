(function () {
  async function checkSession() {
    try {
      const res = await fetch("https://hsyyrcbibohwvbuwxwok.supabase.co/functions/v1/check-session", {
        method: "GET",
        credentials: "include"
      });
      const data = await res.json();

      if (!data.valid) {
        window.location.replace("https://alestore-official.github.io/AleCAPTCHA");
      }
    } catch {
      window.location.replace("https://alestore-official.github.io/AleCAPTCHA");
    }
  }

  checkSession();
})();