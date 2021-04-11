export const getNumberFromString =(string)=>{
	const numberPattern = /\d+/g;
	return string.match( numberPattern )?.join('')
}
