import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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




    function createData(name, userId, roles, email) {
    return { name, userId, roles, email};
    }

    const rows = [
        // createData("Ali Hassan", 159, 6.0, "naumanhassan@gmail.com"),
        // createData("Nauman Hassan", 237, 9.0, "naumanhassan@gmail.com"),
        // createData("Mukaram Shahzad", 262, 16.0, "naumanhassan@gmail.com"),
        // createData("Shahid Ali ", 305, 3.7, "naumanhassan@gmail.com"),
        // createData("Choro is ko", 356, 16.0, "naumanhassan@gmail.com"),
    ];

    const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    });



    

    export default function CustomizedTables() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>User Name</StyledTableCell>
                <StyledTableCell align="right">User Id</StyledTableCell>
                <StyledTableCell align="right">Roles</StyledTableCell>
                <StyledTableCell align="center">User E-mail</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                    {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.userId}</StyledTableCell>
                <StyledTableCell align="right">{row.roles}</StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
    <br />
}
