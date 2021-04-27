import {Route, Switch} from "react-router-dom"
import Roles from "../components/navBar/Roles/Roles"
import User from "../components/navBar/User/User"
import Permission from "../components/navBar/Permission/Permission"
import News from "../components/navBar/News/News"
import Pages from "../components/navBar/Pages/Pages"
import Advance from "../components/navBar/Advanced/Advance"
import Dashboard from "../components/navBar/Dashboard/Dashboard"
import Home from "../components/drawer/Home/Home"
import Default from "../components/Default/Default"

// import {Switch, Route} from "react-router-dom"



function Routing(){
    return(
       <>
            <Switch> 
                <Route exact path="/" component={Home} />
                <Route exact path="/roles" component={Roles} />
                <Route exact path="/user" component={User} /> 
                <Route exact path="/permission" component={Permission} />
                <Route exact path="/news" component={News} />
                <Route exact path="/pages" component={Pages} />
                <Route exact path="/advance" component={Advance} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route  component={Default} />

            </Switch>
        </>    
        
    )
}
export default Routing;