
import "./Drawer.css"
import Name from "../Name/Name"
import Dash from "../drawer/Dashboard"



import {Link, BrowserRouter as Router} from "react-router-dom"
import Routing from "../../Routing/Routing"


import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Role from "./roles";
import User from "./User";
import Permission from "./permissino"
import News from "./news";
import Page from "./pages";
import Adv from "./advance";
import Logout from "./logout";
import Roles from "../navBar/Roles/Roles";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
        display: "none",
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    }));

    function ResponsiveDrawer(props) {



        // const [user, setUser] = useState([
        //     { uName: "A", uId: 1, uRole: "Teacher", uMail: "teacher@email.com" },
        //     { uName: "B", uId: 2, uRole: "Clerck", uMail: "clerck@email.com" },
            
        // ]);




    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <>
        <Name />
        <div className="ld">
            
            <div className={classes.toolbar} />
            <Divider />
                <List>
                <h3 className="tag">Administration</h3>

                    {[<Link to="/dashboard" style={{color: "white"} }>Dashboard</Link> , <Link to="/user" style={{color: "white"}}>User</Link>, <Link to="/roles" style={{color: "white"}}>Roles</Link>, <Link to="/permission" style={{color: "white"}}>Roles</Link>,<Link to="/news" style={{color: "white"}}>News</Link>, <Link to="/pages" style={{color: "white"}}>Pages</Link>, <Link to="/advance" style={{color: "white"}}>Advanced</Link>].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                            {index  === 0 ? <Link to="/dashboard"><Dash /></Link> : index === 1 ? <Link to="/user"><User /></Link> : index === 2 ? <Link to="/roles"><Role /></Link> : index === 3? <Link to="/permission"><Permission /></Link> : index === 4 ?   <Link to="/news"><News /></Link>                                                    
                            : index === 5 ? <Link to="/pages"><Page /></Link> :  <Link to="/advance"><Adv /></Link>
                            }
                            
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                            
            <Divider />
            <List>
                        <h3 className="tag">USER</h3>
                {[ "Logout"].map((text,) => (
                <ListItem button key={text}>
                    <ListItemIcon>
                    <Logout />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
                ))}
            </List>
        </div>
        </>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Web App
                    {/* <Log /> */}
                </Typography>

            </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
            <Drawer
                container={container}
                variant="temporary"
                anchor={theme.direction === "rtl" ? "right" : "left"}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                paper: classes.drawerPaper,
                }}
                ModalProps={{
                keepMounted: true, // Better open performance on mobile.
                }}
            >
                {drawer}
            </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
            <Drawer
                classes={{
                paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
            >
                {drawer}
            </Drawer>
            </Hidden>
        </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <div className="chan-main">

                <Routing />
                    
                    
                </div>
                
                
            </main>
            </div>
    );
    }

    ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;
