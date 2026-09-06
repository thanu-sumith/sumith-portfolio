document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const fields = new FormData(form);
  const name = String(fields.get('name')).trim();
  const email = String(fields.get('email')).trim();
  const message = String(fields.get('message')).trim();
  if (!name || !message) {
    document.getElementById('form-status').textContent = 'Please include your name and a message.';
    return;
  }
  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
  window.location.href = `mailto:thanugundlasumithreddy@gmail.com?subject=${subject}&body=${body}`;
  document.getElementById('form-status').textContent = 'Your email draft is ready to open. Review it and send it from your email app.';
});
