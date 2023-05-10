const buttons = document.querySelectorAll('button')
const body: HTMLElement = document.querySelector('body')!
const input: HTMLInputElement = document.querySelector('input')!

export const switchFont = (font: string | null) => {
	switch (font) {
		case 'Sans Serif':
			const sansSerifFont = 'sans-serif'
			test(sansSerifFont)
			break
		case 'Serif':
			test(font)
			break
		case 'Mono':
			const monospace = 'monospace'
			test(monospace)
			break
	}
}
const test = (fontFamily: string) => {
	body.style.fontFamily = `${fontFamily}`
	input.style.fontFamily = `${fontFamily}`
	buttons.forEach(item => (item.style.fontFamily = `${fontFamily}`))
}
