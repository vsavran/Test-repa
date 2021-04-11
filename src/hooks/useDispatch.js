import {bindActionCreators} from "redux";
import {useDispatch} from "react-redux";

export const useDispatchHook = (actions) => {
	return bindActionCreators(actions, useDispatch())
}
