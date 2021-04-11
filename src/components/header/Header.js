import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {headerStyles} from "./style.material";
import {useSelector} from "react-redux";

export const Header = ({isSignIn, handleClickHeaderBtn}) => {
	const classes = headerStyles();
	const {token} = useSelector(state => state.user)
	return (
		<div className={classes.root}>
			<AppBar className={classes.colorDefault} position="static">
				<Toolbar>
					{token && <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<MenuIcon/>
					</IconButton>}
					<Typography variant="h6" className={classes.title}>
						Testing chat app
					</Typography>
					<Button onClick={handleClickHeaderBtn} color="inherit">{token? "log Out":isSignIn?"Sign UP":"Sign In"}</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
