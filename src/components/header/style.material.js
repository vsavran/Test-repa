import {makeStyles} from "@material-ui/core/styles";

export const headerStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	colorDefault:{
		backgroundColor:theme.palette.secondary.main
	}
}));
