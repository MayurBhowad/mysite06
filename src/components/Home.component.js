import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import SecurityOutlinedIcon from '@material-ui/icons/SecurityOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import HomeTab from './HomeTab.component';
import PermissionHome from './permission/PermissionHone.component';
const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
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
        justifyContent: 'space-between'
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
    },
    navRightItem: {
        margin: '0 7px',
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
function ResponsiveDrawer() {
    const dummyCategories = [
        { title: 'Projects', icon: 'DashboardOutlinedIcon' },
        { title: 'Organisation Profile', icon: 'BusinessCenterOutlinedIcon' },
        { title: 'Access Control', icon: 'SecurityOutlinedIcon' },
    ]
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(3);
    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen)
    }
    const drawer = (
        <div >
            <List className={classes.list}>
                {/* {dummyCategories.map((text, index) => ( */}

                <ListItem
                    className={selected === 1 ? classes.listItemSelected : classes.listItem}
                    onClick={e => setSelected(1)}
                    button >
                    <DashboardOutlinedIcon />
                    <ListItemText className={classes.listItemText} primary='Projects' />
                </ListItem>
                <ListItem
                    className={selected === 2 ? classes.listItemSelected : classes.listItem}
                    onClick={e => setSelected(2)}
                    button >
                    <BusinessCenterOutlinedIcon />
                    <ListItemText className={classes.listItemText} primary='Organisation Profile' />
                </ListItem>
                <ListItem
                    className={selected === 3 ? classes.listItemSelected : classes.listItem}
                    onClick={e => setSelected(3)}
                    button >
                    <SecurityOutlinedIcon />
                    <ListItemText className={classes.listItemText} primary='Access Control' />
                </ListItem>
                {/* ))} */}
            </List>
        </div>
    );
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" elevation={0} className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.navLogo}>
                        <img src="assets/Images/Subtract.png" alt="logo" width="25px" className={classes.logo} />
                        <img src="assets/Images/mYSITE.png" alt="logo" width="70px" className={classes.company} />
                    </div>
                    <div className={classes.navRight}>
                        <div className={classes.profile}>
                            <img
                                src="https://lh3.googleusercontent.com/proxy/e1qqECK7uQAy-rjbekL84rd57H9wJCq6Ym2Pp9abOF0ue-iM_qfuQKF9F79CMWmBu6FWSC0DT5qagCKRnjIWCl9UBPmcw59D4yPJyclj8EwyQJ_2byHr29_eLr0A9l0"
                                alt=""
                                width="32px"
                                height="30px"
                            />
                            <Typography variant="h6" className={classes.profileName}>
                                Kishore
                            </Typography>
                        </div>
                        <NotificationsNoneOutlinedIcon fontSize="large" className={classes.navRightItem} />
                        <HelpOutlineOutlinedIcon fontSize="large" className={classes.navRightItem} />
                    </div>
                </Toolbar>
            </AppBar>

            <nav className={classes.drawer}>
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
                            <CloseIcon />
                        </IconButton>
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <div className={classes.toolbar} />
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <div className={classes.content}>
                <div className={classes.toolbar} />
                {/* <VisibleItemList /> */}
                <HomeTab />
                {/* hell */}
                <PermissionHome />
            </div>
        </div >
    );
}
ResponsiveDrawer.propTypes = {
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    container: PropTypes.object,
};
export default ResponsiveDrawer;