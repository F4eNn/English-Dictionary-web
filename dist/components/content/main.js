const contentTemplate = document.querySelector('.content-template');
import { main } from '../error.js';
export const showFirstPartOfContent = (data) => {
    console.log(data);
    console.log(Object.hasOwn(data, 'partOfSpeech'));
    const contentTemp = contentTemplate.content.cloneNode(true);
    main.appendChild(contentTemp);
};
//# sourceMappingURL=main.js.map