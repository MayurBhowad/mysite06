import React from 'react';
import useStyles from '../styles/HomeTab.style';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import ViewModuleOutlinedIcon from '@material-ui/icons/ViewModuleOutlined';
import SyncOutlinedIcon from '@material-ui/icons/SyncOutlined';

export default function ButtonAppBar() {
    const classes = useStyles();
    const [selected, setSelected] = React.useState(1)
    const [hover, setHover] = React.useState(false)
    const [id, setId] = React.useState(1)

    const handleHover = (e, b, n) => {
        e.preventDefault();
        setHover(b);
        setId(n);
    }
    const selecteTab = (e, n) => {
        e.preventDefault();
        setSelected(n);
    }

    return (
        <div className={classes.root}>
            <AppBar elevation={0} className={classes.appBar} position="static">
                <Toolbar className={classes.toolbar} >
                    <Typography className={classes.title}>
                        <div
                            className={classes.tab}
                            onMouseEnter={e => handleHover(e, true, 1)}
                            onMouseLeave={e => handleHover(e, false, 1)}
                            onClick={e => selecteTab(e, 1)}
                        >
                            <div className={classes.tabItem} style={selected === 1 ? { color: '#673AB7' } : null}>
                                <RssFeedIcon />
                            Permissions
                            </div>
                            <div className={classes.tabBB}
                                style={
                                    ((hover && id === 1) || selected === 1) ? { visibility: 'visible' } : { visibility: 'hidden' }
                                }
                            ></div>
                        </div>
                        <div style={{
                            borderLeft: '1px solid lightgrey'
                        }} className={classes.tab}
                            onMouseEnter={e => handleHover(e, true, 2)}
                            onMouseLeave={e => handleHover(e, false, 2)}
                            onClick={e => selecteTab(e, 2)}
                        >
                            < div className={classes.tabItem} style={selected === 2 ? { color: '#673AB7' } : null} >
                                <ViewModuleOutlinedIcon />
                                Approval Matrix
                            </div>
                            <div className={classes.tabBB}
                                style={
                                    ((hover && id === 2) || selected === 2) ? { visibility: 'visible' } : { visibility: 'hidden' }
                                }
                            ></div>
                        </div>
                    </Typography>
                    <Typography className={classes.lastCheck}>
                        <SyncOutlinedIcon style={{ color: '#828282', transform: 'rotate(-90deg)', marginRight: '10px' }} />
                        Last synced 15 mins ago
                </Typography>
                </Toolbar>
            </AppBar>
        </div >
    );
}