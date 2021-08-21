// import React, { useState } from 'react';


// function Create(){

//     const [title, setName] = useState('')
//     const [code, setCode] = useState('')
//     const [language, setLang] = useState('')

//     const displayInfo = () => {
//         console.log(title);
//         console.log(code);
//         console.log(language);
//     };
//     // const handleOnSubmit = (event) => {
//     //     event.preventDefault();
//     //     const values = [bookname, author, price, quantity];
//     //     let errorMsg = '';
//     // // const onSubmit = e => {
//     // //     e.preventDefault();
//     // //     const articleNew = {
//     // //         id: article.length+1,
//     // //         title,
//     // //         code,
//     // //         language
//     // //     }
//     // // }

//     return (
//         <div className="snippet">
//             <div className="info">
//                 <label className= "title">Title:</label>
//                 <input className = "titleinput" type="text" onChange={(event) => {setName(event.target.value)}}/>
//                 <label className = "code">Code:</label>
//                 <textarea className = "codeinput" rows="10" cols="50"onChange={(event) => {setCode(event.target.value)}}/>       
//                 <label className = "code" for="languages">Language:</label>
//                 <select className="languages" id="languages" onChange={(event) => {setLang(event.target.value)}}>
//                     <option value="ABAP">ABAP</option>
//                     <option value="ABNF">ABNF</option>
//                     <option value="BRAINFUCK">BRAINFUCK</option>
//                     <option value="C">C</option>
//                 </select>
                
//                 <button onClick={displayInfo}>POST</button>
//             </div>
//         </div>
//     )
// }
// export default Create;


import "./component.css";
import React, { Component } from "react";
import TutorialDataService from "./tutorialservice";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeCode = this.onChangeCode.bind(this);
    this.onChangeLang = this.onChangeLang.bind(this);
    this.onChangeLin = this.onChangeLin.bind(this);
    this.saveSnippet = this.saveSnippet.bind(this);
    this.newSnippet = this.newSnippet.bind(this);

    this.state = {
      id: null,
      title: "",
      code: "",
      language: "",
      linenos: false,
      published: false,
      submitted: false
    };
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

  onChangeLang(e) {
    this.setState({
      language: e.target.value
    });
  }
  onChangeLin(e) {
    this.setState({
      linenos: e.target.value
    });
  }
  saveSnippet() {
    var data = {
      title: this.state.title,
      code: this.state.code,
      language: this.state.language,
      linenos: this.state.linenos
    };

    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          code: response.data.code,
          language: response.data.language,
          linenos: response.data.linenos,
          published: response.data.published,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
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
                <textarea className = "codeinput" rows="10" cols="50"onChange={this.onChangeCode} value={this.state.code}> </textarea> 
              </div>

              <div className="form-group">
                <label htmlFor="description">Linenos</label>
                <input
                  type="checkbox"
                  id="title"
                  required
                  value={this.state.title}
                  onChange={this.onChangeTitle}
                  name="title"
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
  
              <button onClick={this.saveSnippet} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      );
    }
  }
  

