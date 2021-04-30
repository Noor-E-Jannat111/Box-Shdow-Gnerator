// Select Element
const inputs = document.querySelectorAll('input');
const inset = document.querySelector(`input[type="checkbox"]`);

// Set Checkbox Value
inset.addEventListener('change', () =>
  inset.checked ? (inset.value = 'inset') : (inset.value = '')
);

// Handle Shadow
function handleShadow() {
  const suffix = this.dataset.suffix || '';

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

// Handle CSS
function handleCSS() {
  const suffix = this.dataset.suffix || '';
  // Select Element
  const allSpan = document.querySelectorAll(`span[name="${this.name}"]`);
  allSpan.forEach((span) => (span.textContent = this.value + suffix));
}

// Event Listeners
inputs.forEach((input) => input.addEventListener('change', handleShadow));
inputs.forEach((input) => input.addEventListener('mousemove', handleShadow));
inputs.forEach((input) => input.addEventListener('change', handleCSS));
inputs.forEach((input) => input.addEventListener('mousemove', handleCSS));

// Change InnerHTML of Copy When Value is Change
const copy = document.querySelector('.copy');

inputs.forEach((input) =>
  input.addEventListener('change', () => (copy.innerHTML = 'Copy CSS'))
);

// Copy Code to Clipboard
const clipboard = new ClipboardJS('.copy');
clipboard.on('success', function (e) {
  copy.innerHTML = 'Copied';

  e.clearSelection();
});

// Current Year
const year = document.querySelector('.year');
const currentYear = new Date().getFullYear();

year.textContent = currentYear;
