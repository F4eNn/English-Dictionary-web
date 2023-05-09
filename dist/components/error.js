const main = document.querySelector('main');
const errorTemplate = document.querySelector('.error-template');
export const wordDoesNotExist = (errorMsg) => {
    const { title, message1, message2 } = errorMsg;
    const errorTemp = errorTemplate.content.cloneNode(true);
    errorTemp.querySelector('h3').textContent = `${title}`;
    errorTemp.querySelector('h2').textContent = `😥`;
    errorTemp.querySelector('p').textContent = `${message1}${message2}`;
    if (main.children.length === 0) {
        main.appendChild(errorTemp);
    }
};
export const removeError = () => {
    if (main.children.length === 1) {
        main.children[0].remove();
        return;
    }
};
//# sourceMappingURL=error.js.map