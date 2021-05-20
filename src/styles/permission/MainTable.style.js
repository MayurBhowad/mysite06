import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    root: {
        margin: '1rem 5rem'
    },
    typography: {
        fontSize: '13px',
        display: 'flex',
        flexGrow: 1,
        width: '25%',
    },
    accessBtnValid: {
        fontSize: '10px',
        width: '9rem',
        color: '#27AE60',
        background: 'rgba(39, 174, 96, 0.3)',
        border: '1px solid #27AE60',
        borderRadius: '30px',
    },
    accessBtninValid: {
        fontSize: '10px',
        width: '9rem',
        color: '#FF0808',
        border: '1px solid #FF0808',
        borderRadius: '30px',
        background: 'rgba(255, 8, 8, 0.3)'
    },
    accessBtnDisabled: {
        fontSize: '10px',
        width: '9rem',
        color: '#BDBDBD',
        border: '1px solid #BDBDBD',
        borderRadius: '30px',
        background: 'rgba(242, 242, 242, 1)'
    },
}));