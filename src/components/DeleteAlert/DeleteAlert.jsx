import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export default function DeleteAlert(props) {

    const {token, slugName, deleteAdvert} = props;

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        setOpen(false);
         deleteAdvert(slugName, token);
    };

    return (
        <div>
            {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}


            {/* <IconButton onClick={() => deleteAdvert(advert.slugName, user.token)} > */}


            <IconButton onClick={handleClickOpen} >
                <DeleteIcon />
            </IconButton>

            <Dialog
                open={open}
                onClose={handleClose}
            // aria-labelledby="alert-dialog-title"
            // aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"¡Atención!"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Estás a punto de borrar este producto. Esta operación no se puede deshacer.
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Disagree
          </Button>
                    <Button onClick={handleDelete} color="primary" autoFocus>
                        Agree
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}