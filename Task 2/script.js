document.addEventListener("DOMContentLoaded", function () {
  generateCaptcha();

  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const userInput = document.getElementById("captchaInput").value;
    const generatedCaptcha = document.getElementById("captcha").innerText;

    if (userInput === generatedCaptcha) {
      alert("Captcha verification successful. Login granted!");
    } else {
      alert("Captcha verification failed. Please try again.");
      generateCaptcha();
    }
  });
});

function generateCaptcha() {
  const captcha = generateRandomString(6); // You can adjust the captcha length here
  document.getElementById("captcha").innerText = captcha;
}

function generateRandomString(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}
