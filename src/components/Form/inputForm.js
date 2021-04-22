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

    export default function BasicTextFields({setUser, user}) {
    const classes = useStyles();

    

        const [userName, setUserName]= useState("")
        const [userId, setUserId]= useState("")
        const [userRole, setUserRole]= useState("")
        const [userMail, setUserMail]= useState("")


        let btnHandler = () => {
            let newUser = {
                uName: userName,
                uId: userId,
                uRole: userRole,
                uMail: userMail
            };
            setUser([...user, newUser])
            setUserName("")
            setUserId("")
            setUserRole("")
            setUserMail("")
        }

    return (
        <>
        
        <form className={classes.root} noValidate autoComplete="off">
            <h1>Enter User Detail</h1>
        <TextField value={userName} id="standard-basic-text" label="User Name" onChange={(e)=>{setUserName(e.target.value)}} />
        <TextField value={userId} id="standard-basic-text" label="User ID" onChange={(e)=>{setUserId(e.target.value)}} />
        <TextField value={userRole} id="standard-basic-text" label="User Role"  onChange={(e)=>{setUserRole(e.target.value)}}/>
        <TextField value={userMail} id="standard-basic-text" label="User E-Mail"  onChange={(e)=>{setUserMail(e.target.value)}}/>
        <Button variant="outlined" color="primary" onClick={btnHandler}>
            Submit
        </Button>
        </form>
        </>
    );
}
