import { ErrorMsg } from '../models/error-msg-interface'

const main: HTMLElement = document.querySelector('main')!
const errorTemplate: HTMLTemplateElement = document.querySelector('.error-template')!

export const wordDoesNotExist = (errorMsg: ErrorMsg) => {
	const { title, message1, message2 } = errorMsg

	const errorTemp = errorTemplate.content.cloneNode(true) as HTMLElement
	errorTemp.querySelector('h3')!.textContent = `${title}`
	errorTemp.querySelector('h2')!.textContent = `😥`
	errorTemp.querySelector('p')!.textContent = `${message1}${message2}`
	if (main.children.length === 0) {
		main.appendChild(errorTemp)
	}
}
export const removeError = () => {
	if (main.children.length === 1) {
		main.children[0].remove()
		return
	}
}
