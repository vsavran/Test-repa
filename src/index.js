import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from "react-redux";
import store from './rdx/store'
import {ThemeProvider} from '@material-ui/core/styles';
import {theme} from "./Theme";
import {ContextProviderComponent} from "./Context/ContextProviderComponent";

export const app = <Provider store={store}>
	<ContextProviderComponent>
		<ThemeProvider theme={theme}>
			<Router>
				<React.StrictMode>
					<App/>
				</React.StrictMode>
			</Router>
		</ThemeProvider>
	</ContextProviderComponent>
</Provider>

ReactDOM.render(
	app,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
