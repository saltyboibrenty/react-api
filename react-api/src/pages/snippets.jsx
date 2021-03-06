import React, { Component } from "react";
import TutorialDataService from "./components/tutorialservice";
import { Link } from "react-router-dom";
import axios from "axios";
// import "./snippets.css";

export default class SnippetsLists extends Component {
  constructor(props) {
    super(props);
    
    this.setActiveSnippet = this.setActiveSnippet.bind(this);

    this.state = {
      snippets: [],
      currentSnippet: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    // this.retrieveSnippets();
    axios.get("http://127.0.0.1:8000/snippets/")
    .then(res =>{
      this.setState({
        snippets:res.data.results
      })
      console.log(res.data)
    })
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
      <div>
        <h1>List of Snippets</h1>
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
          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllTutorials}
          >
            Remove All
          </button>

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
                  <strong>Description:</strong>
                </label>{" "}
                {currentSnippet.description}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentSnippet.published ? "Published" : "Pending"}
              </div>

              <Link
                to={"/tutorials/" + currentSnippet.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Tutorial...</p>
            </div>
          )}
        </div>
      </div>

    );
  }
}


