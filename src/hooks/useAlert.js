import Alert from '@material-ui/lab/Alert';
import {useState} from "react";

export const useAlert = () => {
	const [type, setType] = useState('error')
	const [text, setText] = useState('')
	const [isShown, setIsShown] = useState(false)

	const alertTypes = {
		"error": <Alert severity="error">{text}</Alert>,
		"warning": <Alert severity="warning">{text}</Alert>,
		"info": <Alert severity="info">{text}</Alert>,
		"success": <Alert severity="success">{text}</Alert>
	}
	const AlertComponent = () => {
		if (isShown) {
			return (
				<div style={{position:'absolute', width:'100%', zIndex:10}}>
					{alertTypes[type]}
				</div>
			)
		}

		return null
	}
	const handleShowAlert = (data, time = 3000) => {
		console.log('{data}')
		setIsShown(true)
		setType(data.type)
		setText(data.text)
		setTimeout(() => setIsShown(false), time)
	}
	return {
		AlertComponent,
		handleShowAlert
	}
}
