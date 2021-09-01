import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./component.css"

export default class SnippetsList extends Component {
  constructor(props) {
    super(props);
    
    this.setActiveSnippet = this.setActiveSnippet.bind(this);
    this.retrieveSnippets = this.retrieveSnippets.bind(this);
    this.refreshList = this.refreshList.bind(this);

    this.state = {
      snippets: [],
      currentSnippet: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveSnippets();
    
  }

  retrieveSnippets(){
    axios.get("http://127.0.0.1:8000/snippets/")
    .then(res =>{
      this.setState({
        snippets:res.data.results
      })
      console.log(res.data)
    })
  } 

  refreshList(){
      this.retrieveSnippets();
      this.setState({
          currentSnippet: null,
          currentIndex: -1
      });
  }
  setActiveSnippet(snippet, index) {
    this.setState({
      currentSnippet: snippet,
      currentIndex: index
    });
  }

  render() {
    const { snippets, currentSnippet, currentIndex } = this.state;
    return (
      <div className="submit-form">
        <h1 style = {{marginLeft:"1%"}}>List of Snippets</h1>
        <ul className="list-group" cursor = "pointer">
            {snippets &&
              snippets.map((post, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveSnippet(post, index)}
                  key={post.id}
                  
                >
                  {post.title}
                </li>
              ))}
          </ul> 

          <div className="col-md-6">
          {currentSnippet ? (
            <div>
              <h4>Tutorial</h4>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{" "}
                {currentSnippet.title}
              </div>
              <div>
                <label>
                  <strong>Code:</strong>
                </label>{" "}
                {currentSnippet.code}
              </div>
              <div>
                <label>
                  <strong>Linenos:</strong>
                </label>{" "}
                {currentSnippet.linenos ? "true" : "false"}
              </div>
              <div>
                <label>
                  <strong>Language:</strong>
                </label>{" "}
                {currentSnippet.language}
              </div>
              <div>
                <label>
                  <strong>Style:</strong>
                </label>{" "}
                {currentSnippet.style}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentSnippet.published ? "Published" : "Pending"}
              </div>

              <Link
                to={"/snippets/" + currentSnippet.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Click on a Snippet...</p>
            </div>
          )}
        </div>
      </div>

    );
  }
}


