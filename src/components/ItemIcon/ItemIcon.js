import {Box} from "@material-ui/core";
import {itemIconStyle} from "./style";
import ClearIcon from '@material-ui/icons/Clear';

export const ItemIcon = ({name, fn, handleRemoveRoom, id}) => {
    const classes = itemIconStyle()
    return (
        <Box className={classes.container} >
            <Box className={classes.iconContainer} onClick={fn} display={'flex'} alignItems={'center'} mt={1}>
                <Box className={classes.icon} mr={1}>
                    {name.toUpperCase().slice(0, 2)}
                </Box>
                {name}
            </Box>
            <Box>
                <ClearIcon className={classes.removeIcon} onClick={handleRemoveRoom({id})}/>
            </Box>
        </Box>
    )
}