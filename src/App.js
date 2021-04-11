import {useRoutes} from "./routes/useRoutes";
import {Header} from "./components/header/Header";
import {useContext} from "react";
import {Context} from "./Context/ContextProviderComponent";
import {Container} from "@material-ui/core";

function App() {
	const {isReady, isSignIn, handleClickHeaderBtn, token} = useContext(Context)
	const routes = useRoutes(token)

	return (
		<div>
			<div>learn react</div>
			<Header isSignIn={isSignIn} handleClickHeaderBtn={handleClickHeaderBtn}/>
			<Container>
				{isReady && routes}
			</Container>
		</div>
	);
}

export default App;
