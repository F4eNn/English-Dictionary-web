import { main } from '../error.js'

const contentTemplate: HTMLTemplateElement = document.querySelector('.content-template')!

// interface DataDescription {
//     partOfSpeech: string
//     definitions: []
// }

export const showFirstPartOfContent = (data: any) => {
	console.log(data)
	const contentTemp = contentTemplate.content.cloneNode(true) as HTMLElement
	const ulNoun = contentTemp.querySelector('#noun-ul-list') as HTMLUListElement
	const ulVerb = contentTemp.querySelector('#verb-ul-list') as HTMLUListElement
	fetchRelevantData(data, ulVerb, 'verb')
	fetchRelevantData(data, ulNoun, 'noun')

	main.appendChild(contentTemp)
}
const fetchRelevantData = (data: any, ul: HTMLElement, partOfSpeech: string) => {
	for (const index in data) {
		if (data[index].partOfSpeech === partOfSpeech) {
			const textData = data[index].definitions.map((item: any) => item.definition)
			const validData = textData.slice(0, 5)

			if (partOfSpeech === 'verb') {
				const exampleData = data[index].definitions.map((item: any) => item.example)
				exampleData.forEach((item: any, i: any) => {
					if (item == undefined) {
						exampleData[i] = 'Not Found 🙄'
					}
				})
				const shorterData = exampleData.slice(0, 5)
				for (let i = 0; i < shorterData.length; i++) {
					const quoteElement = document.createElement('q')
					quoteElement.textContent = `${exampleData[i]}`
					const liItem = document.createElement('li')
					liItem.textContent = `${textData[i]}`
					ul?.append(liItem, quoteElement)
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
