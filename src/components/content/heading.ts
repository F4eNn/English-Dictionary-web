import { HeadingData } from '../../models/heading-interface'
import { main, wordDoesNotExist } from '../error.js'

export const showHeadingContent = (data: HeadingData) => {
	const heading: HTMLTemplateElement = document.querySelector('.title-template')!
	const headingTemp = heading.content.cloneNode(true) as HTMLElement
	const { title, phonetics } = data
	const srcSound: string[] = []
	const srcPhonetic: string[] = []
	for (const i in phonetics) {
		srcSound.push(phonetics[i].audio)
		srcPhonetic.push(phonetics[i].text)
	}
	const filteredArraySrc = srcSound.filter(item => item !== '')
	const filteredArrayPhonetic = srcPhonetic.filter(item => item !== undefined)

	if (phonetics.length === 0 || filteredArraySrc.length === 0) {
		wordDoesNotExist()
		return
	}

	headingTemp.querySelector('#keyword-title')!.textContent = `${title}`

	headingTemp.querySelector('#pronouncement')!.textContent = `${filteredArrayPhonetic[0]}`
	const audioSrc = new Audio(`${filteredArraySrc[0]}`)
	headingTemp.querySelector('button')!.addEventListener('click', () => {
		audioSrc.play()
	})
	main.appendChild(headingTemp)
}
