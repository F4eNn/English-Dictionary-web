const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');
const input = document.querySelector('input');
export const switchFont = (font) => {
    switch (font) {
        case 'Sans Serif':
            const sansSerifFont = 'sans-serif';
            test(sansSerifFont);
            break;
        case 'Serif':
            test(font);
            break;
        case 'Mono':
            const monospace = 'monospace';
            test(monospace);
            break;
    }
};
const test = (fontFamily) => {
    body.style.fontFamily = `${fontFamily}`;
    input.style.fontFamily = `${fontFamily}`;
    buttons.forEach(item => (item.style.fontFamily = `${fontFamily}`));
};
//# sourceMappingURL=switch-font.js.map