import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import {useState} from "react"



const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
        },
    },
    }));

    export default function BasicTextFields({item}) {
    const classes = useStyles();

    const [userName, setUserName] = useState("");
    const [userId, setUserId] = useState("");
    const [userRole, setUserRole] = useState("");
    const [userMail, setUserMail] = useState("");

    let updateHandler = () => {
        console.log("IIIIIIITTTTTEEEMMM", item)
        
    }

    return (
        <>
        
        <form className={classes.root} noValidate autoComplete="off">
            <h1>Enter Update Detail</h1>
        <TextField required  id="standard-basic-text" label="User Name" onChange={(e)=>{setUserName(e.target.value)}} />
        <TextField required  id="standard-basic" type="number" min="0" label="User ID"  onChange={(e)=>{setUserId(e.target.value)}}/>
        <TextField required  id="standard-basic-text" label="User Role" onChange={(e)=>{setUserRole(e.target.value)}} />
        <TextField required  id="standard-basic-text"  label="User E-Mail"  onChange={(e)=>{setUserMail(e.target.value)}}/>
        <Button variant="outlined" color="primary" onClick={updateHandler}  disabled>
            Update
        </Button>
        </form>
        </>
    );
}
