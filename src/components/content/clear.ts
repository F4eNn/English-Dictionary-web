export const main: HTMLElement = document.querySelector('main')!
export const clearContent = () => {
	main.querySelector('.error-msg-container')?.remove()
	main.querySelector('.keyword-title-container')?.remove()
	main.querySelector('.meaning-container')?.remove()
}
