
// === Light/Dark Mode Toggle ===
const toggleBtn = document.getElementById('toggle-theme');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// === Counter Game ===
let score = 0;
const scoreDisplay = document.getElementById('score');
document.getElementById('increment-btn').addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = score;
});
document.getElementById('reset-btn').addEventListener('click', () => {
  score = 0;
  scoreDisplay.textContent = score;
});

// === FAQ Section (Collapsible Questions) ===
const questions = document.querySelectorAll('.question');
questions.forEach(q => {
  q.addEventListener('click', () => {
    const answer = q.nextElementSibling;
    answer.classList.toggle('hidden');
  });
});

// === Form Validation ===
const form = document.getElementById('signup-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Clear previous messages
  document.getElementById('form-success').textContent = '';
  document.getElementById('name-error').textContent = '';
  document.getElementById('email-error').textContent = '';
  document.getElementById('password-error').textContent = '';

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  let isValid = true;

  // Name Validation
  if (name.length < 2) {
    document.getElementById('name-error').textContent = 'Name must be at least 2 characters.';
    isValid = false;
  }

  // Email Validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById('email-error').textContent = 'Please enter a valid email.';
    isValid = false;
  }

  // Password Validation
  if (password.length < 6) {
    document.getElementById('password-error').textContent = 'Password must be at least 6 characters.';
    isValid = false;
  }

  // Success Message
  if (isValid) {
    document.getElementById('form-success').textContent = 'Form submitted successfully!';
    form.reset();
  }
});
