import "./component.css";
import React, { Component } from "react";
import axios from "axios";


const api = axios.create({
  baseURL: "http://127.0.0.1:8000/"
})
export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeCode = this.onChangeCode.bind(this);
    this.onChangeLang = this.onChangeLang.bind(this);
    this.onChangeLin = this.onChangeLin.bind(this);
    this.onChangeStyle = this.onChangeStyle.bind(this);
    this.saveSnippet = this.saveSnippet.bind(this);
    this.newSnippet = this.newSnippet.bind(this);

    this.state = {
      title: "",
      code: "",
      linenos: false,
      language: "ABAP",
      style: "abap",
      published: false,
      submitted: false
    };
  }

  displayInfo = () => {
      console.log("title:", this.state.title);
      console.log("code:",this.state.code);
      console.log("linenos:", this.state.linenos);
      console.log("language:",this.state.language);
      console.log("style:",this.state.style);
     
     
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeCode(e) {
    this.setState({
      code: e.target.value
    });
  }
  onChangeLin(e) {
    this.setState({
      linenos: e.target.checked
    });
  }
  onChangeLang(e) {
    this.setState({
      language: e.target.value
    });
  }
  onChangeStyle(e) {
    this.setState({
      style: e.target.value
    });
  }
  
  saveSnippet( ){
    axios.post("http://127.0.0.1:8000/snippets/", this.state,{
  auth: {
    username: "brent",
    password: "Brent2463"
  }})
    .then(res => {
      console.log(res)
    }).catch((error) => {
      console.log(error.response);
  })
}


  newSnippet() {
    this.setState({
        id: null,
        title: "",
        code: "",
        language: "",
        published: false,
        submitted: false
    });
  }

  render() {
    return (
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newSnippet}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  value={this.state.title}
                  onChange={this.onChangeTitle}
                  name="title"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Code</label>
                <textarea className = "codeinput" rows="10" cols="50" value={this.state.code} onChange={this.onChangeCode}> </textarea> 
              </div>

              <div className="form-group">
                <label htmlFor="description">Linenos</label>
                <input
                  type="checkbox"
                  required
                  value={this.state.linenos}
                  onChange={this.onChangeLin}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Language</label>
                <select className="languages" id="languages" onChange={this.onChangeLang} value={this.state.language}>
                     <option value="ABAP">ABAP</option>
                     <option value="ABNF">ABNF</option>
                     <option value="BRAINFUCK">BRAINFUCK</option>
                     <option value="C">C</option>
                 </select>
              </div>
              <div className="form-group">
                <label htmlFor="description">Style</label>
                <select className="style" id="style" onChange={this.onChangeStyle} value={this.state.style}>
                     <option value="abap">abap</option>
                     <option value="material">material</option>
                     <option value="monokai">monokai</option>
                     <option value="vscode">vscode</option>
                 </select>
              </div>
              <button onClick={this.saveSnippet} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      );
    }
  }
  

