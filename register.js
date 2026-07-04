function generateCaptcha() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById('captchaCode').textContent = captcha;
}

document.getElementById('refreshCaptcha').addEventListener('click', generateCaptcha);

document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const enteredCaptcha = document.getElementById('enteredCaptcha').value.trim();
  const actualCaptcha = document.getElementById('captchaCode').textContent.trim();

  if (enteredCaptcha !== actualCaptcha) {
    alert('Incorrect captcha. Please try again.');
    generateCaptcha();
    return;
  }

  alert('Registration successful!');
  this.reset();
  generateCaptcha();
});

window.onload = generateCaptcha;
