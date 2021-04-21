import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./FOrminput.css"

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
        },
    },
    }));

    export default function BasicTextFields() {
    const classes = useStyles();

    return (
        <>
            <form className={classes.root} noValidate autoComplete="off" className="main-form">
                <TextField  id="standard-basic-text" label="User Name" className="inp" /> <br />
                <TextField type="number" id="standard-basic" label="User ID" className="inp" /> <br />
                <TextField type="email" id="standard-basic" label="User E-mail" className="inp" /> <br />
                <TextField type="text" id="standard-basic" label="User Roles" className="inp"/> <br /> <br />
            </form>
                <Button variant="outlined" id="inp">Submit</Button>
                <br /> <br />
        </>
    );
}


