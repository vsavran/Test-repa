import {Grid} from "@material-ui/core";
import {authStyles} from "./style.material";
import {CardComponent} from "../../components/common/Card/Card";
import {useContext} from "react";
import {Context} from "../../Context/ContextProviderComponent";
import {SignIn} from "../../components/SignIn/SignIn";
import {SignUp} from "../../components/SignUp/SignUp";

export const Auth = () => {
	const classes = authStyles();
	const {isSignIn} = useContext(Context)
	return (
		<Grid container direction={'column'}>
			<h2 className={classes.color}>Auth page</h2>
			<CardComponent title={isSignIn ? "Sign In" : "Sign Up"} content={isSignIn?<SignIn/>:<SignUp/>}/>
		</Grid>
	);
};
