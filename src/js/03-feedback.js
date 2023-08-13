import throttle from 'lodash.throttle';
const throttle = require('lodash.throttle');

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('textarea[name="message"]'),
    emailInput: document.querySelector('input[name="email"]')
};

const formData = {};
// console.log(formData);

populateFormOutput()

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));



function onFormSubmit(evt) {
    evt.preventDefault();
    // console.log('Send form');
    evt.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');

    
}

function onFormInput (evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    // console.log(formData);
}


function populateFormOutput() {
    const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
    
    if (savedData) {
        console.log(savedData);
        refs.textarea.value = savedData.message;
        refs.emailInput.value = savedData.email;
        
    }
}

