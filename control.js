export function blockIfCaptchaFailed() {
  const captchaPassed = localStorage.getItem("captcha_passed") === "true";

  if (!captchaPassed) {
    window.location.href = "https://alestore-official.github.io/AleCAPTCHA";
  }
}