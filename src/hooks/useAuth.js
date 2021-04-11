import {useEffect, useState} from "react";
import {useDispatchHook} from "./useDispatch";
import {logInAction, logOutAction} from '../rdx/UserModule/actions'

export const useAuth = () => {
	const [isReady, setIsReady] = useState(false)
	const {logInDispatch, logOutDispatch} = useDispatchHook({
		logInDispatch: logInAction,
		logOutDispatch: logOutAction
	})

	const logIn = (data) => {
		logInDispatch(data)
		localStorage.setItem('userData', JSON.stringify(data))
	}
	const logOut = () => {
		logOutDispatch()
		localStorage.removeItem('userData')
	}

	useEffect(() => {
		const userData = JSON.parse(localStorage.getItem('userData'))
		if (userData) {
			logIn({token: userData.token, uid: userData.uid})
		}
		setIsReady(true)
	}, [])
	return {isReady, logIn, logOut}
}
