import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import BasicTextFields from "../UpdateForm/inputUpdate"

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
    });

    export default function AlertDialogSlide({item}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
        <Button onClick={handleClickOpen} style={{ padding:"0px"}}>
            Update
        </Button>
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="alert-dialog-slide-title">
            
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
                <BasicTextFields item={item} />
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            
            <Button onClick={handleClose} color="primary">
                close
            </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}
