import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { blue } from "@material-ui/core/colors";


import BasicTextFields from "../Form-Input/FORMINPUT"

const emails = ["username@gmail.com", "user02@gmail.com"];
const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
    });

    function SimpleDialog(props) {
    const classes = useStyles();
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
        >
        <DialogTitle id="simple-dialog-title">Enter User Detail</DialogTitle>
        
        <BasicTextFields />
        </Dialog>
    );
    }

    SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
    };

    export default function SimpleDialogDemo() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <div>
        {/* <Typography variant="subtitle1">Selected: {selectedValue}</Typography> */}
        <br />
        <Button variant="outlined" color="primary" onClick={handleClickOpen} 
        style={
                {
                    marginLeft: "10px",
                    borderWidth: "3px", 
                    borderRadius: "15px", 
                    borderColor: "black",
                    color: "black"
                }
            }
                >
            + Add User
        </Button>
        <br />
        <br />
        <SimpleDialog
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
        />
        </div>
    );
}
