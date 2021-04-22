import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";





import BasicTextFields from "../Form/inputForm"






export default function AlertDialog({setUser, user}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            + Add User
        </Button>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            
            <DialogContent>
            <DialogContentText id="alert-dialog-description">

                <BasicTextFields setUser={setUser} user={user} />

            </DialogContentText>
            </DialogContent>
            <DialogActions>
            
                <Button onClick={handleClose} color="primary" autoFocus>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}
