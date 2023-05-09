import { HeadingData} from '../models/heading-interface'
import { main, wordDoesNotExist } from './error.js'
// import { clearContent } from '../components/clear-content.js'



export const showHeadingContent = (data: HeadingData) => {
	const heading: HTMLTemplateElement = document.querySelector('.title-template')!
	const headingTemp = heading.content.cloneNode(true) as HTMLElement
	const { title, phonetics } = data
    const srcSound: string[] = []
    const srcPhonetic: string[] = []
    for (const i in phonetics) {
        srcSound.push(phonetics[i].audio)
        srcPhonetic.push(phonetics[i].text)
    }
    const filteredArray = srcSound.filter(item => item !== '')
    console.log(filteredArray.length === 0)
	// if (phonetics.length === 0 || filteredArray.length === 0) {
    //     return
	// }
    wordDoesNotExist()
    console.log('hmm')
	// clearContent()
    
	headingTemp.querySelector('#keyword-title')!.textContent = `${title}`
    
	headingTemp.querySelector('#pronouncement')!.textContent = `${srcPhonetic[0]}`
	const audioSrc = new Audio(`${filteredArray[0]}`)
	headingTemp.querySelector('button')!.addEventListener('click', () => {
        audioSrc.play()
	})
	main.appendChild(headingTemp)
}
