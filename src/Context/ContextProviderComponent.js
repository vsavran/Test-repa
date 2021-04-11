import {createContext} from "react";
import {useState} from "react";
import {useAuth} from "../hooks/useAuth";
import {useSelector} from "react-redux";
import userReselect from '../Reselect/user.reselect'
import roomReselect from '../Reselect/room.reselect'
import {useAlert} from "../hooks/useAlert";
import {useLoader} from "../hooks/useLoader";

export const Context = createContext({})

export const ContextProviderComponent = ({children}) => {
	const [isSignIn, setIsSignIn] = useState(true)
	const token = useSelector(userReselect.getToken)
	const roomId = useSelector(roomReselect.getRoomId)
	const participantId = useSelector(roomReselect.getParticipantId)
	const {isReady, logOut, logIn} = useAuth()
	const {AlertComponent, handleShowAlert} = useAlert()
	const {LoaderComponent, handleToggleLoader} = useLoader()

	const handleClickHeaderBtn = () => {
		if (token) {
			return logOut()
		}
		setIsSignIn(prev => !prev)
	}
	return (
		<Context.Provider value={{
			isReady,
			isSignIn,
			token,
			handleClickHeaderBtn,
			logIn,
			handleShowAlert,
			handleToggleLoader,
			logOut,
			setIsSignIn,
			roomId,
			participantId
		}}>
			<AlertComponent/>
			<LoaderComponent/>
			{children}
		</Context.Provider>
	)
}
