var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { wordDoesNotExist, removeError } from '../components/error.js';
import { showHeadingContent } from '../components/heading.js';
const URL_API = 'https://api.dictionaryapi.dev/api/v2/entries/en';
export const getDataFromApi = (inputValue) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(URL_API + '/' + inputValue);
        const data = yield response.json();
        if (!response.ok) {
            const errorMsg = {
                title: data.title,
                message1: data.message,
                message2: data.resolution,
            };
            wordDoesNotExist(errorMsg);
            throw new Error('something went wrong!');
        }
        removeError();
        const newData = data[0];
        const headingData = {
            title: newData.word,
            phonetic: newData.phonetic,
            audioSrc: newData.phonetics[0].audio
        };
        showHeadingContent(headingData);
    }
    catch (error) {
    }
});
//# sourceMappingURL=data.js.map