import {makeStyles} from '@material-ui/core/styles';

export const cardStyles = makeStyles((theme) => ({
	root: {
		width: "auto",
		border:`solid ${theme.palette.secondary.main}`,
		borderRadius: 15
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: theme.fontSizes.title,
		textAlign: 'center'
	},
	pos: {
		marginBottom: 12,
	},
}))
