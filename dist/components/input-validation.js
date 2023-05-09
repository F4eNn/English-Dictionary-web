import { getDataFromApi } from '../API/data.js';
const errorMsg = document.querySelector('.error-text');
const form = document.querySelector('.form');
const input = document.querySelector('#text');
export const isInputEmpty = (e) => {
    e.preventDefault();
    const inputValue = input.value;
    if (input.value.trim() === '') {
        form.classList.add('invalid');
        errorMsg.style.visibility = 'visible';
        return;
    }
    form.classList.remove('invalid');
    errorMsg.style.visibility = 'hidden';
    getDataFromApi(inputValue);
};
//# sourceMappingURL=input-validation.js.map