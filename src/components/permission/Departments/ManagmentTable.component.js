import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import useStyles from '../../../styles/permission/department/ManagmentTable.style';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import clsx from 'clsx';

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

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

export default function ManagmentTable() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState('panel1');

    let departmentsDetails = [
        { number: 1, title: 'Budget', access: 'access', summary: ['View', 'Create', 'Edit', 'Delete'], lastUpdate: 1, switchBtn: true },
        { number: 2, title: 'Bidding', access: 'noaccess', summary: [], lastUpdate: 1, switchBtn: false },
        { number: 3, title: 'Vendor Portal', access: 'restricted', summary: ['View', 'Create'], lastUpdate: 1, switchBtn: true },
        { number: 4, title: 'Purchase Order/Work Order', access: 'restricted', summary: ['View', 'Create'], lastUpdate: 1, switchBtn: true },
        { number: 5, title: 'Organisational Profile', access: 'access', summary: ['View', 'Create', 'Edit', 'Delete'], lastUpdate: 1, switchBtn: true },
        { number: 6, title: 'Permissions & Access Control', access: 'noaccess', summary: [], lastUpdate: 1, switchBtn: false },
    ]

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
        console.log(panel);
    };

    let DisplayList;
    DisplayList = departmentsDetails.map(dept => (
        <AssetsList panelInfo={dept} classes={classes} expanded={expanded} handleChange={handleChange} />
    ))


    return (
        <div className={classes.root}>
            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel0')}>
                <AccordionSummary >
                    <Typography className={classes.typography} style={{ marginLeft: '20px' }} >Deparment/Role Name</Typography>
                    <Typography className={classes.typography} style={{ marginLeft: '2rem' }}>Access Level</Typography>
                    <Typography className={classes.typography} style={{ marginLeft: '2rem' }}>Summary</Typography>
                    <Typography className={classes.typography}>Last Updated</Typography>
                    <Typography style={{ display: 'flex', flexGrow: 1, width: '2%' }}>{' '}</Typography>
                </AccordionSummary>
            </Accordion>
            {DisplayList}
        </div>
    );
}


function AssetsList({ expanded, handleChange, panelInfo, classes }) {
    const { number, title, access, summary, lastUpdate, switchBtn } = panelInfo;

    return (
        <Accordion square expanded={expanded === `panel${number}`} onChange={handleChange(`panel${number}`)}>
            <AccordionSummary style={{ background: '#fff' }}>
                {(expanded === `panel${number}`) ?
                    (<RemoveCircleOutlineOutlinedIcon style={{ color: '#828282', padding: '0 5px 4px 0' }} />) :
                    (<AddCircleOutlineOutlinedIcon style={{ color: '#828282', padding: '0 5px 4px 0' }} />)
                }

                <Typography className={classes.typography} >{title}</Typography>
                {(expanded !== `panel${number}`) &&
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
                }
                {(expanded !== `panel${number}`) &&
                    <Typography className={classes.typography} style={{ justifyContent: 'center' }} >
                        {summary.map((item, i) => {
                            if ((i + 1) !== summary.length) {
                                return `${item} | `
                            } else {
                                return `${item}`
                            }
                        })}
                    </Typography>}
                {(expanded !== `panel${number}`) &&
                    <Typography className={classes.typography} style={{ marginLeft: '4rem' }} >{`${lastUpdate} min ago`}</Typography>}

                {(expanded !== `panel${number}`) &&
                    <Typography style={{ display: 'flex', flexGrow: 1, justifyContent: "center", color: '#828282' }} >
                        {switchBtn ?
                            (<img src="assets/Images/switch-on.png" width="35px" height="20px" alt="" />) :
                            (<img src="assets/Images/switch-off.png" width="35px" height="20px" alt="" />)
                        }
                    </Typography>}
            </AccordionSummary>
            <BudgetAccordion />

        </Accordion>
    )
}



function BudgetAccordion() {
    const classes = useStyles();

    return (
        <div className={classes.budgetRoot}>
            <div style={{ fontSize: '12px', marginLeft: '40px', }}>
                All aspects in the bidding module
            </div>
            <AccordionDetails className={classes.details}>
                <div className={clsx(classes.column, classes.radioRoot)}>
                    <FormControl component="fieldset" className={classes.accessControlSection}>
                        <FormLabel component="legend" className={classes.accessControlTitle} >Access Control</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1"  >
                            <FormControlLabel
                                className={classes.formControlLable}
                                value="female"
                                control={<Radio color='primary' checked={false} />}
                                label={
                                    <Typography component="h2">
                                        <div className={classes.radioTitle} >All Access</div>
                                        <div className={classes.radioSubtitle}>Can access all items</div>
                                    </Typography>
                                }
                            />
                            <FormControlLabel
                                className={classes.formControlLable}
                                value="male"
                                control={<Radio checked={true} color='primary' />}
                                label={
                                    <Typography component="h2">
                                        <div className={classes.radioTitle}>Restricted Access </div>
                                        <div className={classes.radioSubtitle}>Can access only assigned or created items</div>
                                    </Typography>
                                }
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className={clsx(classes.column, classes.permissionRoot)}>
                    <FormControl component="fieldset" className={clsx(classes.formControl, classes.helper)}>
                        <FormLabel component="legend" style={{ fontSize: '14px', color: '#000', marginLeft: '20px' }}>Permissions</FormLabel>
                        <FormGroup >
                            <FormControlLabel
                                className={classes.formControlLable}
                                control={<Checkbox checked={false} name="gilad" />}
                                label="View items in access"
                            />
                            <FormControlLabel
                                className={classes.formControlLable}
                                control={<Checkbox color='primary' checked={true} name="jason" />}
                                label="Edit items in access"
                            />
                            <FormControlLabel
                                className={classes.formControlLable}
                                control={<Checkbox checked={false} name="antoine" />}
                                label="Create items in access"
                            />
                            <FormControlLabel
                                className={classes.formControlLable}
                                control={<Checkbox checked={false} name="antoine" />}
                                label="Delete items in access"
                            />
                        </FormGroup>
                    </FormControl>
                </div>
                <div className={clsx(classes.column)} />

            </AccordionDetails>
        </div >
    );
}