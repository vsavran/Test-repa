import React from 'react';
import TextField from '@material-ui/core/TextField';

export const Input = ({...rest}) => {
	return (
		<TextField data-testid={'inputTestId'} {...rest}/>
	);
}
