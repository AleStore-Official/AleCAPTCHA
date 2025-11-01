<script type="module">
  import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

  // Configurazione Supabase
  const supabase = createClient(
    "https://hsyyrcbibohwvbuwxwok.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzeXlyY2JpYm9od3ZidXd4d29rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEwNjE0MDcsImV4cCI6MjA3NjYzNzQwN30.2KsFsGYjwf_cA7Z9oglVthiaE1_jWYuQ6HMMm5UXsyo"
  );

  (async () => {
    const verified = localStorage.getItem("access_verified");
    const registered = localStorage.getItem("user_verified");

    // Controllo localStorage
    if (verified !== "true" || registered !== "true") {
      localStorage.setItem("origin_page", window.location.href);
      window.location.href = "https://alestore-official.github.io/AleCAPTCHA";
      return;
    }

    // Controllo autenticazione Supabase
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (!user || authError) {
      localStorage.setItem("origin_page", window.location.href);
      window.location.href = "https://alestore-official.github.io/AleCAPTCHA";
      return;
    }

    // Controllo presenza nella tabella 'utenti'
    const { data, error } = await supabase
      .from("utenti")
      .select("email")
      .eq("email", user.email)
      .single();

    if (!data || error) {
      await supabase.auth.signOut();
      localStorage.setItem("origin_page", window.location.href);
      window.location.href = "https://alestore-official.github.io/AleCAPTCHA";
    }
  })();
</script>