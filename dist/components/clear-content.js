export const main = document.querySelector('main');
export const clearContent = () => {
    console.log(main.children.length);
    if (main.children.length > 0) {
        main.children[0].remove();
        return;
    }
};
//# sourceMappingURL=clear-content.js.map