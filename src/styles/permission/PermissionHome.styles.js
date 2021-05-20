import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
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
        color: '#828282',
        "&:hover": {
            cursor: 'pointer',
        },
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