import React, { Component } from 'react'
import { connect } from "react-redux"
import {createNote} from "../actions/notes.js"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const initialState = {
    title: "",
    topic:"",
    content: "",
    url: "" 
}

class NewNoteForm extends Component {
    state = initialState

    handleChange = (event) => {
        this.setState( {[event.target.name]: event.target.value})
    }

    resetForm = () => {
        this.setState(initialState)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createNote(this.state, this.props.history)
           .then(response => {
               if(!response.error)  {
                   this.resetForm()
                   this.props.history.push("/notes")
               }
           })
    }

    render() {
        console.log(this.state)
        //debugger
        return (
            <div className="NewNoteForm">
                <h4>Add a new note</h4>
                <div className='form-group'>
                    <form onSubmit={this.handleSubmit}>
                        <label className='form-label' htmlFor="title">Title</label>
                        <br></br>
                        <input className = {'form-control'} name="title" placeholder="title" onChange={this.handleChange} value={this.state.title} />
                        <br></br>
                        <br></br>
                        <label className='form-label' htmlFor="topic">Topic</label>
                        <br></br>
                        <input className = {'form-control'} name="topic" placeholder="topic" onChange={this.handleChange} value={this.state.topic} />
                        <br></br>
                        <br></br>
                        <label className='form-label' htmlFor="content">Content</label>
                        <br></br>
                        <textarea className = {'form-control'} name="content" id="" placeholder="add content" cols="30" rows="10"   onChange={this.handleChange} value={this.state.content}></textarea>
                        <br></br>
                        <br></br>
                        <label className='form-label' htmlFor="url">Url</label>
                        <br></br>
                        <input className = {'form-control'} name="url" placeholder="url" onChange={this.handleChange} value={this.state.url} />
                        <br></br>
                        <br></br>
                        
                        {/* <input type="submit" value="Create Note" />*/}
                        <Button variant="primary" type="submit">
                                Create Note
                        </Button>
                    </form>
                </div>

            </div>
        )
        
    }
}

export default connect(null, { createNote })(NewNoteForm);