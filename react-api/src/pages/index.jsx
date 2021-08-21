import React, {Component} from "react";
import { BrowserRouter as Router , Switch, Route} from "react-router-dom";
import "./index.css";
import logo from "./logo.svg";
import Nav from "./nav";



class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            something : [],
          };
    }
    
    async componentDidMount() {
        // document.body.style.backgroundColor = "#282c34";

        document.body.classList.add("header");
        fetch('http://127.0.0.1:8000/')
          .then((response) => response.json())
        //   .then(data => this.setState({something:data.results}));
        .then(data => console.log(data));

        // const response = await fetch('http://127.0.0.1:8000/');
        // const data = await response.json();
        // console.log(data);

      }
    
    
    render(){
        return(
            
            <div>
                
                <div className = "header">   
                    <img src={logo} className = "photo" />  
                    <h3 className = "audacious">Breact</h3>
                    <p className = "humble">Made by Brent. For Brent.</p>
                </div>
            </div>
            );
    }
    
};

export default MainPage;