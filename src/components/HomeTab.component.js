import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import ViewModuleOutlinedIcon from '@material-ui/icons/ViewModuleOutlined';
import SyncOutlinedIcon from '@material-ui/icons/SyncOutlined';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
        flexGrow: 1,
        color: '#333333'
    },
    appBar: {
        background: '#FFF',
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



export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar elevation={0} className={classes.appBar} position="static">
                <Toolbar className={classes.toolbar} >
                    <Typography className={classes.title}>
                        <div className={classes.tab}>
                            <div className={classes.tabItem}>
                                <RssFeedIcon />
                            Permissions
                            </div>
                            <div className={classes.tabBB}></div>
                        </div>
                        <div style={{
                            borderLeft: '1px solid lightgrey'
                        }} className={classes.tab}>
                            < div className={classes.tabItem} >
                                <ViewModuleOutlinedIcon />
                                Approval Matrix
                            </div>
                            <div className={classes.tabBB}></div>
                        </div>
                    </Typography>
                    <Typography className={classes.lastCheck}>
                        <SyncOutlinedIcon style={{ color: '#828282', transform: 'rotate(-90deg)', marginRight: '10px' }} />
                        Last synced 15 mins ago
                </Typography>
                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
        </div >
    );
}