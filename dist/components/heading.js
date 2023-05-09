import { main, wordDoesNotExist } from './error.js';
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
    const filteredArray = srcSound.filter(item => item !== '');
    console.log(filteredArray.length === 0);
    wordDoesNotExist();
    console.log('hmm');
    headingTemp.querySelector('#keyword-title').textContent = `${title}`;
    headingTemp.querySelector('#pronouncement').textContent = `${srcPhonetic[0]}`;
    const audioSrc = new Audio(`${filteredArray[0]}`);
    headingTemp.querySelector('button').addEventListener('click', () => {
        audioSrc.play();
    });
    main.appendChild(headingTemp);
};
//# sourceMappingURL=heading.js.map