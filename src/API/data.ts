import { wordDoesNotExist } from '../components/error.js'
import { showHeadingContent } from '../components/content/heading.js'
import { clearContent } from '../components/content/clear.js'
import { showFirstPartOfContent } from '../components/content/describtion.js'
const URL_API = 'https://api.dictionaryapi.dev/api/v2/entries/en'

export const getDataFromApi = async (inputValue: string) => {
	try {
		const response = await fetch(URL_API + '/' + inputValue)

		const data = await response.json()
		if (!response.ok) {
			clearContent()
			wordDoesNotExist()
			throw new Error('something went wrong!')
		}
		const headingData = {
			title: data[0].word,
			phonetics: data[0].phonetics,
		}
		clearContent()
		const contentData = data[0].meanings
		const addressUrl = data[0].sourceUrls[0]
		showHeadingContent(headingData)
		showFirstPartOfContent(contentData, addressUrl)
	} catch (error) {
		console.error(error)
	}
}
