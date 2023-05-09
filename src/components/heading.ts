import { HeadingData } from '../models/heading-interface'

export const showHeadingContent = (data: HeadingData) => {
	const { title, phonetic, audioSrc } = data
	console.log(title, phonetic, audioSrc)
}
