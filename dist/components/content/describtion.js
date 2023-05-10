import { main } from '../error.js';
const contentTemplate = document.querySelector('.content-template');
export const showContent = (contentData, addressUrl) => {
    if (!main.querySelector('.keyword-title-container')) {
        return;
    }
    const contentTemp = contentTemplate.content.cloneNode(true);
    const ulNoun = contentTemp.querySelector('#noun-ul-list');
    const ulVerb = contentTemp.querySelector('#verb-ul-list');
    const paraElement = contentTemp.querySelector('.synonyms p');
    const address = contentTemp.querySelector('#link');
    address.setAttribute('href', `${addressUrl}`);
    address.textContent = `${addressUrl}`;
    fetchRelevantData(contentData, ulVerb, 'verb', paraElement);
    fetchRelevantData(contentData, ulNoun, 'noun', paraElement);
    main.appendChild(contentTemp);
};
const fetchRelevantData = (data, ul, partOfSpeech, synonymsPara) => {
    for (const index in data) {
        if (data[index].partOfSpeech === partOfSpeech) {
            const textData = data[index].definitions.map((item) => item.definition);
            const validData = textData.slice(0, 5);
            const synonyms = data[index].synonyms;
            const getFewSynonyms = synonyms.slice(0, 1);
            synonymsPara.textContent = `${getFewSynonyms}`;
            if (partOfSpeech === 'verb') {
                const exampleData = data[index].definitions.map((item) => item.example);
                exampleData.forEach((item, i) => {
                    if (item == undefined) {
                        exampleData[i] = 'Not found any example 🙄';
                    }
                });
                const shorterData = exampleData.slice(0, 5);
                for (let i = 0; i < shorterData.length; i++) {
                    const quoteElement = document.createElement('q');
                    quoteElement.textContent = `${exampleData[i]}`;
                    const quoteContainer = document.createElement('div');
                    quoteContainer.classList.add('quote-container');
                    quoteContainer.appendChild(quoteElement);
                    const liItem = document.createElement('li');
                    liItem.textContent = `${textData[i]}`;
                    ul === null || ul === void 0 ? void 0 : ul.append(liItem, quoteContainer);
                }
                return;
            }
            for (let i = 0; i < validData.length; i++) {
                const liItem = document.createElement('li');
                liItem.textContent = `${textData[i]}`;
                ul === null || ul === void 0 ? void 0 : ul.appendChild(liItem);
            }
        }
    }
};
//# sourceMappingURL=describtion.js.map