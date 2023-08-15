import throttle from 'lodash.throttle';
const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

let formData = JSON.parse(localStorage.getItem('feedback-form-state')) ?? {};
const { email, message } = form.elements;
email.value = formData.email ?? "";
message.value = formData.message ?? "";

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(formData);
    formData = {};
    form.reset();
    localStorage.removeItem('feedback-form-state');
}
function onFormInput (evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

