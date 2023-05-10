import { main, wordDoesNotExist } from '../error.js';
export const showHeadingContent = (data) => {
    const heading = document.querySelector('.title-template');
    const headingTemp = heading.content.cloneNode(true);
    const { title, phonetics } = data;
    const srcSound = [];
    const srcPhonetic = [];
    for (const i in phonetics) {
        srcSound.push(phonetics[i].audio);
        srcPhonetic.push(phonetics[i].text);
    }
    const filteredArraySrc = srcSound.filter(item => item !== '');
    const filteredArrayPhonetic = srcPhonetic.filter(item => item !== undefined);
    if (phonetics.length === 0 || filteredArraySrc.length === 0) {
        wordDoesNotExist();
        return;
    }
    headingTemp.querySelector('#keyword-title').textContent = `${title}`;
    headingTemp.querySelector('#pronouncement').textContent = `${filteredArrayPhonetic[0]}`;
    const audioSrc = new Audio(`${filteredArraySrc[0]}`);
    headingTemp.querySelector('button').addEventListener('click', () => {
        audioSrc.play();
    });
    main.appendChild(headingTemp);
};
//# sourceMappingURL=heading.js.map