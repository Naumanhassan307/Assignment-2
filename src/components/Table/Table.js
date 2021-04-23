


import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


import Button from "@material-ui/core/Button";


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
        },
    },
    }))(TableRow);

    
    const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    });

    export default function CustomizedTables({ user, setUser }) {

        const delHandler = (id) => {
            console.log("Id is ", id)
            let newUser = user.filter((item)=>{
                if(item.uId !== id){
                    return item
                }
            })
            console.log("New vala", newUser)
            setUser([...newUser])
        }
        

        const classes = useStyles();

        return (
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>User Name</StyledTableCell>
                    <StyledTableCell align="left">User ID</StyledTableCell>
                    <StyledTableCell align="left">User Role</StyledTableCell>
                    <StyledTableCell align="center">User E-mail</StyledTableCell>
                    <StyledTableCell align="center">Actions</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {user.map((item) => (
                    <StyledTableRow key={item.uName}>
                    <StyledTableCell component="th" scope="row">
                        {item.uName}
                    </StyledTableCell>
                    <StyledTableCell align="left">{item.uId}</StyledTableCell>
                    <StyledTableCell align="left">{item.uRole}</StyledTableCell>
                    <StyledTableCell align="center">{item.uMail}</StyledTableCell>
                    <StyledTableCell align="center">
                        <Button variant="contained">Update</Button> &nbsp;
                        <Button variant="contained" onClick={()=>{delHandler(item.uId)}}>
                        Delete
                        </Button>
                    </StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        );
    }
