import { makeStyles } from "@material-ui/core";
const drawerWidth = 240;


export default makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        }
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        background: '#FFFFFF'
    },
    navLogo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        "&:hover": {
            cursor: 'pointer'
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    company: {
        marginLeft: '10px'
    },
    navRight: {
        marginLeft: 'auto',
        color: '#828282',
        display: 'flex',
        alignItems: 'center',
    },
    profile: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '1rem',
        "&:hover": {
            cursor: 'pointer',
        },
    },
    navRightItem: {
        margin: '0 7px',
        "&:hover": {
            cursor: 'pointer',
        }
    },
    profileName: {
        marginLeft: '7px',
        fontSize: '15px',
        color: '#000'
    },
    drawerPaper: {
        width: drawerWidth,
        background: '#FCFBFF'
    },
    content: {
        marginTop: '-20px',
        flexGrow: 1,
        // padding: theme.spacing(3),
    },
    list: {
        marginLeft: '10px',
        color: '#828282'
    },
    listItem: {
    },
    listItemText: {
        marginLeft: '10px',
    },
    listItemSelected: {
        borderLeft: '5px solid',
        background: '#E1D8F1',
        color: '#673AB7'
    },
    closeMenuButton: {
        marginRight: 'auto',
        marginLeft: 0,
    },
}));