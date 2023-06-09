import { main } from '../error.js'
import { DataDescription } from '../../models/data-content-interface'

const contentTemplate: HTMLTemplateElement = document.querySelector('.content-template')!

export const showContent = (contentData: DataDescription, addressUrl: string) => {
	if (!main.querySelector('.keyword-title-container')) {
		return
	}
	const contentTemp = contentTemplate.content.cloneNode(true) as HTMLElement
	const ulNoun = contentTemp.querySelector('#noun-ul-list') as HTMLUListElement
	const ulVerb = contentTemp.querySelector('#verb-ul-list') as HTMLUListElement
	const paraElement = contentTemp.querySelector('.synonyms p') as HTMLParagraphElement
	const address = contentTemp.querySelector('#link') as HTMLAnchorElement

	address.setAttribute('href', `${addressUrl}`)
	address.textContent = `${addressUrl}`
	fetchRelevantData(contentData, ulVerb, 'verb', paraElement)
	fetchRelevantData(contentData, ulNoun, 'noun', paraElement)
	main.appendChild(contentTemp)
}

const fetchRelevantData = (
	data: any,
	ul: HTMLUListElement,
	partOfSpeech: string,
	synonymsPara: HTMLParagraphElement
) => {
	for (const index in data) {
		if (data[index].partOfSpeech === partOfSpeech) {
			const textData = data[index].definitions.map((item: any) => item.definition)
			const validData = textData.slice(0, 5)
			const synonyms = data[index].synonyms
			const getFewSynonyms = synonyms.slice(0, 1)

			synonymsPara.textContent = `${getFewSynonyms}`
			if (partOfSpeech === 'verb') {
				const exampleData = data[index].definitions.map((item: any) => item.example)
				exampleData.forEach((item: any, i: any) => {
					if (item == undefined) {
						exampleData[i] = 'Not found any example 🙄'
					}
				})
				const shorterData = exampleData.slice(0, 5)
				for (let i = 0; i < shorterData.length; i++) {
					const quoteElement = document.createElement('q')
					quoteElement.textContent = `${exampleData[i]}`
					const quoteContainer = document.createElement('div')
					quoteContainer.classList.add('quote-container')
					quoteContainer.appendChild(quoteElement)
					const liItem = document.createElement('li')
					liItem.textContent = `${textData[i]}`
					ul?.append(liItem, quoteContainer)
				}
				return
			}
			for (let i = 0; i < validData.length; i++) {
				const liItem = document.createElement('li')
				liItem.textContent = `${textData[i]}`
				ul?.appendChild(liItem)
			}
		}
	}
}
