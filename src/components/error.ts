export const main: HTMLElement = document.querySelector('main')!
const errorTemplate: HTMLTemplateElement = document.querySelector('.error-template')!
const noDefinitionsFound = 'No Definitions Found'
const textMsg =
	"Sorry pal, we couldn't find definitions for the word you were looking for.You can try the search again at later time or head to the web instead."
export const wordDoesNotExist = () => {

	const errorTemp = errorTemplate.content.cloneNode(true) as HTMLElement
	errorTemp.querySelector('h3')!.textContent = `${noDefinitionsFound}`
	errorTemp.querySelector('h2')!.textContent = `😥`
	errorTemp.querySelector('p')!.textContent = `${textMsg}`
	if (main.children.length === 0) {
		main.appendChild(errorTemp)
	}
}
