const form = document.getElementById('registration-form');
const status = document.getElementById('form-status');
const resume = document.getElementById('resume');
const uploadName = document.getElementById('upload-name');
resume.addEventListener('change', () => {
  const file = resume.files[0];
  if (!file) { uploadName.textContent = 'Натисни, щоб вибрати файл'; return; }
  if (file.size > 10 * 1024 * 1024) {
    resume.value = '';
    uploadName.textContent = 'Натисни, щоб вибрати файл';
    status.textContent = 'Файл має бути не більшим за 10 МБ.';
    return;
  }
  uploadName.textContent = file.name;
  status.textContent = '';
});
form.addEventListener('submit', event => {
  event.preventDefault();
  status.textContent = 'Дані перевірено. Демонстраційна реєстрація успішна!';
});
form.addEventListener('input', () => { status.textContent = ''; });
