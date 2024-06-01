import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  for (const [key, value] of Object.entries(JSON.parse(savedData))) {
    form.elements[key].value = value;
  }
}

function onInput(event) {
  if (!event.currentTarget) {
    return;
  }
  const formData = new FormData(event.currentTarget);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(Object.fromEntries(formData))
  );
}

form.addEventListener('input', throttle(onInput, 500));

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  console.log(Object.fromEntries(formData));

  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
}

form.addEventListener('submit', onFormSubmit);
