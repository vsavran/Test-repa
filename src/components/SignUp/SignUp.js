import {Input} from "../common/Input/Input";
import {Box, Container} from "@material-ui/core";
import {useInput} from "../../hooks/useInput";
import Button from "@material-ui/core/Button";
import {useApi} from "../../hooks/useApi";
import {signUpStyles} from "./style.material";

const schema = {
	email: '',
	password: '',
	name: ''
}

export const SignUp = () => {
	const classes = signUpStyles()
	const {value, onChange} = useInput(schema)
	const {handleSignUp} = useApi()
	return (
		<>
			<Container maxWidth="sm">
				<Input value={value['email']} onChange={onChange} fullWidth id="standard-basic" name={'email'}
					   label="Email"/>
				<Input value={value['password']} onChange={onChange} fullWidth id="standard-basic" name={'password'}
					   label="Password"/>
				<Input value={value['name']} onChange={onChange} fullWidth id="standard-basic" name={'name'}
					   label="User name"/>
				<Box mt={2} display={'flex'} justifyContent={'flex-end'}>
					<Button className={classes.root} onClick={handleSignUp(value)}>Submit</Button>
				</Box>
			</Container>
		</>
	)
}
