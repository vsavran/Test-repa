import {makeStyles} from "@material-ui/core/styles";

export const itemIconStyle = makeStyles((theme) => ({
    icon: {
        display:'flex',
        border:`solid ${theme.palette.secondary.main} 2px`,
        justifyContent:'center',
        alignItems:'center',
        width:'30px',
        height:30,
        background:'pink',
        borderRadius:"50%",
        color:theme.palette.primary.white,
        fontWeight:theme.fontWeight.d,
        margin:'6px 7px 6px 0',

    },
    iconContainer:{
        cursor:'pointer',
    },
    container:{
        borderBottom:`2px solid ${theme.palette.secondary.main}`,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    },
    removeIcon:{
        cursor:'pointer',
    }
}));
