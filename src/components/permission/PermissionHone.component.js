import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

//Icons
import AddIcon from '@material-ui/icons/Add';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import MainTable from './MainTable';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    topActions: {
        display: 'flex',
        alignItems: 'center',
        margin: '3rem 0 0 5rem'
    },
    addBtn: {
        marginRight: '20px',
        padding: '8px 40px',
        display: 'flex',
        alignItems: 'center',
        background: '#673AB7',
    },
    topActionsIcon: {
        margin: '0 7px',
        color: '#828282'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '33.33%',
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}));

export default function PermissionHome() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.topActions}>
                <Button className={classes.addBtn} variant="contained" color="primary">
                    <AddIcon />
                    Add Role
                </Button>
                <CreateOutlinedIcon fontSize="large" className={classes.topActionsIcon} />
                <DeleteOutlineOutlinedIcon fontSize="large" className={classes.topActionsIcon} />
            </div>

            <MainTable />
        </div>
    );
}
