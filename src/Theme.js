import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

export const theme = createMuiTheme({
	palette: {
		primary: {
			main: purple[500],
			white:"#fff"
		},
		secondary: {
			main: green[500],
			btn: '#ffc400'
		},

	},
	fontSizes: {
		title:26
	},
	fontWeight:{
		a:400,
		b:500,
		c:600,
		d:700,
		e:900
	}
});
