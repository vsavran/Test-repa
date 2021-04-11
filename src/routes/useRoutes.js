import {Redirect, Route, Switch} from 'react-router-dom'
import {Auth} from "../pages/Auth/Auth";
import UserPage from "../pages/UserPage/UserPage";
import {Settings} from "../pages/Settings/Settings";

export const useRoutes = (token) => {
	if (token) {
		return (
			<Switch>
				<Route exact path="/" component={UserPage}/>
				<Route path="/settings" component={Settings}/>
				<Redirect to={'/'}/>
			</Switch>
		)
	}
	return <Switch>
		<Route path="/auth" component={Auth}/>
		<Redirect to={'/auth'}/>
	</Switch>

}
