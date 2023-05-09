var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { wordDoesNotExist } from '../components/error.js';
import { showHeadingContent } from '../components/heading.js';
import { clearContent } from '../components/clear-content.js';
const URL_API = 'https://api.dictionaryapi.dev/api/v2/entries/en';
export let errorMsg;
export const getDataFromApi = (inputValue) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(URL_API + '/' + inputValue);
        const data = yield response.json();
        if (!response.ok) {
            errorMsg = [
                {
                    title: data.title,
                    message1: data.message,
                    message2: data.resolution,
                },
            ];
            console.log('test');
            clearContent();
            wordDoesNotExist();
            throw new Error('something went wrong!');
        }
        const newData = data[0];
        const headingData = {
            title: newData.word,
            phonetics: newData.phonetics,
        };
        console.log(data);
        showHeadingContent(headingData);
    }
    catch (error) {
        console.error(error);
    }
});
//# sourceMappingURL=data.js.map