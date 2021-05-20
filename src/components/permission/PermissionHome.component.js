import React from 'react';
import useStyles from '../../styles/permission/PermissionHome.styles';
import Button from '@material-ui/core/Button';

//Icons
import AddIcon from '@material-ui/icons/Add';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import MainTable from './MainTable';


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
