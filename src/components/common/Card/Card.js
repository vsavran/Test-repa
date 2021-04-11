import {cardStyles} from "./card.style";
import {Card, CardContent} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export const CardComponent = ({title='', content, ...rest}) => {
	const classes = cardStyles();
	return (
		<Card className={classes.root} variant="outlined" {...rest}>
			<CardContent>
				{title && <Typography  data-testid={'cardTitleId'} className={classes.title} variant="h5" component="h2">
					{title}
				</Typography>}
				{content}
			</CardContent>
		</Card>
	)
}
