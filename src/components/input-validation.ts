const errorMsg: HTMLParagraphElement = document.querySelector('.error-text')!
const form: HTMLFormElement = document.querySelector('.form')!
const input: HTMLInputElement = document.querySelector('#text')!

export const isInputEmpty = (e: Event) => {
	e.preventDefault()
	if (input.value.trim() === '') {
		form.classList.add('invalid')
		errorMsg.style.visibility = 'visible'
		return
	}
	form.classList.remove('invalid')
	errorMsg.style.visibility = 'hidden'
}
