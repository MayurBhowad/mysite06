import React from 'react';
import useStyles from '../../../styles/permission/department/ManagmentTabs.style';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function ManagementTabs() {
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
                                Access Control
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
                                Assiged Members
                            </div>
                            <div className={classes.tabBB}
                                style={
                                    ((hover && id === 2) || selected === 2) ? { visibility: 'visible' } : { visibility: 'hidden' }
                                }
                            ></div>
                        </div>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div >
    );
}