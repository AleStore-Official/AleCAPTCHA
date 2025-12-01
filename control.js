(function () {
  const CHECK_SESSION_URL = `https://hsyyrcbibohwvbuwxwok.supabase.co/functions/v1/check-session`;

  function redirectAndSetOrigin() {
    localStorage.removeItem("captcha_token");
    localStorage.removeItem("captcha_passed");
    
    localStorage.setItem("origin_page", window.location.href);
    
    window.location.replace("https://alestore-official.github.io/AleCAPTCHA");
  }

  async function checkCookieSession() {
    try {
      const response = await fetch(CHECK_SESSION_URL, { 
        method: "POST"
      });

      const data = await response.json();

      if (response.ok && data.valid) {
        console.log("CAPTCHA session verified and consumed. Access granted.");
      } else {
        redirectAndSetOrigin();
      }

    } catch (error) {
      console.error("Network error during session verification:", error);
      redirectAndSetOrigin();
    }
  }

  checkCookieSession();
})();
