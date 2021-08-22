import React, {Component} from "react";
import "./index.css";
import "./users.css";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            something : [],
          };
    }
    
    async componentDidMount() {
        // document.body.style.backgroundColor = "#282c34";
        document.body.classList.add("header");
        fetch('http://127.0.0.1:8000/users')
          .then((response) => response.json())
        //   .then(data => this.setState({something:data.results}));
        .then(data => console.log(data));

      }
    render(){
        return(
            <div>   
                {/* {this.state.something.length>0 && <p>{this.state.something[0].url}</p>} */}
                {this.state.something.map(i => (
                <div key = {i.id}>
                    <div>{i.url}</div>
                    <div>{i.owner}</div>
                </div>))}
            </div>
            );
    }
    
};

export default Users;