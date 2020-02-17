import React from 'react';
import { useTranslation } from 'react-i18next';
import T from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


export default function DeleteAlert(props) {

    const [t] = useTranslation();

    // Origin props of the component
    const { type, item } = props;

    // State of store
    const {
        token,    //user
    } = props;

    // Actions of the store
    const { deleteUser, deleteAdvert } = props;

    console.log('test')
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {

        console.log(type)
        setOpen(false);
        if(type === 'advert') {
            deleteAdvert(item, token);
        }
        if(type === 'user') {
            deleteUser(item, token)
        }
        
    };

    return (
        <React.Fragment>
            <IconButton onClick={handleClickOpen} >
                <DeleteIcon />
            </IconButton>

            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle id="alert-dialog-title">{t('Warning')}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {t('DeleteAlert')}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        {t('Disagree')}
                    </Button>
                    <Button onClick={handleDelete} color="primary" autoFocus>
                        {t('Agree')}
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

DeleteAlert.propTypes = {
    item: T.string,
    token: T.string,
    deleteAdvert: T.func,
    deleteUser: T.func,
};
