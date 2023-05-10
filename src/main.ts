import { isInputEmpty } from './components/input-validation.js'
import { toggleThemePreference, isDarkOrLightMode } from './components/theme-preference.js'
import { switchFont } from './components/content/fonts/switch-font.js'

const inputBtn: HTMLButtonElement = document.querySelector('#input-btn')!
const switchModeBtn: HTMLButtonElement = document.querySelector('#switch-mode')!

switchModeBtn.addEventListener('click', toggleThemePreference)
isDarkOrLightMode()
inputBtn.addEventListener('click', isInputEmpty)

const dropdownBtn: HTMLButtonElement = document.querySelector('button')!
const content: HTMLUListElement = document.querySelector('.content')!
const contentBtns = document.querySelectorAll('.option-btn')

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8"><path fill="none" stroke="#A445ED" stroke-width="1.5" d="m1 1 6 6 6-6"/></svg>`

contentBtns.forEach(item => {
	const getRelevantFont = (e: Event) => {
		if (e.target instanceof HTMLElement) {
			dropdownBtn.innerHTML = e.target.textContent + svg
		}
		if (e.target === item) {
			content.classList.add('hide-content')
		}
		const relevantFont = item.textContent 
		switchFont(relevantFont)
	}
	item.addEventListener('click', getRelevantFont)
})

dropdownBtn.addEventListener('click', () => {
	content.classList.toggle('hide-content')
})

document.addEventListener('click', (e: MouseEvent) => {
	const isClosest = (e.target as HTMLElement).closest('.content')
	const isDropdown = (e.target as HTMLElement).closest('.dropdown')
	if (!isClosest && !isDropdown && !content.classList.contains('hide-content')) {
		content.classList.add('hide-content')
	}
})
