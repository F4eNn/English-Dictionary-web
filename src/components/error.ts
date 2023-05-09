import { errorMsg } from '../API/data.js'
export const main: HTMLElement = document.querySelector('main')!
const errorTemplate: HTMLTemplateElement = document.querySelector('.error-template')!

export const wordDoesNotExist = () => {
	const { title, message1, message2 } = errorMsg[0]

	const errorTemp = errorTemplate.content.cloneNode(true) as HTMLElement
	errorTemp.querySelector('h3')!.textContent = `${title}`
	errorTemp.querySelector('h2')!.textContent = `😥`
	errorTemp.querySelector('p')!.textContent = `${message1}${message2}`
	if (main.children.length === 0) {
		main.appendChild(errorTemp)
	}
}
// export const removeError = () => {
// 	if (main.children.length === 1) {
// 		main.children[0].remove()
// 		return
// 	}
// }
