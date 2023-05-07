const errorMsg = document.querySelector('.error-text');
const form = document.querySelector('.form');
const input = document.querySelector('#text');
export const isInputEmpty = (e) => {
    e.preventDefault();
    if (input.value.trim() === '') {
        form.classList.add('invalid');
        errorMsg.style.visibility = 'visible';
        return;
    }
    form.classList.remove('invalid');
    errorMsg.style.visibility = 'hidden';
};
//# sourceMappingURL=input-validation.js.map