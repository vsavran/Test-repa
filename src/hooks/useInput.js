import {useState} from "react";

export const useInput = (schema) => {
	const [value, setValue] = useState(schema)

	const onChange = (e) => {
		setValue(prev => ({...prev, [e.target.name]: e.target.value}))
	}
	const clearInput = () => {
		setValue(schema)
	}

	return {value, onChange, clearInput}
}
