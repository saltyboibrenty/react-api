import React, { Component } from "react";
import axios from "axios";
import "./component.css";
import { Link } from "react-router-dom";

export default class Snippet extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeCode = this.onChangeCode.bind(this);
        this.onChangeLin = this.onChangeLin.bind(this);
        this.onChangeLang = this.onChangeLang.bind(this);
        this.onChangeStyle = this.onChangeStyle.bind(this);
        this.deleteSnippet = this.deleteSnippet.bind(this);
        this.updateSnippet = this.updateSnippet.bind(this);

        this.state = {
          currentSnippet: {
            title: "",
            code: "",
            linenos: false,
            language: "",
            style: "",
            published: false,
            submitted: false
          },
          message: ""
        };
      }
    
      componentDidMount() {
        this.refreshList();
        // this.getTutorial(this.props.match.params.id);
      }

      deleteSnippet() {
        axios.delete("http://127.0.0.1:8000/snippets/"+ this.props.match.params.id+"/",{
            auth: {
                username: "brent",
                password: "Brent2463"
        }})
          .then(response => {
            this.setState({
                currentSnippet:false
            })
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    
      refreshList(){
        axios.get("http://127.0.0.1:8000/snippets/" + this.props.match.params.id+"/",this.state.currentSnippet)
        .then(res =>{
          this.setState({
            currentSnippet:res.data
          })
          console.log(res.data)
        })
        .catch(e => {
            console.log(e);
          });
      } 

      updateSnippet(){
        axios.put("http://127.0.0.1:8000/snippets/" + this.props.match.params.id+"/",this.state.currentSnippet,{
            auth: {
                username: "brent",
                password: "Brent2463"
        }})
        .then(res => {
            console.log(res.data);
            this.setState({
              message: "The tutorial was updated successfully!"
            });
          })
          .catch(e => {
            console.log(e);
          });
      }

      onChangeTitle(e) {
        const title = e.target.value;
    
        this.setState(function(prevState) {
          return {
            currentSnippet: {
              ...prevState.currentSnippet,
              title: title
            }
          };
        });
      }
    
      onChangeCode(e) {
        const code = e.target.value;
        
        this.setState(prevState => ({
          currentSnippet: {
            ...prevState.currentSnippet,
            code: code
          }
        }));
      }  
        onChangeLin(e) {
            const linenos = e.target.checked;
        
            this.setState(function(prevState) {
            return {
                currentSnippet: {
                ...prevState.currentSnippet,
                linenos: linenos
                }
            };
            });
        }

        onChangeLang(e) {
            const language = e.target.value;
            
            this.setState(prevState => ({
              currentSnippet: {
                ...prevState.currentSnippet,
                language: language
              }
            }));
          }
          onChangeStyle(e) {
            const style = e.target.value;
            
            this.setState(prevState => ({
              currentSnippet: {
                ...prevState.currentSnippet,
                style: style
              }
            }));
          }
    
     
render() {
    const { currentSnippet } = this.state;

    return (
      <div>
        {currentSnippet ? (
          <div className="edit-form">
            <form>
            <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  value={currentSnippet.title}
                  onChange={this.onChangeTitle}
                />
            </div>
              <div className="form-group">
                <label>Code</label>
                <textarea
                  className = "codeinput"
                  id = "code" 
                  rows="10" 
                  cols="50" 
                  value={currentSnippet.code} 
                  onChange={this.onChangeCode}> 
                </textarea> 
              </div>
              <div className="form-group">
                <label htmlFor="description">Linenos</label>
                <input
                  type="checkbox"
                  required
                  checked={currentSnippet.linenos}
                  onChange={this.onChangeLin}
                />
              </div>
              <div className="form-group">
                <label>Language</label>
                <select 
                  className="languages"
                  onChange={this.onChangeLang} 
                  value={currentSnippet.language}>
                     <option value="abap">ABAP</option>
                     <option value="abnf">ABNF</option>
                     <option value="brainfuck">BRAINFUCK</option>
                     <option value="c">C</option>
                 </select>
              </div>
              <div className="form-group">
                <label>Style</label>
                <select 
                  className="style" 
                  onChange={this.onChangeStyle} 
                  value={currentSnippet.style}>
                     <option value="abap">abap</option>
                     <option value="material">material</option>
                     <option value="monokai">monokai</option>
                     <option value="friendly">friendly</option>
                 </select>
              </div>
            </form>
            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteSnippet}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateSnippet}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
        <div className = "success">
            <h4 className = "created-message">Snippet Deleted!</h4>
            <Link className = "link" to="/snippets"><button className="btn-deleted">
              Snippet List
            </button></Link>
            
          </div>
        )}
      </div>
    );
  }
}