import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import useStyles from '../../styles/permission/MainTable.style';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Accordion = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

// const AccordionDetails = withStyles((theme) => ({
//     root: {
//         padding: theme.spacing(2),
//     },
// }))(MuiAccordionDetails);

export default function MainTable() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState('panel1');

    let departmentsDetails = [
        { number: 1, title: 'Management Team', access: 'access', memberCtn: 4, lastUpdate: 1 },
        { number: 2, title: 'Procurement Team', access: 'restricted', memberCtn: 8, lastUpdate: 1 },
        { number: 3, title: 'Project Team', access: 'restricted', memberCtn: 16, lastUpdate: 1 },
        { number: 4, title: 'IT Team', access: 'restricted', memberCtn: 4, lastUpdate: 1 },
        { number: 5, title: 'Super Admin', access: 'access', memberCtn: 1, lastUpdate: 1 },
    ]

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
        console.log(panel);
    };

    let DisplayList;
    DisplayList = departmentsDetails.map(dept => (
        <DepartmentList panelInfo={dept} classes={classes} expanded={expanded} handleChange={handleChange} />
    ))


    return (
        <div className={classes.root}>
            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel0')}>
                <AccordionSummary >
                    <Typography className={classes.typography} style={{ marginLeft: '20px' }} >Deparment/Role Name</Typography>
                    <Typography className={classes.typography}>Access Level</Typography>
                    <Typography className={classes.typography}>No of members</Typography>
                    <Typography className={classes.typography}>Last Updated</Typography>
                    <Typography style={{ display: 'flex', flexGrow: 1, width: '2%' }}>{' '}</Typography>
                </AccordionSummary>
            </Accordion>
            {DisplayList}
        </div>
    );
}


function DepartmentList({ expanded, handleChange, panelInfo, classes }) {
    const { number, title, access, memberCtn, lastUpdate } = panelInfo;
    return (
        <Link to={`/${number}`} style={{ textDecoration: 'none' }} >
            <Accordion style={{ background: '#fff' }} square expanded={expanded === 'panel1'} onChange={handleChange(`panel${number}`)}>
                <AccordionSummary style={{ background: '#fff' }}>
                    <FiberManualRecordOutlinedIcon style={{ color: '#E0E0E0', padding: '0 5px 4px 0' }} />
                    <Typography className={classes.typography} >{title}</Typography>
                    <Typography className={classes.typography} >
                        {access === 'access' ?
                            (<Button className={classes.accessBtnValid} variant="outlined">
                                All Access
                            </Button>) :
                            access === 'restricted' ?
                                (<Button className={classes.accessBtninValid} variant="outlined">
                                    Restricted Access
                                </Button>) :
                                access === 'noaccess' ?
                                    (<Button className={classes.accessBtnDisabled} variant="outlined">
                                        No Access
                                    </Button>) : null
                        }
                    </Typography>
                    <Typography className={classes.typography} style={{ marginLeft: '5rem' }}>{memberCtn}</Typography>
                    <Typography className={classes.typography} >{`${lastUpdate} min ago`}</Typography>
                    <Typography style={{ display: 'flex', flexGrow: 1, justifyContent: "center", color: '#828282' }} ><VisibilityOutlinedIcon /></Typography>
                </AccordionSummary>
            </Accordion>
        </Link>
    )
}