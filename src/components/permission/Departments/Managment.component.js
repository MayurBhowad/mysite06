import React from 'react';
import useStyles from '../../../styles/permission/department/Managment.style';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';

//Icons
import AddIcon from '@material-ui/icons/Add';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import MainTable from '../MainTable';
import ManagementTabs from './ManagmentTabs.component';
import ManagmentTable from './ManagmentTable.component';
import { Link } from 'react-router-dom';


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
