import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useState} from "react"


import CustomizedTables from "../../Table/Table";
import AlertDialog from "../../Form/inputButton";



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function User() {

  const [user, setUser] = useState([
            { uName: "A", uId: 1, uRole: "Teacher", uMail: "teacher@email.com" },
            { uName: "B", uId: 2, uRole: "Clerck", uMail: "clerck@email.com" },
            
        ]);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      

                          <div>
                        <AlertDialog setUser={setUser} user={user}/>
                    <br />
                    <br />
                        <CustomizedTables user={user} setUser={setUser}/>
                    </div>
      
    </div>
  );
}
