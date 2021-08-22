import React, { Component } from "react";
import TutorialDataService from "./components/tutorialservice";
import { Link } from "react-router-dom";
import axios from "axios";

export default class SnippetsList extends Component {
  constructor(props) {
    super(props);
    // this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    // this.retrieveSnippets = this.retrieveSnippets.bind(this);
    // this.refreshList = this.refreshList.bind(this);
    // this.setActiveSnippet = this.setActiveSnippet.bind(this);
    // this.removeAllSnippets = this.removeAllSnippets.bind(this);
    // this.searchTitle = this.searchTitle.bind(this);
    this.state = {
      posts: []
    };
    // this.state = {
    //   snippets: [],
    //   currentSnippet: null,
    //   currentIndex: -1,
    //   searchTitle: ""
    // };
  }

  componentDidMount() {
    // this.retrieveSnippets();
    axios.get("http://127.0.0.1:8000/snippets/")
    .then(res =>{
      this.setState({
        posts:res.data.results
      })
      console.log(res.data)
    })
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveSnippets() {
    TutorialDataService.getAll()
      .then(response => {
        this.setState({
          snippets: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
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

  removeAllSnippets() {
    TutorialDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchTitle() {
    TutorialDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          snippets: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const {posts} = this.state
    return (
      <div>
        <h1>List of Snippets</h1>
        {
          posts.map(post => <div key={post.id}>{post.title}</div>)
        }
      </div>
    );
  }
}


