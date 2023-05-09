import { wordDoesNotExist } from '../components/error.js'
import { showHeadingContent } from '../components/heading.js'
import { ErrorMsg } from '../models/error-msg-interface'
import { clearContent } from '../components/clear-content.js'
const URL_API = 'https://api.dictionaryapi.dev/api/v2/entries/en'
export let errorMsg: ErrorMsg[]

export const getDataFromApi = async (inputValue: string) => {
	try {
		const response = await fetch(URL_API + '/' + inputValue)

		const data = await response.json()
		if (!response.ok) {
			errorMsg = [
				{
					title: data.title,
					message1: data.message,
					message2: data.resolution,
				},
			]
			console.log('test')
			clearContent()
			wordDoesNotExist()
			throw new Error('something went wrong!')
		}
		const newData = data[0]
		const headingData = {
			title: newData.word,
			phonetics: newData.phonetics,
		}
		console.log(data)
		showHeadingContent(headingData)
	} catch (error) {
		console.error(error)
	}
}
