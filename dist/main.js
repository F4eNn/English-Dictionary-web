import { toggleThemePreference } from './components/theme-preference.js';
const btnTest = document.querySelector('.click');
btnTest.addEventListener('click', toggleThemePreference);
const dropdownBtn = document.querySelector('button');
const contentBtns = document.querySelectorAll('.option-btn');
const content = document.querySelector('.content');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8"><path fill="none" stroke="#A445ED" stroke-width="1.5" d="m1 1 6 6 6-6"/></svg>`;
contentBtns.forEach(item => {
    const getRelevantFont = (e) => {
        dropdownBtn.innerHTML = e.target.textContent + svg;
        if (e.target === item) {
            content.classList.add('hide-content');
        }
    };
    item.addEventListener('click', getRelevantFont);
});
dropdownBtn.addEventListener('click', () => {
    content.classList.remove('hide-content');
});
document.addEventListener('click', (e) => {
    const isClosest = e.target.closest('.content');
    const isNotDropdownBtn = e.target.closest('.dropdown');
    if (!isClosest && !isNotDropdownBtn) {
        content.classList.add('hide-content');
        return;
    }
});
//# sourceMappingURL=main.js.map