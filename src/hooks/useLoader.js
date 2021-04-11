import {useState} from "react";
import hookStyles from './hookStyles.module.css'

export const useLoader = () => {
	const [isShown, setIsShown] = useState(false);

	const handleToggleLoader = (action) => {
		const actionType = {
			'show': () => setIsShown(true),
			'hide': () => setIsShown(false)
		}
		actionType[action]()
	}
	const LoaderComponent = () => {
		if (isShown) {
			return <div className={hookStyles.loaderContainer}>
				<div className={hookStyles.loaderLayout}/>
				<div className={hookStyles.loader}>Loading...</div>
			</div>
		}
		return null
	}

	return {
		handleToggleLoader,
		LoaderComponent
	}
}
