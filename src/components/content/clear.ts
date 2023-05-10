export const main: HTMLElement = document.querySelector('main')!
export const clearContent = () => {
	if (main.children.length > 0) {
		main.children[0].remove()
		return
	}
}
