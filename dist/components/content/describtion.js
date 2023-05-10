import { main } from '../error.js';
const contentTemplate = document.querySelector('.content-template');
export const showFirstPartOfContent = (data) => {
    console.log(data);
    const contentTemp = contentTemplate.content.cloneNode(true);
    const ulNoun = contentTemp.querySelector('#noun-ul-list');
    const ulVerb = contentTemp.querySelector('#verb-ul-list');
    fetchRelevantData(data, ulVerb, 'verb');
    fetchRelevantData(data, ulNoun, 'noun');
    main.appendChild(contentTemp);
};
const fetchRelevantData = (data, ul, partOfSpeech) => {
    for (const index in data) {
        if (data[index].partOfSpeech === partOfSpeech) {
            const textData = data[index].definitions.map((item) => item.definition);
            const validData = textData.slice(0, 5);
            if (partOfSpeech === 'verb') {
                const exampleData = data[index].definitions.map((item) => item.example);
                exampleData.forEach((item, i) => {
                    if (item == undefined) {
                        exampleData[i] = 'Not Found 🙄';
                    }
                });
                const shorterData = exampleData.slice(0, 5);
                for (let i = 0; i < shorterData.length; i++) {
                    const quoteElement = document.createElement('q');
                    quoteElement.textContent = `${exampleData[i]}`;
                    const liItem = document.createElement('li');
                    liItem.textContent = `${textData[i]}`;
                    ul === null || ul === void 0 ? void 0 : ul.append(liItem, quoteElement);
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