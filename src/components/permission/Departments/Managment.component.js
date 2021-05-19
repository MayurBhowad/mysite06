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
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import MainTable from '../MainTable';
import ManagementTabs from './ManagmentTabs.component';
import ManagmentTable from './ManagmentTable.component';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    topActions: {
        display: 'flex',
        alignItems: 'center',
        margin: '3rem 0 0 2rem'
    },
    addBtn: {
        marginRight: '20px',
        padding: '8px 40px',
        display: 'flex',
        alignItems: 'center',
        background: '#673AB7',
    },
    topActionsIcon: {
        margin: '0 10px',
        color: '#828282',
        "&:hover": {
            cursor: 'pointer',
        }
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

export default function ManagementDept() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.topActions}>
                <Link to={`/`}>
                    <ArrowBackOutlinedIcon fontSize="small" className={classes.topActionsIcon} />
                </Link>
                <Typography style={{ color: '#673AB7', cursor: 'pointer', }} >
                    Management Team
                </Typography>
                <CreateOutlinedIcon fontSize="small" className={classes.topActionsIcon} />
            </div>

            <ManagementTabs />

            <ManagmentTable />
        </div>
    );
}
