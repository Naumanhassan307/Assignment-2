import {Link} from "react-router-dom"
import "./Name.css"

function Name(){
    return (
        <div className="name-div">
            <span>
            <p>
                
                <Link style={{color: "white"}} to="/"><b>Nauman</b> hassan</Link>
            </p>
            </span>
        </div>
    );
}
export default Name;