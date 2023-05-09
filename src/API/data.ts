import { wordDoesNotExist, removeError } from '../components/error.js'
import { showHeadingContent } from '../components/heading.js'

const URL_API = 'https://api.dictionaryapi.dev/api/v2/entries/en'

export const getDataFromApi = async (inputValue: string) => {
	try {
		const response = await fetch(URL_API + '/' + inputValue)
		const data = await response.json()
		if (!response.ok) {
			const errorMsg = {
				title: data.title,
				message1: data.message,
				message2: data.resolution,
			}
			wordDoesNotExist(errorMsg)
			throw new Error('something went wrong!')
		}
		removeError()
		const newData = data[0]

		const headingData = {
			title: newData.word,
			phonetic: newData.phonetic,
			audioSrc: newData.phonetics[0].audio
		}
		showHeadingContent(headingData)

	} catch (error) {
		// console.log(error)
	}
}
