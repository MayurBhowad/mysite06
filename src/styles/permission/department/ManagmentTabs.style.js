import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    root: {
        padding: 0,
        margin: '0 5rem',
        flexGrow: 1,
        color: '#333333'
    },
    appBar: {
        background: 'transparent',
        padding: 0
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    toolbar: {
        padding: 0,
        color: '#333333',
        borderBottom: '1px solid #CFD3DA',
    },
    title: {
        marginTop: '33px',
        display: 'flex',
        flexGrow: 1,
        fontSize: '14px',
    },
    tab: {
        margin: '0 5px',
        padding: '0 7px'
    },
    tabItem: {
        display: 'flex',
        marginBottom: '5px',
        color: '#828282',
        "&:hover": {
            cursor: 'pointer',
            color: '#673AB7',
        }
    },
    tabBB: {
        margin: '0 5px',
        width: '100%',
        height: '5px',
        background: '#673AB7',
        borderRadius: '15px 15px 0 0'
    },
    lastCheck: {
        marginRight: '50px',
        marginTop: '33px',
        display: 'flex',
        fontSize: '14px',
    },
}));