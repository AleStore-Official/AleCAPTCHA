<script>
  (function () {
    const now = Date.now();
    const clearKey = "__ls_last_clear__";
    const lastClear = localStorage.getItem(clearKey);
    const sevenDays = 7 * 24 * 60 * 60 * 1000;

    // Se sono passati più di 7 giorni, cancella tutto il localStorage
    if (!lastClear || now - parseInt(lastClear) > sevenDays) {
      localStorage.clear();
      localStorage.setItem(clearKey, now.toString());
    }

    const verified = localStorage.getItem("access_verified");
    const registered = localStorage.getItem("user_verified");

    if (verified !== "true" || registered !== "true") {
      localStorage.setItem("origin_page", window.location.href);
      window.location.href = "https://alestore-official.github.io/AleCAPTCHA";
    }
  })();
</script>