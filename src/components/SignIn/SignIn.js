import {Input} from "../common/Input/Input";
import {Box, Container} from "@material-ui/core";
import {useInput} from "../../hooks/useInput";
import Button from "@material-ui/core/Button";
import {useApi} from "../../hooks/useApi";
import {signInStyles} from "./style";

const schema = {
	email: '',
	password: '',
}

export const SignIn = () => {
	const classes = signInStyles();
	const {value, onChange} = useInput(schema)
	const {handleSingIn} = useApi()
	return (
		<>
			<Container maxWidth="sm">
				<Input value={value['email']} onChange={onChange} fullWidth id="standard-basic" name={'email'}
					   label="Email"/>
				<Input value={value['password']} onChange={onChange} fullWidth id="standard-basic" name={'password'}
					   label="Password"/>
				<Box mt={2} display={'flex'} justifyContent={'flex-end'}>
					<Button className={classes.root} onClick={handleSingIn(value)}>Submit</Button>
				</Box>
			</Container>
		</>
	)
}
