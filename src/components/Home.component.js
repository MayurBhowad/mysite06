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
// import VisibleItemList from '../containers/VisibleItemList'
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import SecurityOutlinedIcon from '@material-ui/icons/SecurityOutlined';
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
        background: '#E5E5E5'
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
    drawerPaper: {
        width: drawerWidth,
        background: '#FCFBFF'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    list: {
        marginLeft: '10px',
        color: '#828282'
    },
    listItem: {
        "&$selected": {
            backgroundColor: "red",
            color: "white",
            "& .MuiListItemIcon-root": {
                color: "white"
            }
        },
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
            <AppBar position="fixed" className={classes.appBar}>
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