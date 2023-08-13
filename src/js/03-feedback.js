import throttle from 'lodash.throttle';
const throttle = require('lodash.throttle');

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('.feedback-form input')
};
refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.input.addEventListener('input', throttle(onEmailInput, 500));

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
    localStorage.removeItem('feedback-email-state');
}

function onTextareaInput(evt) {
    const message = evt.target.value;
    localStorage.setItem('feedback-form-state', message);
}

function onEmailInput(evt) {
    const emailName = evt.target.value;
    localStorage.setItem('feedback-email-state', JSON.stringify(emailName));
}

function populateTextarea() {
    const savedMessage = localStorage.getItem('feedback-form-state');
    if (savedMessage) {
        console.log(savedMessage);
        refs.textarea.value = savedMessage;
    }
}

function populateEmailInput() {
    const savedEmailName = localStorage.getItem('feedback-email-state');
    if (savedEmailName) {
        console.log(savedEmailName);
        refs.input.value = savedEmailName;
        
    }
}

