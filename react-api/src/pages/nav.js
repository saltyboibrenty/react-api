import React from "react";
import {Link} from 'react-router-dom';
import "./index.css"


function Nav(){
    return(
        <nav>
            <h3 className = "navHeader" >Breact</h3>
            <ul className = "navLinks">
                <Link className = "link" to="/"><li>Home</li></Link>
                <Link className = "link"to ="/snippets"><li>Snippets</li></Link>
                <Link className = "link"to ="/add"><li>Create</li></Link>
            </ul>
        </nav>
    );
}

export default Nav